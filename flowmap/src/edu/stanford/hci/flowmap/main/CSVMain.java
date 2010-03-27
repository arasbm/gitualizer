package edu.stanford.hci.flowmap.main;

import java.awt.BorderLayout;
import java.awt.Component;
import java.awt.Dimension;
import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.ComponentAdapter;
import java.awt.event.ComponentEvent;
import java.io.File;
import java.util.Iterator;

import javax.swing.JFileChooser;
import javax.swing.JMenuBar;
import javax.swing.JPanel;
import javax.swing.JScrollPane;

import edu.stanford.hci.flowmap.db.CSVQueryRecord;
import edu.stanford.hci.flowmap.db.QueryRecord;
import edu.stanford.hci.flowmap.db.QueryRow;
import edu.stanford.hci.flowmap.model.Globals;
import edu.stanford.hci.flowmap.model.UserOptions;
import edu.stanford.hci.flowmap.structure.Graph;
import edu.stanford.hci.flowmap.structure.Node;
import edu.stanford.hci.flowmap.utils.WindowUtilities;

/**
 * This version of the code reads from a CSV file the source and destination data 
 * for a flow map.
 * 
 * This software is distributed under the Berkeley Software Distribution License.
 * Please see http://graphics.stanford.edu/~dphan/code/bsd.license.html
 * 
 * All this code in edu.stanford.hci.flowmap was written by one of 
 * the following authors:
 * 
 * @author <a href="http://graphics.stanford.edu/~dphan">Doantam Phan</a>
 * @author <a href="http://graphics.stanford.edu/~lingxiao">Ling Xiao</a>
 * @author <a href="http://graphics.stanford.edu/~ronyeh">Ron Yeh</a>
 *
 */
public class CSVMain extends JPanel implements ActionListener {
	private MapDisplayPanel display;
	private MapMenuBar mapMenu; 
	private Dimension screenSize;
	private ControlPanel control;
	
	private UserOptions userOptions;
	private CSVQueryRecord queryRecord;
	JFileChooser chooser; 
	
	/**
	 * Constructs this panel, which we can use to interactively query the 
	 * database and create a flow map.
	 * @param file
	 */
	public CSVMain(String file) {
		super();
		Globals.currentType = Globals.ProgramType.INTERACTIVE;
		chooser = new JFileChooser();
		if (file != null)
			queryRecord = new CSVQueryRecord(new File(file));
		
		screenSize = Globals.getScreenDimension();
	
		userOptions = new UserOptions();
		control = new ControlPanel(new FlowLayout(), userOptions);
		display = new MapDisplayPanel(screenSize);
		
		JScrollPane scrollPane = new JScrollPane(display);
		scrollPane.setPreferredSize(screenSize);
		mapMenu = new MapMenuBar(this);
	
		
		BorderLayout layout = new BorderLayout();
		this.setLayout(layout);
		
		this.add(control, BorderLayout.NORTH);
		this.add(scrollPane, BorderLayout.CENTER);		
		
		this.addComponentListener(new ComponentAdapter() {

			public void componentResized(ComponentEvent e) {
				Component c  = e.getComponent();
				display.updateScreenSize();
			}
			
		});
	
	}
	
	/**
	 * Method to pass this menubar to the WindowUtilities handler
	 * @return the menu bar
	 */
	public JMenuBar getMenuBar() {
		return mapMenu;
	}
	
	public static void main(String[] args) {
		WindowUtilities.setNativeLookAndFeel();
		CSVMain mapMain=null;
		if (args.length == 0) {
			mapMain = new CSVMain(null);
		} else if (args.length == 1){
			mapMain = new CSVMain(args[0]);
		} else {
			System.out.println("Usage: FlowMapLayout <optional csvfile>");
			System.exit(0);
			
		}
		WindowUtilities.openInJFrame(mapMain, 1024, 768, mapMain.getMenuBar(), "FlowMapLayout 0.1 alpha");
		mapMain.drawDisplay();
	}
	
	private Graph createNodes(QueryRecord flowRecord) {
		
		userOptions.putString(UserOptions.CURRENT_FLOW_TYPE, flowRecord.getSourceRow().getRowSchema().getDefaultValueId());
		
		Graph originalGraph = new Graph();
		assert(flowRecord.getSourceRow() != null);
		Node rootNode = new Node(flowRecord.getSourceRow());
		rootNode.setRootNode(true);
		
		originalGraph.addNode(rootNode);
		originalGraph.setRootNode(rootNode);
			
		QueryRow row;
		Node dest;
		Iterator i = flowRecord.getRowsIterator();
		
		
		while (i.hasNext()) {
			row = (QueryRow)i.next();
			
			// if the root node is a destination, just ignore it
			if (row.getName().equals(rootNode.getName())) {
				continue;
			}
			
			dest = new Node(row);
			originalGraph.addNode(dest);
			
			
		}
		
		return originalGraph;
		
	}
	
	/**************************************************************************
	 * Event handling code
	 **************************************************************************/
	public void actionPerformed(ActionEvent e) {
		String action = e.getActionCommand();
		
		if (action.equals(MapMenuBar.OPEN)) {
			int returnValue = chooser.showOpenDialog(this);
			if (returnValue == JFileChooser.APPROVE_OPTION) {
				File f = chooser.getSelectedFile();
				queryRecord = new CSVQueryRecord(f);
				drawDisplay();
			}
		} else if (action.equals(MapMenuBar.SAVERENDER)) {
			int returnValue = chooser.showSaveDialog(this);
			if (returnValue == JFileChooser.APPROVE_OPTION) {
				File f = chooser.getSelectedFile();
				System.out.println("Saving .jpg file to: " + f);
				display.saveImage(f);
				
			}
		} else if (action.equals(MapMenuBar.SAVE2EPS)) {
			int returnValue = chooser.showSaveDialog(this);
			if (returnValue == JFileChooser.APPROVE_OPTION) {
				File f = chooser.getSelectedFile();
				System.out.println("Saving .eps file to: " + f);
				display.saveToEps(f);
			}
		} else if (action.equals(MapMenuBar.EXIT)) {
			System.exit(0);
		}
	}
	
	public void drawDisplay() {
		if (queryRecord != null) {
			Graph graph = createNodes(queryRecord);			
			display.updateDisplay(graph, userOptions, queryRecord);
		}
	}
}
