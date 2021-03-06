<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <title>Exporting data from Linux kernel history into a JSON file</title>
	<link rel="stylesheet" href="style.css" type="text/css" media="screen">
</head>
<body>
<div id="chart"></div>
<?php
ini_set('memory_limit', '64M');
ini_set('maximum_execution_time', '200s');
//represents a commit
class Node {
	public $id=0;
	public $parentList=array();
	public $authorName="";
	//public $signedBy=array(); dont know how to get this yet
	public $authorDate=""; //unix timestamp
	public $relativeDate;  //relative author date
	public $authorEmail="";
	public $committerName;
	public $commitDate;	
	public $subsystem; //todo: make this an array
	public $modificationSum=0;

	//Drawing attriutes
	public $location;  //a 2D point
	public $direction; //a vector
	public $thickness = 1;
	public $lineColor;
	
	public function __toString() {
		$retStr="<pre>Node: $this->id \nAuthor: $this->authorName\nAuthor Email: $this->authorEmail\nAuthor Date: $this->authorDate\nCommitted on: $this->commitDate\nSybsystem[0]: ".$this->subsystem[0]."\nTotal Modifications: $this->modificationSum\n";
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

Class GitParser {
	private $PathToRepo="";
	public $subsystemList=array(); //list of all subsytems that have been modified
	public $colorList=array("#e9de2a","#79e92a","#29a9e9","#293fe9", "#5f29e9","#a529e9","#2267bb","#ff2cbc","#ff2f2c","#c8950b","#c89fb7","#a0c89f","#0c0f4c","#402626");
	private $lastColorIndex=0;

	function __construct($path) {
		$this->pathToRepo=$path;
		chdir($this->pathToRepo);
		//echo "<pre>in class path: ".getcwd()."\n</pre>";

	}
	public function getLastNode() {
		return shell_exec("git log -1 --pretty=format:\"%h\"");
	}

	/*Takes a shaw1 id, queries the git log then creates and returns the coresponding node object*/
	public function getNode($nodeId) {
		$node = new Node;
		$results = shell_exec("git log -1 $nodeId --pretty=format:\"id: %h%npa: %p%nan: %an%nae: %ae%nad: %at%nar: %ar%ncd: %ct%ncn: %cn\" --numstat --dirstat");
		foreach(preg_split("/(\r?\n)/", $results) as $line){
			$flag=substr($line,0,2);
			$line=str_replace("\t"," ",$line);
			$item=explode(" ", $line);
			if($flag==="id") {
				$node->id="$item[1]";
			} else if($flag==="pa") {
				for($pi=1; $pi < sizeof($item); $pi++) {
					$node->parentList[$pi-1]=$item[$pi];
				}
			} else if($flag==="ad") {
				$node->authorDate=$item[1];
			} else if($flag==="ar") {
				$node->relativeDate=substr($line,4);
			} else if($flag==="an") {
				$node->authorName=substr($line,4);
			} else if($flag==="ae") {
				$node->authorEmail=$item[1];
			} else if($flag==="cd") {
				$node->commitDate=$item[1];
			} else if($flag==="cn") {
				$node->committerName=substr($line,4);
			} else if(substr($flag,0,1)===" ") {
				$dirs=explode("/", $item[2]);
				if(isset($node->subsytem)) {
					//we dont need to do anything here then
				} else {
					$node->subsystem="$dirs[0]"; 
					if(isset($this->subsystemList["$node->subsystem"])) {
						$node->lineColor=$this->subsystemList["$node->subsystem"];
					} else {
						$this->subsystemList["$node->subsystem"]=$this->colorList[$this->lastColorIndex];
						if($this->lastColorIndex < sizeof($this->colorList)-1) {
							 $this->lastColorIndex++;
						}
						$node->lineColor=$this->subsystemList["$node->subsystem"];
					}
				}
			} else {
				//Assuming this is numstat line
				$node->modificationSum+=($item[1] + $item[2]);
			}
		}	
		$node->lineWidth=round(log($node->modificationSum,2)) + 1;
		if($node->lineWidth < 1) $node->lineWidth=1;
		return $node;	
	}	
}	

class Extractor {
	public $canvasW=2000;
	public $canvasH=500;
	public $offsetH=400;
	public $since=1289992000; //From this date
	public $until=1291442400; //To this date
	public $visited=array(); // [shaw1 id]=true or false
	public $minThickness=2; //pixels
	public $nodeList=array();
	
	private $dummyCount = 0; //for testing
	private $gitParser;

	function __construct() {
		$this->gitParser = new GitParser("/home/arasbm/Projects/linux-2.6");
		$this->timePositionRatio=$this->canvasH / ($this->until - $this->since);
	}

	//extracts the recent history going back up to "since"
	public function startFromLatest() {
		$lastShaw=shell_exec("git log -1 --pretty=format:\"%h\"");
		$this->recCommitExtractor($lastShaw);
	}
	/* recursively extracts commit nodes from git and stores them in nodeList[] array, 
	 * this function will likely take a long time */
	public function recCommitExtractor($nodeId) {
		$cNode=$this->gitParser->getNode($nodeId);
		$this->dummyCount++;
		if(in_array("$nodeId", $this->visited)) {
			//echo "Again... ".$nodeId."<br />";
			return;
		} else {
			$this->visited[]="$nodeId";
			if($cNode->authorDate < $since | $this->dummyCount > 100) {
				$cNode->parentList=array();
				$this->nodeList[]=$cNode;
				//echo "too old".$nodeId;
			} else {
				$this->nodeList[]=$cNode;
				foreach($cNode->parentList as $p) {
					$this->recCommitExtractor($p);
				}
			}
		}
	}
	
	//prints the content of nodeList in JIT graph JSON format
	public function printJSON() {
	
	echo	"var json = [";
	for($i=0; $i<sizeof($this->nodeList); $i++) {
		$node=$this->nodeList[$i];
                $grav_url = "http://www.gravatar.com/avatar.php?gravatar_id=".md5( strtolower( $node->authorEmail ) ) .
"&default=" . urlencode( "http://web.uvic.ca/~arasbm/img/person.png" ) . "&size=60";
		echo	"{\n";
		echo	"\"id\": \"$node->id\",\n";
		echo 	"\"name\": \"$node->authorName\",\n";
		echo 	"\"data\": {\n";
		echo 	"\t\"relativeDate\": \"$node->relativeDate\",\n";
		echo 	"\t\"authorEmail\": \"$node->authorEmail\",\n";
		echo	"\t\"avatar\": \"$grav_url\",\n";
		echo	"\t\"committerName\": \"$node->committerName\",\n";
		echo	"\t\"commitDate\": \"$node->commitDate\",\n";
		echo	"\t\"modificationSum\": \"$node->modificationSum\",\n";
		echo 	"\t\"subsystem\": \"$node->subsystem\",\n";
		echo 	"\t\"\$color\": \"$node->lineColor\"\n";
		echo	"},\n";
		echo 	"\"adjacencies\": [\n";
		for($j=0; $j<sizeof($node->parentList); $j++) {
			echo 	"\t{\n";
			echo 	"\t\"nodeTo\": \"".$node->parentList[$j]."\",\n";
			echo 	"\t\"data\": {";
			echo 	"\n\t\t\"\$lineWidth\": $node->lineWidth,";
			echo	"\n\t\t\"\$color\": \"$node->lineColor\"\n";
			echo	"\t\t}\n";
			echo 	"\t}";
			if ($j <(sizeof($node->parentList)-1)) echo ",\n";
		}
		echo	"]";
		echo 	"}";
		if ($i <(sizeof($this->nodeList)-1)) echo ",\n";		
	}
	echo	"];//end";
	}

	//prints the content of nodeList in an html table format
	public function printTable() {
	//List the node info in a table
        echo "<table width='90%'><tr>"; 
	echo "<tr><th>SHAW</th><th>Author</th><th>Author Email</th><th>Sign offs</th><th>Parents</th><th>Commit Date</th><th>Relative Date</th><th>Subsystem</th><th>Modification Sum</th>";
	foreach($this->nodeList as $node) {
		echo "<tr><td>";
		echo $node->id."</td><td>";
		echo $node->author."</td><td>";
		echo $node->authorEmail."</td><td>N/A</td><td>";
		foreach ($node->parentList as $p) {
			echo "[".$p."]\n ";
		}		
		echo "</td><td>";
		echo $node->commitDate."</td><td>";
		echo $node->relativeDate."</td><td>";
		foreach ($node->subsystem as $s) {
			echo "[".$s."]\n ";
		}
		echo "</td><td>";
		echo $node->modificationSum."</td><td>";
	}
	echo "</table>";
	}
}
	
	$extractor= new Extractor;
//	echo "Time ~ Position: ".$extractor->timePositionRatio."<br />";
//	$extractor->recCommitExtractor("e99cc29");
	$extractor->startFromLatest();
	echo "<pre>";
	$extractor->printJSON();
	echo "</pre>";

?>
</div>
</body>
</html>
