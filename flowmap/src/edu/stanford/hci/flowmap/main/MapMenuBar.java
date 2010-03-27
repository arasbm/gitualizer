package edu.stanford.hci.flowmap.main;

import java.awt.event.ActionListener;

import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;


/**
 * This software is distributed under the Berkeley Software Distribution License.
 * Please see http://graphics.stanford.edu/~dphan/code/bsd.license.html
 *
 */
public class MapMenuBar extends JMenuBar {
	public static final String OPEN = "Open CSV";
	public static final String SAVERENDER = "Save .jpg image";
	public static final String SAVE2EPS = "Save .eps image";
	public static final String EXIT = "Exit";

	
	
	private JMenu fileMenu;
	private JMenuItem openItem, exitItem,saveRenderItem, saveEpsItem;
	
	
	public MapMenuBar(ActionListener al) {
		super();
		
		fileMenu = new JMenu("File");
		openItem = new JMenuItem(OPEN);
		openItem.setActionCommand(OPEN);
		exitItem = new JMenuItem(EXIT);
		exitItem.setActionCommand(EXIT);
		
		saveRenderItem = new JMenuItem(SAVERENDER);
		saveRenderItem.setActionCommand(SAVERENDER);
		
		saveEpsItem = new JMenuItem(SAVE2EPS);
		saveEpsItem.setActionCommand(SAVE2EPS);
		
		
		fileMenu.add(openItem);
		fileMenu.addSeparator();
		fileMenu.add(saveRenderItem);
		fileMenu.add(saveEpsItem);
		fileMenu.add(exitItem);
		
	
		
		this.add(fileMenu);
		openItem.addActionListener(al);
		saveRenderItem.addActionListener(al);
		saveEpsItem.addActionListener(al);
	}
}
