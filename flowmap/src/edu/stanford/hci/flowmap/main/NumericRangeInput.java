package edu.stanford.hci.flowmap.main;

import java.awt.Color;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.FocusEvent;
import java.awt.event.FocusListener;

import javax.swing.Box;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;

import edu.stanford.hci.flowmap.model.UserOptions;

/**
 * A panel that allows the user to input a numerical range 
 * 
 * This software is distributed under the Berkeley Software Distribution License.
 * Please see http://graphics.stanford.edu/~dphan/code/bsd.license.html
 *
 */
public class NumericRangeInput extends JPanel implements FocusListener, ActionListener {
	private JLabel lowLabel, highLabel;
	private JTextField lowField, highField;
	private UserOptions userOptions;
	private String lowText, highText;
	
	/**
	 * Constructs an object that allows the user to input a numerical range
	 * @param title the label to assign to the border of this component
	 * @param lowText the name of the lower range
	 * @param highText the name of the higher range
	 * @param initLow the value initially in the low range
	 * @param initHigh the value initially in the high range
	 * @param lowSize the number of columns for the low input
	 * @param highSize the number of columns for the high input
	 */
	public NumericRangeInput(String title, String lowText, String highText, String initLow, String initHigh, int lowSize, int highSize, UserOptions userOptions) {
		super();
		//TitledBorder border = new TitledBorder(title);
		//this.setBorder(border);
		
		this.setBackground(Color.white);
		
		lowLabel = new JLabel(lowText);
		highLabel = new JLabel(highText);
		lowField = new JTextField(initLow, lowSize);
		highField = new JTextField(initHigh, highSize);
		this.add(lowLabel);
		this.add(lowField);
		this.add(Box.createHorizontalGlue());
		this.add(highLabel);
		this.add(highField);
		
		this.userOptions = userOptions;
		this.lowText = lowText;
		this.highText = highText;
		
		lowField.addFocusListener(this);
		highField.addFocusListener(this);
		
		userOptions.putDouble(lowText, Double.parseDouble(lowField.getText()));
		userOptions.putDouble(highText, Double.parseDouble(highField.getText()));
		
		lowField.addActionListener(this);
		highField.addActionListener(this);
		
	}
	
	public double getLow() {
		return Double.parseDouble(lowField.getText());
		
	}
	
	public double getHigh() {
		return Double.parseDouble(highField.getText());
	}

	/* (non-Javadoc)
	 * @see java.awt.event.FocusListener#focusGained(java.awt.event.FocusEvent)
	 */
	public void focusGained(FocusEvent arg0) {
	}

	/* (non-Javadoc)
	 * @see java.awt.event.FocusListener#focusLost(java.awt.event.FocusEvent)
	 */
	public void focusLost(FocusEvent arg0) {
		JTextField textField = ((JTextField)arg0.getComponent());
		if (textField == lowField) {
			userOptions.putDouble(lowText, Double.parseDouble(lowField.getText()));
		} else if (textField == highField) {
			userOptions.putDouble(highText, Double.parseDouble(highField.getText()));
		}
	}

	public void actionPerformed(ActionEvent e) {
		JTextField textField = ((JTextField)e.getSource());
		if (textField == lowField) {
			userOptions.putDouble(lowText, Double.parseDouble(lowField.getText()));
		} else if (textField == highField) {
			userOptions.putDouble(highText, Double.parseDouble(highField.getText()));
		}
		
	}
	
}
