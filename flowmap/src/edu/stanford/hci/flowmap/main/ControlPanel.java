package edu.stanford.hci.flowmap.main;


import java.awt.Color;
import java.awt.LayoutManager;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JCheckBox;
import javax.swing.JColorChooser;
import javax.swing.JPanel;
import javax.swing.border.TitledBorder;

import edu.stanford.hci.flowmap.model.Globals;
import edu.stanford.hci.flowmap.model.UserOptions;

/**
 * This software is distributed under the Berkeley Software Distribution License.
 * Please see http://graphics.stanford.edu/~dphan/code/bsd.license.html
 *
 */
public class ControlPanel extends JPanel {
	
	private NumericRangeInput displayWidthPanel;
	private ScaleChooserPanel scalePanel;
	private UserOptions userOptions;
	private JCheckBox showControlPoints;
	private JButton colorButton;
	
	public ControlPanel(LayoutManager layout, UserOptions userOptions) {
		super(layout);
		this.setBackground(Color.white);
		this.userOptions = userOptions;
		TitledBorder border = new TitledBorder("Display Parameters");
		this.setBorder(border);
		displayWidthPanel = new NumericRangeInput("Width of Curves (in pixels)", UserOptions.MIN_DISPLAY_WIDTH, UserOptions.MAX_DISPLAY_WIDTH, "1", "10", 3, 3, userOptions);

		
		
		colorButton = new JButton("Choose Flow Color");
		colorButton.addActionListener(new ActionListener() {

			public void actionPerformed(ActionEvent e) {
				Color chosenColor = JColorChooser.showDialog(ControlPanel.this, "Choose Flow Color", Globals.currentColor);
				if (chosenColor != null)
					Globals.currentColor = chosenColor;
			}
			
		});
	
		scalePanel = new ScaleChooserPanel(userOptions);
		
		this.add(colorButton);
		this.add(displayWidthPanel);
		this.add(scalePanel);
		showControlPoints = new JCheckBox("Show Control Points");
		showControlPoints.setBackground(Color.white);
		showControlPoints.setSelected(true);
		showControlPoints.addActionListener(new ActionListener() {

			public void actionPerformed(ActionEvent e) {
				if (showControlPoints.isSelected()) {
					Globals.showDummyNodeCircles = true;
				} else {
					Globals.showDummyNodeCircles = false;
				}
			}
			
		});
		this.add(showControlPoints);
	}
	
	public double getLowWidth() {
		return displayWidthPanel.getLow();
	}
	
	public double getHighWidth() {
		return displayWidthPanel.getHigh();
	}
	
	public String getScaleFunction() {
		return scalePanel.getSelected();
	}
	
}
