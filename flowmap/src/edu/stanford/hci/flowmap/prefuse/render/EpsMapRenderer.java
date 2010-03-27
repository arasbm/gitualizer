package edu.stanford.hci.flowmap.prefuse.render;

import java.awt.Dimension;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Iterator;
import java.util.LinkedList;

import org.jibble.epsgraphics.EpsGraphics2D;

import edu.stanford.hci.flowmap.model.Globals;
import edu.stanford.hci.flowmap.prefuse.item.FlowEdgeItem;
import edu.stanford.hci.flowmap.prefuse.item.FlowNodeItem;


/**
 * This software is distributed under the Berkeley Software Distribution License.
 * Please see http://graphics.stanford.edu/~dphan/code/bsd.license.html
 *
 */
public class EpsMapRenderer {
	private FlowNodeRenderer nodeRenderer;

	private FlowEdgeRenderer edgeRenderer;

	private File file;

	private FlowNodeItem rootNodeItem;

	public EpsMapRenderer(FlowNodeRenderer nodeRenderer,
			FlowEdgeRenderer edgeRenderer, File file,
			FlowNodeItem rootNodeItem) {

		this.nodeRenderer = nodeRenderer;
		this.edgeRenderer = edgeRenderer;
		this.file = file;
		this.rootNodeItem = rootNodeItem;

	}

	public void renderMap() {
		LinkedList queue = new LinkedList();
		try {
			FileOutputStream outputStream = new FileOutputStream(file);
			Dimension dim = Globals.getScreenDimension();
			EpsGraphics2D epsGraphics = new EpsGraphics2D("Example",
					outputStream, 0, 0, (int) dim.getWidth(), (int) dim
							.getHeight());

			FlowNodeItem nodeItem;
			// draw the tree out to the graphics object
			queue.clear();
			queue.add(rootNodeItem);
			
			// draw edges first
			while (queue.size() > 0) {
				nodeItem = (FlowNodeItem) queue.removeFirst();
				//System.out.println("EpsRender: " + nodeItem);

				//nodeRenderer.render(epsGraphics, nodeItem);

				Iterator outEdges = nodeItem.getOutEdges().iterator();
				while (outEdges.hasNext()) {
					FlowEdgeItem edgeItem = (FlowEdgeItem) outEdges.next();
					edgeRenderer.render(epsGraphics, edgeItem);
					queue.add(edgeItem.getAdjacentNode(nodeItem));
				}
			}
			
			// draw nodes second
			queue.add(rootNodeItem);
			while (queue.size() > 0) {
				nodeItem = (FlowNodeItem) queue.removeFirst();
				//System.out.println("EpsRender: " + nodeItem);

				nodeRenderer.render(epsGraphics, nodeItem);

				Iterator outEdges = nodeItem.getOutEdges().iterator();
				while (outEdges.hasNext()) {
					FlowEdgeItem edgeItem = (FlowEdgeItem) outEdges.next();
					//edgeRenderer.render(epsGraphics, edgeItem);
					queue.add(edgeItem.getAdjacentNode(nodeItem));
				}
			}

			epsGraphics.flush();
			epsGraphics.close();
			outputStream.close();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}
