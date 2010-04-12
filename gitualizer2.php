<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <title>Visualization of Code Flow in the Linux Project</title>
        <script src="raphael.js" type="text/javascript" charset="utf-8"></script>
        <script src="jquery.js" type="text/javascript" charset="utf-8"></script>
	<link rel="stylesheet" href="style.css" type="text/css" media="screen">

</head>
<body>
<div id="chart"></div>
<?php
ini_set('memory_limit', '64M');

//represents a commit
class Node {
	public $id=0;
	public $parentId=array();
	public $authorName="";
//	public $signedBy=array();
	public $authorDate="";
	public $authorEmail="";
	public $commitDate;
	public $subsystem=array();
	public $modificationSum=0;

	//Drawing attriutes
	public $location; //a 2D point
	public $direction; //a vector
	public $thickness = 1;
	
	public function __toString() {
		$retStr="<pre>Node: $this->id \nAuthor: $this->authorName\nAuthor Email: $this->authorEmail\nAuthor Date: $this->authorDate\nCommitted on: $this->commitDate\nSybsystems: ".$this->sybsystem."\nTotal Modifications: $this->modificationSum\n";
		return $retStr;
	}
}

//Represents a point in 2D plain
class Point {
	public $X="";
	public $Y="";
	function __construct($inX,$inY) {
		$this->X=$inX;
		$this->Y=$intY;
	}
	public function getX() {
		return "$this->X";
	}
	public function getY() {
		return "$this->Y";
	}
}

//Represents a vector in 2D plain
Class Vector {
	public $vForce; //vertical magnitude
	public $hForce; //horizontal magnitude
	function __construct($verticalForce,$horizontalForce) {
		$this->vForce=$verticalForce;
		$this->hForce=$horizontalForce;
	}
}

//A branch
class Branch {
	public $startPosition; //the 2D point branch starts from
	public $node=array(); 
	public $totalModified=0; //Total of the modificationSum of all the nodes in this branch 
}


Class GitParser {
	private $PathToRepo="";
	function __construct($path) {
		$this->pathToRepo=$path;
		chdir($this->pathToRepo);
		//echo "<pre>in class path: ".getcwd()."\n</pre>";

	}
	public function getLastNode() {
		$results = shell_exec("git log -1 --numstat --dirstat");
		echo "<pre>".$results."</pre>";
	}

	/*Takes a shaw1 id, queries the git log then creates and returns the coresponding node object*/
	public function getNode($nodeId) {
		$node = new Node;
		$results = shell_exec("git log -1 $nodeId --date=raw --pretty=format:\"id: %h%npa: %p%nan: %an%nae: %ae%nad: %ad%ncd: %cd\" --numstat --dirstat");
		foreach(preg_split("/(\r?\n)/", $results) as $line){
			$flag=substr($line,0,2);
			$line=str_replace("\t"," ",$line);
			$item=explode(" ", $line);
			if($flag==="id") {
				$node->id="$item[1]";
			} else if($flag==="pa") {
				for($pi=1; $pi < sizeof($item); $pi++) {
					$node->parentId[$pi-1]=$item[$pi];
				}
			} else if($flag==="ad") {
				$node->authorDate=$item[1];
			} else if($flag==="an") {
				$node->authorName=substr($line,4);
			} else if($flag==="ae") {
				$node->authorEmail=$item[1];
			} else if($flag==="cd") {
				$node->commitDate=$item[1];
			} else if(substr($flag,0,1)===" ") {
				$subsystem[]=$item[1];
			} else {
			//Assuming this is numstat line
				$node->modificationSum+=($item[1] + $item[2]);
			}
			//echo "<pre>Flag: $flag\t line: ".$line."\n</pre>";
		}	
		//echo "<br />".$node->__toString();
		return $node;	
	}
	
}	

class Extractor {
	public $canvasW=2000;
	public $canvasH=500;
	public $offsetH=400;
	public $since=1284412000; //From this date
	public $until=1291442400; //To this date
	public $branches = array();
	public $visited=array(); //shaw1 id of visited nodes
	public $timePositionRatio;
	public $initialVector=20;
	public $vectorRatio=2;
	public $minThickness=2; //pixels

	private $gitParser;

	function __construct() {
		$this->gitParser = new GitParser("/home/arasbm/Projects/linux-2.6");
		$this->timePositionRatio=$this->canvasH / ($this->until - $this->since);
	}

	public function recBranch($initNode) {
		$b=new Branch;
		$nextNode=$this->gitParser->getNode($initNode);
		$nextNode->location=new Point(($nextNode->commitDate-$since)*$timePositionRatio,$offsetH);
		$nextNode->direction=new Vector(0,20);
		
		$hasMore=true;
		$stepCount=0;
		while($hasMore && $stepCount < 10) {
			$stepCount++;
			if($nextNode->commitDate < $since) {
				//echo "reached <br />";
				$hasMore=false;
				break;
			} else if(sizeof($b->node) > 6) {
				//TODO this condition is just for testing and should be removed
				//echo "reached testing cap<br/>";
				$hasMore=false;
				break;
			} else if($this->visited[$nextNode->id]) {
				//skip visited nodes
				//echo "ignoring visited";
				break;
			}
			
			$this->visited[$nextNode->id]=true; //mark current node as visited

			$b->node[]=$nextNode; //add this node current branch

			$b->totalModified+=$nextNode->modificationSum;			
			//calculate force and location for the new node	
			$vF=$nextNode->direction->vForce + $vectorRatio;
			$hF=$nextNode->direction->hForce - $vectorRatio;
			if ($vF > $initialVector) {
				$vF = $initialVector;
			}
			if ($hF < 0) {
				$hF = 0;
			}
			$y=$nextNode->location->Y - (hF / 2);

			/* If the corrent node has two parents, add one of them to the current branch 
			 * and try to make a branch from the other parent, starting from the merge point and going back.
			 */
			if(sizeof($nextNode->parentId)>1) {
				$nextBranch=$nextNode->parentId[1];
				$nextNode=$this->gitParser->getNode($nextNode->parentId[0]);
				$this->recBranch($nextBranch);
			} else {
				$nextNode=$this->gitParser->getNode($nextNode->parentId[0]);
			}
			$nextNode->direction=new Vector($hF,$vF);
			$nextNode->location=new Point(($nextNode->commitDate-$since)*$timePositionRatio,$y);
		}

		//set tickness
		$temp=$b->totalModified;
		for($k=0;$k<sizeof($b->node);$k++) {
			$temp-=$b->node[k]->modificationSum; //TODO check accuracy of this
			if(log($temp,2) > $this->minThickness) {
				$b->node[k]->thickness=log($temp,2);
			} else {
				$b->node[k]->thickness=$this->minThickness;	
			}
		}
		$this->branches[]=$b; //add this branch to the list
	}
}
	
	$extractor= new Extractor;
//	echo "Time ~ Position: ".$extractor->timePositionRatio."<br />";
	$extractor->recBranch("e99cc29");
	
	//echo "Size of branch is: ".sizeof($extractor->branches)."<br />";
	//print_r($extractor->branches);
	
	//Traverse the branch data and draw it
	echo '<script type="text/javascript" charset="utf-8">
		window.onload = function () {';
        echo "var paper = Raphael(\"chart\", $extractor->canvasW, $extractor->canvasH);\n";
	echo "var color0 = Raphael.getColor();";
	echo "paper.path(\"M0,450L 2000,450\").attr({stroke: color0, \"stroke-width\": 20});";
	echo "var color1 = Raphael.getColor();\n";
	echo 'function curve(x, y, ax, ay, bx, by, zx, zy, thickness, color) {
                    paper.path("M" x, y "C", ax, ay, bx, by, zx, zy").attr({stroke: color, "stroke-width": thickness});
}';
	
	for($i=0; $i < sizeof($extractor->branches); $i++) {
		//$s=sizeof($extractor->branches[$i]->node);
		//echo "<b>New Branch [$i] size: $s</b><br />";		
		for($j=1;$j<sizeof($extractor->branches[$i]->node);$j++) {
			$thisNode= $extractor->branches[$i]->node[$j];
			$prevNode= $extractor->branches[$i]->node[$j-1];
			$x=$thisNode->location->X;
			$y=$thisNode->location->Y;
			$ax=$thisNode->direction->hForce;
			$ay=$thisNode->direction->vForce;
			$th=$thisNode->thickness;
			try{	
				echo "curve($x,$y,$ay,$ax,$ax,$ay, $th , color1 );";
			} catch(Exception $err) {
				//echo $err
			}
		}	
	}
	//Some testing
	/*$gitParser->getLastNode();
	echo "<br />getNode: ";
	$gitParser->getNode("724e6d3fe8003c3");
	$gitParser->getNode("e99cc29");
	echo getcwd()." : is tha path outside after the change in class\n";
//	$results = shell_exec("git log -50 --simplify-merges --numstat --dirstat");
	*/
	echo "}</script>"
?>
</body>
</html>
