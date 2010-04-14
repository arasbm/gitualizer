var Log = {
    elem: false,
    write: function(text){
        if (!this.elem) 
            this.elem = document.getElementById('log');
        this.elem.innerHTML = text;
        this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
    }
};

function addEvent(obj, type, fn) {
    if (obj.addEventListener) obj.addEventListener(type, fn, false);
    else obj.attachEvent('on' + type, fn);
};


function init(){
    function get(id) {
      return document.getElementById(id);  
    };
    //init data
	var json = [
	{
		"id": "1",
		"name": "Linus",
		"data": {
			"authorDate": "2010-03-07",
			"commitDate": "2010-03-07",
			"modificationSum": "0"
		},
		"adjacencies": [
		{
			"nodeTo": "2",
			"data": {
				"weight": 5
			}
		}, {
			"nodeTo": "2",
			"data": {
				"weight": 5
			}
		}]
	}, {
		"id": "2",
		"name": "Amit",
		"data": {
			"authorDate": "2010-02-24",
			"commitDate": "2010-03-04",
			"modificationSum": "27"
		},
		"adjacencies": [{
			"nodeTo": "3",
			"data": {
				"weight": 3
			}
		},{
			"nodeTo": "4",
			"data": {
				"weight": 3
			}
		}]
	},
	{
		"id": "3",
		"name": "Linus",
		"data": {
			"authorDate": "2010-03-07",
			"commitDate": "2010-03-07",
			"modificationSum": "0"
		},
		"adjacencies": []
	}, {
		"id": "4",
		"name": "Amit",
		"data": {
			"authorDate": "2010-02-24",
			"commitDate": "2010-03-04",
			"modificationSum": "27"
		},
		"adjacencies": []
	},
	{
		"id": "5",
		"name": "Linus",
		"data": {
			"authorDate": "2010-03-07",
			"commitDate": "2010-03-07",
			"modificationSum": "0"
		},
		"adjacencies": []
	}, {
		"id": "6",
		"name": "Bob",
		"data": {
			"authorDate": "2010-02-24",
			"commitDate": "2010-03-04",
			"modificationSum": "27"
		},
		"adjacencies": [{
			"nodeTo": "3",
			"data": {
				'$lineWidth': 10,
				'$type' : 'arrow'
			}
		},{
			"nodeTo": "4",
			"data": {
				"weight": 3
			}
		}]
	}];
    //end
    var infovis = document.getElementById('infovis');
    var w = infovis.offsetWidth, h = infovis.offsetHeight;
    //init canvas
    //Create a new canvas instance.
    var canvas = new Canvas('mycanvas', {
        'injectInto': 'infovis',
        'width': w,
        'height': h,
        'backgroundColor': '#1a1a1a',
	'$orientation': "left",
        'levelsToShow': 2,
        'subtreeOffset': 8,
        'siblingOffset': 5,
        'levelDistance': 30,
        'withLabels': false,
        '$align': "left",        //options are left, right, center
        'multitree': false,
        'indent': 10,
        Node: {
          align: "center" 
    }});
    //end
    
    //init st
    //Create a new st instance
    var st = new st(canvas, {
        //set duration for the animation
        duration: 800,
        //set animation transition type
        transition: Trans.Quart.easeInOut,
        //set distance between node and its children
        levelDistance: 100,
        //set node and edge styles
        //set overridable=true for styling individual
        //nodes or edges
        Node: {
            overridable: true,
            height: 5,
            width: 0,
            type: 'none', //'rectangle', ‘none’, ‘circle’, ‘ellipse’, ‘rectangle’ and ‘square’.
            color: '#aaa',
	    dim: 15,
            lineWidth: 1
        },
        
        Edge: {
            overridable: true,
            type: 'quadratic:begin', //'none', 'line', 'bezier', 'quadratic:begin’, ‘quadratic:end’, 'arrow'
            color: '#ccc',
            dim: 15,
            lineWidth: 1
        },
        
        onBeforeCompute: function(node){
            Log.write("loading " + node.name);
        },
        
        onAfterCompute: function(){
            Log.write("done");
        },
        
        //This method is called on DOM label creation.
        //Use this method to add event handlers and styles to
        //your node.
        onCreateLabel: function(label, node){
            label.id = node.id;            
            label.innerHTML = node.name;
            label.onclick = function(){
                st.onClick(node.id);
            };
            //set label styles
            var style = label.style;
            style.width = 60 + 'px';
            style.height = 17 + 'px';            
            style.cursor = 'pointer';
            style.color = '#333';
            style.fontSize = '0.8em';
            style.textAlign= 'center';
            style.paddingTop = '3px';
        },
        
        //This method is called right before plotting
        //a node. It's useful for changing an individual node
        //style properties before plotting it.
        //The data properties prefixed with a dollar
        //sign will override the global node style properties.
        onBeforePlotNode: function(node){
            //add some color to the nodes in the path between the
            //root node and the selected node.
            if (node.selected) {
                node.data.$color = "#ff7";
            }
            else {
                delete node.data.$color;
                var GUtil = Graph.Util;
                //if the node belongs to the last plotted level
                if(!GUtil.anySubnode(node, "exist")) {
                    //count children number
                    var count = 0;
                    GUtil.eachSubnode(node, function(n) { count++; });
                    //assign a node color based on
                    //how many children it has
                    node.data.$color = ['#aaa', '#baa', '#caa', '#daa', '#eaa', '#faa'][count];                    
                }
            }
        },
        
        //This method is called right before plotting
        //an edge. It's useful for changing an individual edge
        //style properties before plotting it.
        //Edge data proprties prefixed with a dollar sign will
        //override the Edge global style properties.
        onBeforePlotLine: function(adj){
            if (adj.nodeFrom.selected && adj.nodeTo.selected) {
                adj.data.$color = "#eed";
                adj.data.$lineWidth = 3;
            }
            else {
                delete adj.data.$color;
                delete adj.data.$lineWidth;
            }
        }
    });
	
    //load json data
    st.loadJSON(json);

    //set the orientation
    //st.switchPosition("left", "replot");  

    //compute node positions and layout
    st.compute();
    //optional: make a translation of the tree
    //st.geom.translate(new Complex(-200, 0), "startPos");

    //emulate a click on the root node.
    st.onClick(st.root, { Move: { offsetY:-110 } });
    //end
}

