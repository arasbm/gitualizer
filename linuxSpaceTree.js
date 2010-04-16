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
    
var json = [{
"id": "dc57da3",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "7 hours ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1271359256",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "2fed94c",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "2b2f862",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "2fed94c",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "7 hours ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1271357780",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "00eef7b",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "19b3eec",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "00eef7b",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "7 hours ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1271357395",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "250541f",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "014f615",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "250541f",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "24 hours ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1271295963",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "96e35b4",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "6c9ff10",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "96e35b4",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "24 hours ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1271295931",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "f5c07a2",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "a6a5349",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "f5c07a2",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "24 hours ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1271295914",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "7223b91",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "d618540",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "7223b91",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "24 hours ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1271295869",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "d471a4b",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "091ebf0",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "d471a4b",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "24 hours ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1271295840",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "4e310fd",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "b560177",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "4e310fd",
"name": "Joe Perches",
"data": {
	"relativeDate": "34 hours ago",
	"authorEmail": "joe@perches.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=98ef9b90d87d8444e08034e5e5c70d1b&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1271266355",
	"modificationSum": "5",
	"subsystem": "lib",
	"$color": "#e9de2a"
},
"adjacencies": [
	{
	"nodeTo": "2ba3abd",
	"data": {
		"$lineWidth": 3,
		"$color": "#e9de2a"
		}
	}]},
{
"id": "2ba3abd",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "2 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1271206188",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "0fdfe5a",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "d88d405",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "0fdfe5a",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "2 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1271196616",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "44d2d37",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "0df5dd4",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "44d2d37",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "2 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1271183645",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "465de2b",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "c011f80",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "465de2b",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "2 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1271183568",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "0d0fb0f",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "a6d3702",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "0d0fb0f",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "3 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1271122895",
	"modificationSum": "1",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "64a8920",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "64a8920",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "3 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1271122798",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "50b88c4",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "ea90002",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "50b88c4",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "3 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1271122654",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "d6cf853",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "85b3cce",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "d6cf853",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "3 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1271122624",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "6a945f3",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "9f680ce",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "6a945f3",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "3 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1271122609",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "50fc88c",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "0826167",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "50fc88c",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "3 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1271122594",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "4505a49",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "c15d0fc",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "4505a49",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "3 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1271122571",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "fedfb94",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "f6be75d",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "fedfb94",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "3 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1271122496",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "44fa2b4",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "bade732",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "44fa2b4",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "3 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1271122465",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "0eddb51",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "be3bd22",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "0eddb51",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "6 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270839186",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "f163937",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "5091b35",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "f163937",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "6 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270839168",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "2f40842",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "8e7fccc",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "2f40842",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "6 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270839029",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "2f10ffc",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "3440c49",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "2f10ffc",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "6 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270839001",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "ce82653",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "930b9d9",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "ce82653",
"name": "David Howells",
"data": {
	"relativeDate": "9 days ago",
	"authorEmail": "dhowells@redhat.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=9ec16e18c2bf1b2893191c0f3e3aed0b&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270833123",
	"modificationSum": "6",
	"subsystem": "64.1%",
	"$color": "#29a9e9"
},
"adjacencies": [
	{
	"nodeTo": "d3e06e2",
	"data": {
		"$lineWidth": 4,
		"$color": "#29a9e9"
		}
	}]},
{
"id": "d3e06e2",
"name": "Pekka Enberg",
"data": {
	"relativeDate": "8 days ago",
	"authorEmail": "penberg@cs.helsinki.fi",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=d414e0f36d63155c09e25eb23c6b4dce&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270832990",
	"modificationSum": "0",
	"subsystem": "mm",
	"$color": "#293fe9"
},
"adjacencies": [
	{
	"nodeTo": "fc1c183",
	"data": {
		"$lineWidth": 1,
		"$color": "#293fe9"
		}
	}]},
{
"id": "fc1c183",
"name": "Pekka Enberg",
"data": {
	"relativeDate": "8 days ago",
	"authorEmail": "penberg@cs.helsinki.fi",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=d414e0f36d63155c09e25eb23c6b4dce&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270832990",
	"modificationSum": "12",
	"subsystem": "mm",
	"$color": "#293fe9"
},
"adjacencies": [
	{
	"nodeTo": "4dc86ae",
	"data": {
		"$lineWidth": 5,
		"$color": "#293fe9"
		}
	}]},
{
"id": "4dc86ae",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "6 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270832733",
	"modificationSum": "1",
	"subsystem": "drivers",
	"$color": "#5f29e9"
},
"adjacencies": [
	{
	"nodeTo": "9ddd3a3",
	"data": {
		"$lineWidth": 1,
		"$color": "#5f29e9"
		}
	}]},
{
"id": "9ddd3a3",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "7 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270753094",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "d620a7c",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "f05337c",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "d620a7c",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "7 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270746122",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "2aedd19",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "45c4d01",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "2aedd19",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "7 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270741025",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "cf90bfe",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "84fba5e",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "cf90bfe",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "7 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270737936",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "0a2851b",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "720fc22",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "0a2851b",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "7 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270737893",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "f5284e7",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "c25f7cf",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "f5284e7",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "8 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270691360",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "3eac4ab",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "320718e",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "3eac4ab",
"name": "Kevin Hilman",
"data": {
	"relativeDate": "8 days ago",
	"authorEmail": "khilman@deeprootsystems.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=00d45c4d4ef734cf57700b8be4956bf5&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270682105",
	"modificationSum": "6",
	"subsystem": "lib",
	"$color": "#e9de2a"
},
"adjacencies": [
	{
	"nodeTo": "04287f9",
	"data": {
		"$lineWidth": 4,
		"$color": "#e9de2a"
		}
	}]},
{
"id": "04287f9",
"name": "Al Viro",
"data": {
	"relativeDate": "8 days ago",
	"authorEmail": "viro@ZenIV.linux.org.uk",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=b1fecf6b03fc62f894bef52b49551915&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270681816",
	"modificationSum": "2",
	"subsystem": "fs",
	"$color": "#a529e9"
},
"adjacencies": [
	{
	"nodeTo": "48de8cb",
	"data": {
		"$lineWidth": 2,
		"$color": "#a529e9"
		}
	}]},
{
"id": "48de8cb",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "8 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270674111",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "63634c8",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "134fbad",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "63634c8",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "8 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270663386",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "fb1ae63",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "75392dd",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "fb1ae63",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "8 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270663343",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "addb2d6",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "472a474",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "addb2d6",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "8 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270655319",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "84db18b",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "af2b021",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "84db18b",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "8 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270654945",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "6948ec7",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "55b371d",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "6948ec7",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "8 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270654707",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "cc4fc29",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "18e5b53",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "cc4fc29",
"name": "David Howells",
"data": {
	"relativeDate": "9 days ago",
	"authorEmail": "dhowells@redhat.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=9ec16e18c2bf1b2893191c0f3e3aed0b&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270654685",
	"modificationSum": "2",
	"subsystem": "fs",
	"$color": "#a529e9"
},
"adjacencies": [
	{
	"nodeTo": "08dc179",
	"data": {
		"$lineWidth": 2,
		"$color": "#a529e9"
		}
	}]},
{
"id": "08dc179",
"name": "David Howells",
"data": {
	"relativeDate": "9 days ago",
	"authorEmail": "dhowells@redhat.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=9ec16e18c2bf1b2893191c0f3e3aed0b&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270654685",
	"modificationSum": "5",
	"subsystem": "arch",
	"$color": "#2267bb"
},
"adjacencies": [
	{
	"nodeTo": "ea56f41",
	"data": {
		"$lineWidth": 3,
		"$color": "#2267bb"
		}
	}]},
{
"id": "ea56f41",
"name": "David Howells",
"data": {
	"relativeDate": "9 days ago",
	"authorEmail": "dhowells@redhat.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=9ec16e18c2bf1b2893191c0f3e3aed0b&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270654685",
	"modificationSum": "0",
	"subsystem": "drivers",
	"$color": "#5f29e9"
},
"adjacencies": [
	{
	"nodeTo": "c783a29",
	"data": {
		"$lineWidth": 1,
		"$color": "#5f29e9"
		}
	}]},
{
"id": "c783a29",
"name": "Vladimir Zapolskiy",
"data": {
	"relativeDate": "9 days ago",
	"authorEmail": "vzapolskiy@gmail.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=508e4dda6a7e6954b5b8c9df9cac955c&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270654685",
	"modificationSum": "13",
	"subsystem": "drivers",
	"$color": "#5f29e9"
},
"adjacencies": [
	{
	"nodeTo": "8725d54",
	"data": {
		"$lineWidth": 5,
		"$color": "#5f29e9"
		}
	}]},
{
"id": "8725d54",
"name": "KAMEZAWA Hiroyuki",
"data": {
	"relativeDate": "9 days ago",
	"authorEmail": "kamezawa.hiroyu@jp.fujitsu.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=46cd99c1ae117141c7d1bab1772dc416&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270654685",
	"modificationSum": "9",
	"subsystem": "99.2%",
	"$color": "#ff2cbc"
},
"adjacencies": [
	{
	"nodeTo": "116354d",
	"data": {
		"$lineWidth": 4,
		"$color": "#ff2cbc"
		}
	}]},
{
"id": "116354d",
"name": "Naoya Horiguchi",
"data": {
	"relativeDate": "9 days ago",
	"authorEmail": "n-horiguchi@ah.jp.nec.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=9296f032932bdd0568a95a99a91edfd8&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270654684",
	"modificationSum": "32",
	"subsystem": "37.6%",
	"$color": "#c89fb7"
},
"adjacencies": [
	{
	"nodeTo": "57119c3",
	"data": {
		"$lineWidth": 6,
		"$color": "#c89fb7"
		}
	}]},
{
"id": "57119c3",
"name": "Yong Zhang",
"data": {
	"relativeDate": "9 days ago",
	"authorEmail": "yong.zhang@windriver.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=6af889b0069e7d731b0b972f05457578&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270654684",
	"modificationSum": "1",
	"subsystem": "lib",
	"$color": "#e9de2a"
},
"adjacencies": [
	{
	"nodeTo": "bb1dc0b",
	"data": {
		"$lineWidth": 1,
		"$color": "#e9de2a"
		}
	}]},
{
"id": "bb1dc0b",
"name": "Yong Zhang",
"data": {
	"relativeDate": "9 days ago",
	"authorEmail": "yong.zhang@windriver.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=6af889b0069e7d731b0b972f05457578&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270654684",
	"modificationSum": "1",
	"subsystem": "include",
	"$color": "#a0c89f"
},
"adjacencies": [
	{
	"nodeTo": "2a7268a",
	"data": {
		"$lineWidth": 1,
		"$color": "#a0c89f"
		}
	}]},
{
"id": "2a7268a",
"name": "Yong Zhang",
"data": {
	"relativeDate": "9 days ago",
	"authorEmail": "yong.zhang@windriver.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=6af889b0069e7d731b0b972f05457578&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270654684",
	"modificationSum": "2",
	"subsystem": "lib",
	"$color": "#e9de2a"
},
"adjacencies": [
	{
	"nodeTo": "ee5d2ac",
	"data": {
		"$lineWidth": 2,
		"$color": "#e9de2a"
		}
	}]},
{
"id": "ee5d2ac",
"name": "Eric Dumazet",
"data": {
	"relativeDate": "9 days ago",
	"authorEmail": "eric.dumazet@gmail.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=d377bea5fa41b881f3e0df871b9f788d&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270654684",
	"modificationSum": "5",
	"subsystem": "drivers",
	"$color": "#5f29e9"
},
"adjacencies": [
	{
	"nodeTo": "b1dd3b2",
	"data": {
		"$lineWidth": 3,
		"$color": "#5f29e9"
		}
	}]},
{
"id": "b1dd3b2",
"name": "Andrew Morton",
"data": {
	"relativeDate": "9 days ago",
	"authorEmail": "akpm@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=cb179c77d7ef828ce407a6f1741b47e0&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270654684",
	"modificationSum": "5",
	"subsystem": "35.2%",
	"$color": "#402626"
},
"adjacencies": [
	{
	"nodeTo": "55ab3a1",
	"data": {
		"$lineWidth": 3,
		"$color": "#402626"
		}
	}]},
{
"id": "55ab3a1",
"name": "Anton Blanchard",
"data": {
	"relativeDate": "9 days ago",
	"authorEmail": "anton@samba.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fa2ffefdd99303185655e90b75c7ad18&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270654684",
	"modificationSum": "1",
	"subsystem": "fs",
	"$color": "#a529e9"
},
"adjacencies": [
	{
	"nodeTo": "da25801",
	"data": {
		"$lineWidth": 1,
		"$color": "#a529e9"
		}
	}]},
{
"id": "da25801",
"name": "Alexander Shishkin",
"data": {
	"relativeDate": "9 days ago",
	"authorEmail": "virtuoso@slind.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=ab90b17c234ba31b369f5a39381276be&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270654684",
	"modificationSum": "1",
	"subsystem": "drivers",
	"$color": "#5f29e9"
},
"adjacencies": [
	{
	"nodeTo": "a71dc14",
	"data": {
		"$lineWidth": 1,
		"$color": "#5f29e9"
		}
	}]},
{
"id": "a71dc14",
"name": "Randy Dunlap",
"data": {
	"relativeDate": "9 days ago",
	"authorEmail": "randy.dunlap@oracle.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=cd92275cd63b1282f7fa4ca484adbdf1&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270654683",
	"modificationSum": "0",
	"subsystem": "drivers",
	"$color": "#5f29e9"
},
"adjacencies": [
	{
	"nodeTo": "d6da1a5",
	"data": {
		"$lineWidth": 1,
		"$color": "#5f29e9"
		}
	}]},
{
"id": "d6da1a5",
"name": "KOSAKI Motohiro",
"data": {
	"relativeDate": "9 days ago",
	"authorEmail": "kosaki.motohiro@jp.fujitsu.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=9fa3062ff437ed28f40509a947b6d6c5&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270654683",
	"modificationSum": "14",
	"subsystem": "mm",
	"$color": "#293fe9"
},
"adjacencies": [
	{
	"nodeTo": "6e191f7",
	"data": {
		"$lineWidth": 5,
		"$color": "#293fe9"
		}
	}]},
{
"id": "6e191f7",
"name": "Anton Blanchard",
"data": {
	"relativeDate": "9 days ago",
	"authorEmail": "anton@samba.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fa2ffefdd99303185655e90b75c7ad18&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270654683",
	"modificationSum": "0",
	"subsystem": "drivers",
	"$color": "#5f29e9"
},
"adjacencies": [
	{
	"nodeTo": "70655c0",
	"data": {
		"$lineWidth": 1,
		"$color": "#5f29e9"
		}
	}]},
{
"id": "70655c0",
"name": "Wu Fengguang",
"data": {
	"relativeDate": "9 days ago",
	"authorEmail": "fengguang.wu@intel.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=6bf3ef91610735cb9e973f375e332247&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270654683",
	"modificationSum": "1",
	"subsystem": "mm",
	"$color": "#293fe9"
},
"adjacencies": [
	{
	"nodeTo": "1276551",
	"data": {
		"$lineWidth": 1,
		"$color": "#293fe9"
		}
	}]},
{
"id": "1276551",
"name": "Wolfram Sang",
"data": {
	"relativeDate": "9 days ago",
	"authorEmail": "w.sang@pengutronix.de",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=6d75be56aed101301f008915d0b33348&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270654683",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "975f8c5",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "975f8c5",
"name": "Sergey Senozhatsky",
"data": {
	"relativeDate": "9 days ago",
	"authorEmail": "sergey.senozhatsky@gmail.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=f8f9ad61364b0690358a746b7e5783e4&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270654683",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "829f46a",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "829f46a",
"name": "Dan Carpenter",
"data": {
	"relativeDate": "9 days ago",
	"authorEmail": "error27@gmail.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=139362c4bf92ea747eb6e0a448bff8ac&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270654683",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "c6eb69a",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "c6eb69a",
"name": "Dan Carpenter",
"data": {
	"relativeDate": "9 days ago",
	"authorEmail": "error27@gmail.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=139362c4bf92ea747eb6e0a448bff8ac&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270654683",
	"modificationSum": "3",
	"subsystem": "drivers",
	"$color": "#5f29e9"
},
"adjacencies": [
	{
	"nodeTo": "cdeebad",
	"data": {
		"$lineWidth": 3,
		"$color": "#5f29e9"
		}
	}]},
{
"id": "cdeebad",
"name": "Madhusudhan Chikkature",
"data": {
	"relativeDate": "9 days ago",
	"authorEmail": "madhu.cr@ti.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=ca38c13c48cd74f22da3c7e55b195244&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270654683",
	"modificationSum": "7",
	"subsystem": "drivers",
	"$color": "#5f29e9"
},
"adjacencies": [
	{
	"nodeTo": "2a48180",
	"data": {
		"$lineWidth": 4,
		"$color": "#5f29e9"
		}
	}]},
{
"id": "2a48180",
"name": "Julia Lawall",
"data": {
	"relativeDate": "9 days ago",
	"authorEmail": "julia@diku.dk",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=502479502f61be94d127add9638e80d4&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270654682",
	"modificationSum": "4",
	"subsystem": "drivers",
	"$color": "#5f29e9"
},
"adjacencies": [
	{
	"nodeTo": "c70c036",
	"data": {
		"$lineWidth": 3,
		"$color": "#5f29e9"
		}
	}]},
{
"id": "c70c036",
"name": "Julia Lawall",
"data": {
	"relativeDate": "9 days ago",
	"authorEmail": "julia@diku.dk",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=502479502f61be94d127add9638e80d4&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270654682",
	"modificationSum": "2",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "a8557dc",
	"data": {
		"$lineWidth": 2,
		"$color": ""
		}
	}]},
{
"id": "a8557dc",
"name": "Justin P. Mattock",
"data": {
	"relativeDate": "9 days ago",
	"authorEmail": "justinmattock@gmail.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=07146d7c435db0783de89aa5859efac1&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270654682",
	"modificationSum": "31",
	"subsystem": "Documentation",
	"$color": "#402626"
},
"adjacencies": [
	{
	"nodeTo": "fc95c6d",
	"data": {
		"$lineWidth": 6,
		"$color": "#402626"
		}
	}]},
{
"id": "fc95c6d",
"name": "Jan Beulich",
"data": {
	"relativeDate": "9 days ago",
	"authorEmail": "JBeulich@novell.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=d97d40a6e0d6a86bf73dc849c29e9ae2&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270654682",
	"modificationSum": "13",
	"subsystem": "drivers",
	"$color": "#5f29e9"
},
"adjacencies": [
	{
	"nodeTo": "530cd33",
	"data": {
		"$lineWidth": 5,
		"$color": "#5f29e9"
		}
	}]},
{
"id": "530cd33",
"name": "David Härdeman",
"data": {
	"relativeDate": "9 days ago",
	"authorEmail": "david@hardeman.nu",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=eba25123b3225dd8f0d6189c4f8ebac5&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270654682",
	"modificationSum": "1",
	"subsystem": "include",
	"$color": "#a0c89f"
},
"adjacencies": [
	{
	"nodeTo": "a3a2e76",
	"data": {
		"$lineWidth": 1,
		"$color": "#a0c89f"
		}
	}]},
{
"id": "a3a2e76",
"name": "KAMEZAWA Hiroyuki",
"data": {
	"relativeDate": "9 days ago",
	"authorEmail": "kamezawa.hiroyu@jp.fujitsu.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=46cd99c1ae117141c7d1bab1772dc416&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270654682",
	"modificationSum": "3",
	"subsystem": "72.0%",
	"$color": "#402626"
},
"adjacencies": [
	{
	"nodeTo": "b01d094",
	"data": {
		"$lineWidth": 3,
		"$color": "#402626"
		}
	}]},
{
"id": "b01d094",
"name": "Andrew Morton",
"data": {
	"relativeDate": "9 days ago",
	"authorEmail": "akpm@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=cb179c77d7ef828ce407a6f1741b47e0&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270654681",
	"modificationSum": "3",
	"subsystem": "include",
	"$color": "#a0c89f"
},
"adjacencies": [
	{
	"nodeTo": "0fdf867",
	"data": {
		"$lineWidth": 3,
		"$color": "#a0c89f"
		}
	}]},
{
"id": "0fdf867",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "9 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270584232",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "94c4fce",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "147a274",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "94c4fce",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "9 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270584202",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "14e71e4",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "753649d",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "14e71e4",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "9 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270573000",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "ab195c5",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "8ba42bd",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "ab195c5",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "9 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270568191",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "cb4361c",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "445d211",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "cb4361c",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "9 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270568046",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "309361e",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "fb9e2d8",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "309361e",
"name": "Dan Carpenter",
"data": {
	"relativeDate": "10 days ago",
	"authorEmail": "error27@gmail.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=139362c4bf92ea747eb6e0a448bff8ac&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270567427",
	"modificationSum": "1",
	"subsystem": "fs",
	"$color": "#a529e9"
},
"adjacencies": [
	{
	"nodeTo": "5fbfb18",
	"data": {
		"$lineWidth": 1,
		"$color": "#a529e9"
		}
	}]},
{
"id": "5fbfb18",
"name": "Nick Piggin",
"data": {
	"relativeDate": "2 weeks ago",
	"authorEmail": "npiggin@suse.de",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=9b0aad6a833f3e7c0133e3f3c249f4d7&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270522202",
	"modificationSum": "15",
	"subsystem": "58.4%",
	"$color": "#402626"
},
"adjacencies": [
	{
	"nodeTo": "7da23b8",
	"data": {
		"$lineWidth": 5,
		"$color": "#402626"
		}
	}]},
{
"id": "7da23b8",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "10 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270507032",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "749d229",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "421e33d",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "749d229",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "10 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270500174",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "795d580",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "3dc9fef",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "795d580",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "10 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270498875",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "449cedf",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "109f6ae",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "449cedf",
"name": "Eric Paris",
"data": {
	"relativeDate": "10 days ago",
	"authorEmail": "eparis@redhat.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=819b91a61e7d6bb2cf734464375f37e9&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270498785",
	"modificationSum": "1",
	"subsystem": "kernel",
	"$color": "#402626"
},
"adjacencies": [
	{
	"nodeTo": "b66696e",
	"data": {
		"$lineWidth": 1,
		"$color": "#402626"
		}
	}]},
{
"id": "b66696e",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "10 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270485551",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "9e74e7c",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "a32f392",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "9e74e7c",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "10 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270484197",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "4946d54",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "d5e50da",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "4946d54",
"name": "Rik van Riel",
"data": {
	"relativeDate": "10 days ago",
	"authorEmail": "riel@redhat.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=8bea7d5ff90d11f145e09bb9fcc9988f&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270484151",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "db217de",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "db217de",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "11 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270408484",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "8ce42c8",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "bdd32ce",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "8ce42c8",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "11 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270408390",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "0121b0c",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "6e03bb5",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "0121b0c",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "11 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270408351",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "a8941b0",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "47a7098",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "a8941b0",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "11 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270408339",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "d82ef02",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "292f60c",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "d82ef02",
"name": "KAMEZAWA Hiroyuki",
"data": {
	"relativeDate": "2 weeks ago",
	"authorEmail": "kamezawa.hiroyu@jp.fujitsu.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=46cd99c1ae117141c7d1bab1772dc416&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270407962",
	"modificationSum": "49",
	"subsystem": "fs",
	"$color": "#a529e9"
},
"adjacencies": [
	{
	"nodeTo": "5e11611",
	"data": {
		"$lineWidth": 7,
		"$color": "#a529e9"
		}
	}]},
{
"id": "5e11611",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "13 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270263011",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "d4509e5",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "c6c3523",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "d4509e5",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "13 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270262990",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "0afa80a",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "ed01f64",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "0afa80a",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "13 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270262934",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "5193d7a",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "b7b7fa4",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "5193d7a",
"name": "Clemens Ladisch",
"data": {
	"relativeDate": "13 days ago",
	"authorEmail": "clemens@ladisch.de",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=586424ca0847070dc1868aa58077003e&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270262825",
	"modificationSum": "33",
	"subsystem": "drivers",
	"$color": "#5f29e9"
},
"adjacencies": [
	{
	"nodeTo": "5e123e5",
	"data": {
		"$lineWidth": 6,
		"$color": "#5f29e9"
		}
	}]},
{
"id": "5e123e5",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "13 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270262705",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "24b99d1",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "4da75b9",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "24b99d1",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "13 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270262682",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "6da8d86",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "5a7aadf",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "6da8d86",
"name": "Oleg Nesterov",
"data": {
	"relativeDate": "13 days ago",
	"authorEmail": "oleg@redhat.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=215fb523d4d201924db9aacd4532d52a&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270262649",
	"modificationSum": "0",
	"subsystem": "drivers",
	"$color": "#5f29e9"
},
"adjacencies": [
	{
	"nodeTo": "483f64c",
	"data": {
		"$lineWidth": 1,
		"$color": "#5f29e9"
		}
	}]},
{
"id": "483f64c",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "13 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270221482",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
	{
	"nodeTo": "bc53ba2",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	},
	{
	"nodeTo": "c565c54",
	"data": {
		"$lineWidth": 1,
		"$color": ""
		}
	}]},
{
"id": "bc53ba2",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "13 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1270218818",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
]},
{
"id": "c565c54",
"name": "Anisse Astier",
"data": {
	"relativeDate": "3 weeks ago",
	"authorEmail": "anisse@astier.eu",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=d4aac60d423db5e5be9d8bc678ff2ed0&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Jiri Kosina",
	"commitDate": "1269873177",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
]},
{
"id": "5a7aadf",
"name": "Matt Helsley",
"data": {
	"relativeDate": "3 weeks ago",
	"authorEmail": "matthltc@us.ibm.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=78545ed2b31de080e0dd18eadc153baa&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Rafael J. Wysocki",
	"commitDate": "1269643904",
	"modificationSum": "6",
	"subsystem": "52.5%",
	"$color": "#402626"
},
"adjacencies": [
]},
{
"id": "4da75b9",
"name": "Jason Wessel",
"data": {
	"relativeDate": "13 days ago",
	"authorEmail": "jason.wessel@windriver.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=4d2363b8d3df6d5628be01e340affc04&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Jason Wessel",
	"commitDate": "1270238299",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
]},
{
"id": "b7b7fa4",
"name": "Jeff Mahoney",
"data": {
	"relativeDate": "2 weeks ago",
	"authorEmail": "jeffm@jeffreymahoney.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=49583285ca8fb0182a5637e6994b2f06&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Frederic Weisbecker",
	"commitDate": "1269979989",
	"modificationSum": "6",
	"subsystem": "fs",
	"$color": "#a529e9"
},
"adjacencies": [
]},
{
"id": "ed01f64",
"name": "Roman Fietze",
"data": {
	"relativeDate": "3 weeks ago",
	"authorEmail": "roman.fietze@telemotive.de",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=8b2d54644cef73ce8a48191e9479c86d&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Grant Likely",
	"commitDate": "1269662997",
	"modificationSum": "0",
	"subsystem": "arch",
	"$color": "#2267bb"
},
"adjacencies": [
]},
{
"id": "c6c3523",
"name": "Harro Haan",
"data": {
	"relativeDate": "6 weeks ago",
	"authorEmail": "hrhaan@gmail.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=a7cfcc1e2e9e60b196b6b9d539106c89&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Russell King",
	"commitDate": "1269880564",
	"modificationSum": "0",
	"subsystem": "drivers",
	"$color": "#5f29e9"
},
"adjacencies": [
]},
{
"id": "292f60c",
"name": "Julia Lawall",
"data": {
	"relativeDate": "2 weeks ago",
	"authorEmail": "julia@diku.dk",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=502479502f61be94d127add9638e80d4&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Steven Rostedt",
	"commitDate": "1269890604",
	"modificationSum": "3",
	"subsystem": "kernel",
	"$color": "#402626"
},
"adjacencies": [
]},
{
"id": "47a7098",
"name": "Oleg Nesterov",
"data": {
	"relativeDate": "2 weeks ago",
	"authorEmail": "oleg@redhat.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=215fb523d4d201924db9aacd4532d52a&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Ingo Molnar",
	"commitDate": "1270231865",
	"modificationSum": "1",
	"subsystem": "kernel",
	"$color": "#402626"
},
"adjacencies": [
]},
{
"id": "6e03bb5",
"name": "Frederic Weisbecker",
"data": {
	"relativeDate": "13 days ago",
	"authorEmail": "fweisbec@gmail.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=42f59911a7dfc2e6d93714478348695e&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Frederic Weisbecker",
	"commitDate": "1270291320",
	"modificationSum": "2",
	"subsystem": "arch",
	"$color": "#2267bb"
},
"adjacencies": [
]},
{
"id": "bdd32ce",
"name": "David S. Miller",
"data": {
	"relativeDate": "12 days ago",
	"authorEmail": "davem@davemloft.net",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=81279c43ce60f56aea992763d1ed612b&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "David S. Miller",
	"commitDate": "1270368770",
	"modificationSum": "7",
	"subsystem": "drivers",
	"$color": "#5f29e9"
},
"adjacencies": [
]},
{
"id": "d5e50da",
"name": "Randy Dunlap",
"data": {
	"relativeDate": "2 weeks ago",
	"authorEmail": "randy.dunlap@oracle.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=cd92275cd63b1282f7fa4ca484adbdf1&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Tejun Heo",
	"commitDate": "1270002822",
	"modificationSum": "0",
	"subsystem": "include",
	"$color": "#a0c89f"
},
"adjacencies": [
]},
{
"id": "a32f392",
"name": "Tejun Heo",
"data": {
	"relativeDate": "11 days ago",
	"authorEmail": "tj@kernel.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=3153fad76e09b4fe37ddc74d32312eb4&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Tejun Heo",
	"commitDate": "1270435079",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
]},
{
"id": "109f6ae",
"name": "Chris Mason",
"data": {
	"relativeDate": "2 weeks ago",
	"authorEmail": "chris.mason@oracle.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=da650dc28bafc49d92dd6280aae56f42&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Chris Mason",
	"commitDate": "1270492921",
	"modificationSum": "0",
	"subsystem": "fs",
	"$color": "#a529e9"
},
"adjacencies": [
]},
{
"id": "3dc9fef",
"name": "Dan Carpenter",
"data": {
	"relativeDate": "10 days ago",
	"authorEmail": "error27@gmail.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=139362c4bf92ea747eb6e0a448bff8ac&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Eric Van Hensbergen",
	"commitDate": "1270496248",
	"modificationSum": "2",
	"subsystem": "net",
	"$color": "#402626"
},
"adjacencies": [
]},
{
"id": "421e33d",
"name": "Michael Reed",
"data": {
	"relativeDate": "3 weeks ago",
	"authorEmail": "mdr@sgi.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=b09638c43479b0fc3d3f16c11411ecd5&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "James Bottomley",
	"commitDate": "1269717616",
	"modificationSum": "52",
	"subsystem": "drivers",
	"$color": "#5f29e9"
},
"adjacencies": [
]},
{
"id": "fb9e2d8",
"name": "Ken Kawasaki",
"data": {
	"relativeDate": "12 days ago",
	"authorEmail": "ken_kawasaki@spring.nifty.jp",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=d08fd0bef359b006699b741a5b45fc28&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "David S. Miller",
	"commitDate": "1270332430",
	"modificationSum": "5",
	"subsystem": "drivers",
	"$color": "#5f29e9"
},
"adjacencies": [
]},
{
"id": "445d211",
"name": "Tejun Heo",
"data": {
	"relativeDate": "11 days ago",
	"authorEmail": "tj@kernel.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=3153fad76e09b4fe37ddc74d32312eb4&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Jeff Garzik",
	"commitDate": "1270565733",
	"modificationSum": "29",
	"subsystem": "drivers",
	"$color": "#5f29e9"
},
"adjacencies": [
]},
{
"id": "8ba42bd",
"name": "Thomas Mingarelli",
"data": {
	"relativeDate": "4 weeks ago",
	"authorEmail": "Thomas.Mingarelli@hp.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=953c1bda93bd2a573f5370960a83e51c&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Wim Van Sebroeck",
	"commitDate": "1270564663",
	"modificationSum": "1",
	"subsystem": "drivers",
	"$color": "#5f29e9"
},
"adjacencies": [
]},
{
"id": "753649d",
"name": "Thomas Gleixner",
"data": {
	"relativeDate": "2 weeks ago",
	"authorEmail": "tglx@linutronix.de",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=655933b9bf9ea16efc37f6cf1438efaa&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Thomas Gleixner",
	"commitDate": "1270043318",
	"modificationSum": "0",
	"subsystem": "kernel",
	"$color": "#402626"
},
"adjacencies": [
]},
{
"id": "147a274",
"name": "Dominik Brodowski",
"data": {
	"relativeDate": "11 days ago",
	"authorEmail": "linux@dominikbrodowski.net",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=bc02207db260241c2555e753ab1fdfd1&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Dominik Brodowski",
	"commitDate": "1270397435",
	"modificationSum": "17",
	"subsystem": "drivers",
	"$color": "#5f29e9"
},
"adjacencies": [
]},
{
"id": "18e5b53",
"name": "Tejun Heo",
"data": {
	"relativeDate": "10 days ago",
	"authorEmail": "tj@kernel.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=3153fad76e09b4fe37ddc74d32312eb4&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Tejun Heo",
	"commitDate": "1270590101",
	"modificationSum": "1",
	"subsystem": "drivers",
	"$color": "#5f29e9"
},
"adjacencies": [
]},
{
"id": "55b371d",
"name": "Takashi Iwai",
"data": {
	"relativeDate": "9 days ago",
	"authorEmail": "tiwai@suse.de",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=5b19e9d0e834ea10ef75803718ad564b&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Takashi Iwai",
	"commitDate": "1270626886",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
]},
{
"id": "af2b021",
"name": "Michal Simek",
"data": {
	"relativeDate": "9 days ago",
	"authorEmail": "monstr@monstr.eu",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=92f8e4c9a4aba76cc46cca459d433c06&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Michal Simek",
	"commitDate": "1270648075",
	"modificationSum": "1",
	"subsystem": "arch",
	"$color": "#2267bb"
},
"adjacencies": [
]},
{
"id": "472a474",
"name": "Suresh Siddha",
"data": {
	"relativeDate": "2 weeks ago",
	"authorEmail": "suresh.b.siddha@intel.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=96817e0a3d2f53494b99734a57f591b5&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Ingo Molnar",
	"commitDate": "1270234127",
	"modificationSum": "0",
	"subsystem": "arch",
	"$color": "#2267bb"
},
"adjacencies": [
]},
{
"id": "75392dd",
"name": "Sergei Shtylyov",
"data": {
	"relativeDate": "3 weeks ago",
	"authorEmail": "sshtylyov@ru.mvista.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=cb9c421863fc5cf5b551ce95715c4c30&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Kevin Hilman",
	"commitDate": "1270659118",
	"modificationSum": "1",
	"subsystem": "arch",
	"$color": "#2267bb"
},
"adjacencies": [
]},
{
"id": "134fbad",
"name": "Vince Weaver",
"data": {
	"relativeDate": "10 days ago",
	"authorEmail": "vweaver1@eecs.utk.edu",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=c6997520dd551460b59911fd74323648&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Ingo Molnar",
	"commitDate": "1270569179",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
]},
{
"id": "320718e",
"name": "Anton Blanchard",
"data": {
	"relativeDate": "10 days ago",
	"authorEmail": "anton@samba.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fa2ffefdd99303185655e90b75c7ad18&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Rusty Russell",
	"commitDate": "1270685780",
	"modificationSum": "4",
	"subsystem": "drivers",
	"$color": "#5f29e9"
},
"adjacencies": [
]},
{
"id": "c25f7cf",
"name": "Len Brown",
"data": {
	"relativeDate": "9 days ago",
	"authorEmail": "len.brown@intel.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=4f4a1afa06be96dc0a4b75b4ae8f3492&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Len Brown",
	"commitDate": "1270587982",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
]},
{
"id": "720fc22",
"name": "Mikulas Patocka",
"data": {
	"relativeDate": "9 days ago",
	"authorEmail": "mpatocka@redhat.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=554411b1f459103c469084b4c431fe9d&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "David S. Miller",
	"commitDate": "1270597413",
	"modificationSum": "4",
	"subsystem": "drivers",
	"$color": "#5f29e9"
},
"adjacencies": [
]},
{
"id": "84fba5e",
"name": "Anton Blanchard",
"data": {
	"relativeDate": "10 days ago",
	"authorEmail": "anton@samba.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fa2ffefdd99303185655e90b75c7ad18&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Ingo Molnar",
	"commitDate": "1270540895",
	"modificationSum": "1",
	"subsystem": "kernel",
	"$color": "#402626"
},
"adjacencies": [
]},
{
"id": "45c4d01",
"name": "Mark Lord",
"data": {
	"relativeDate": "8 days ago",
	"authorEmail": "kernel@teksavvy.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=05366272ca295667300a98a9b0d169d4&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Jeff Garzik",
	"commitDate": "1270745637",
	"modificationSum": "2",
	"subsystem": "include",
	"$color": "#a0c89f"
},
"adjacencies": [
]},
{
"id": "f05337c",
"name": "Pavel Shilovsky",
"data": {
	"relativeDate": "11 days ago",
	"authorEmail": "piastryyy@gmail.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=9b9893754d9ad572e8b0ad6ff1857941&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Steve French",
	"commitDate": "1270574666",
	"modificationSum": "3",
	"subsystem": "fs",
	"$color": "#a529e9"
},
"adjacencies": [
]},
{
"id": "930b9d9",
"name": "Dave Airlie",
"data": {
	"relativeDate": "7 days ago",
	"authorEmail": "airlied@redhat.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=482d553e042192056107839bf3f6637e&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Dave Airlie",
	"commitDate": "1270787271",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
]},
{
"id": "3440c49",
"name": "Divyesh Shah",
"data": {
	"relativeDate": "7 days ago",
	"authorEmail": "dpshah@google.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=236e871172ba88529d45c02a1827abf1&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Jens Axboe",
	"commitDate": "1270798197",
	"modificationSum": "2",
	"subsystem": "block",
	"$color": "#402626"
},
"adjacencies": [
]},
{
"id": "8e7fccc",
"name": "Martin Schwidefsky",
"data": {
	"relativeDate": "7 days ago",
	"authorEmail": "schwidefsky@de.ibm.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=e1a773158eb613c1f344ebad41067735&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Martin Schwidefsky",
	"commitDate": "1270813382",
	"modificationSum": "10",
	"subsystem": "arch",
	"$color": "#2267bb"
},
"adjacencies": [
]},
{
"id": "5091b35",
"name": "Roland Dreier",
"data": {
	"relativeDate": "6 days ago",
	"authorEmail": "rolandd@cisco.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=3bddec357d0f2577d73e2c96817efc98&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Roland Dreier",
	"commitDate": "1270829661",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
]},
{
"id": "be3bd22",
"name": "Ryusuke Konishi",
"data": {
	"relativeDate": "4 days ago",
	"authorEmail": "konishi.ryusuke@lab.ntt.co.jp",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=14c31816f16f9f2c1e7162b5a8f0f63f&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Ryusuke Konishi",
	"commitDate": "1271004663",
	"modificationSum": "1",
	"subsystem": "fs",
	"$color": "#a529e9"
},
"adjacencies": [
]},
{
"id": "bade732",
"name": "Tom Tucker",
"data": {
	"relativeDate": "13 days ago",
	"authorEmail": "tom@ogc.us",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=5c705121834d58b33fdac4dc5feab71d&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "J. Bruce Fields",
	"commitDate": "1270483822",
	"modificationSum": "1",
	"subsystem": "net",
	"$color": "#402626"
},
"adjacencies": [
]},
{
"id": "f6be75d",
"name": "David Daney",
"data": {
	"relativeDate": "9 days ago",
	"authorEmail": "ddaney@caviumnetworks.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=234f000cf1aaeeedd25dcc4d8645645d&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Ralf Baechle",
	"commitDate": "1271089582",
	"modificationSum": "1",
	"subsystem": "arch",
	"$color": "#2267bb"
},
"adjacencies": [
]},
{
"id": "c15d0fc",
"name": "Dmitry Monakhov",
"data": {
	"relativeDate": "3 weeks ago",
	"authorEmail": "dmonakhov@openvz.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=124cc827b093e866929478cedaca4ad1&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Jan Kara",
	"commitDate": "1270733720",
	"modificationSum": "4",
	"subsystem": "fs",
	"$color": "#a529e9"
},
"adjacencies": [
]},
{
"id": "0826167",
"name": "Andrew Perepechko",
"data": {
	"relativeDate": "3 days ago",
	"authorEmail": "andrew.perepechko@sun.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=ee7f94b34b0167ecd1fbf794d6b0efd8&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Jan Kara",
	"commitDate": "1271099556",
	"modificationSum": "6",
	"subsystem": "fs",
	"$color": "#a529e9"
},
"adjacencies": [
]},
{
"id": "9f680ce",
"name": "Chris Mason",
"data": {
	"relativeDate": "10 days ago",
	"authorEmail": "chris.mason@oracle.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=da650dc28bafc49d92dd6280aae56f42&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Chris Mason",
	"commitDate": "1270561067",
	"modificationSum": "0",
	"subsystem": "fs",
	"$color": "#a529e9"
},
"adjacencies": [
]},
{
"id": "85b3cce",
"name": "Russell King",
"data": {
	"relativeDate": "7 days ago",
	"authorEmail": "rmk+kernel@arm.linux.org.uk",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=da783337a3b32c2fa3d96ea5f9e9e429&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Russell King",
	"commitDate": "1270821611",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
]},
{
"id": "ea90002",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "3 days ago",
	"authorEmail": "torvalds@linux-foundation.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=fb47627bc8c0bcdb36321edfbf02e916&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Linus Torvalds",
	"commitDate": "1271120053",
	"modificationSum": "2",
	"subsystem": "mm",
	"$color": "#293fe9"
},
"adjacencies": [
]},
{
"id": "a6d3702",
"name": "Ken Kawasaki",
"data": {
	"relativeDate": "6 days ago",
	"authorEmail": "ken_kawasaki@spring.nifty.jp",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=d08fd0bef359b006699b741a5b45fc28&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "David S. Miller",
	"commitDate": "1271152996",
	"modificationSum": "7",
	"subsystem": "drivers",
	"$color": "#5f29e9"
},
"adjacencies": [
]},
{
"id": "c011f80",
"name": "David S. Miller",
"data": {
	"relativeDate": "3 days ago",
	"authorEmail": "davem@davemloft.net",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=81279c43ce60f56aea992763d1ed612b&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "David S. Miller",
	"commitDate": "1271148643",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
]},
{
"id": "0df5dd4",
"name": "Trond Myklebust",
"data": {
	"relativeDate": "4 days ago",
	"authorEmail": "Trond.Myklebust@netapp.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=1889c5eadc56f706214f06ac2d848da5&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Trond Myklebust",
	"commitDate": "1271073315",
	"modificationSum": "2",
	"subsystem": "fs",
	"$color": "#a529e9"
},
"adjacencies": [
]},
{
"id": "d88d405",
"name": "Jiri Slaby",
"data": {
	"relativeDate": "5 days ago",
	"authorEmail": "jslaby@suse.cz",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=aebdf31d465b04113cd13a6bffde8527&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Rafael J. Wysocki",
	"commitDate": "1270931336",
	"modificationSum": "1",
	"subsystem": "kernel",
	"$color": "#402626"
},
"adjacencies": [
]},
{
"id": "b560177",
"name": "Geert Uytterhoeven",
"data": {
	"relativeDate": "4 weeks ago",
	"authorEmail": "geert@linux-m68k.org",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=4f6d66ae482f59501fa4224f9202ba9b&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Geert Uytterhoeven",
	"commitDate": "1271267137",
	"modificationSum": "2",
	"subsystem": "arch",
	"$color": "#2267bb"
},
"adjacencies": [
]},
{
"id": "091ebf0",
"name": "Rusty Russell",
"data": {
	"relativeDate": "22 hours ago",
	"authorEmail": "rusty@rustcorp.com.au",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=940b59c987ebbe34aba49f181f0b7c1f&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Rusty Russell",
	"commitDate": "1271247236",
	"modificationSum": "40",
	"subsystem": "",
	"$color": "#c8950b"
},
"adjacencies": [
]},
{
"id": "d618540",
"name": "Henrik Rydberg",
"data": {
	"relativeDate": "2 days ago",
	"authorEmail": "rydberg@euromail.se",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=264b94998f1a122c4d54044d58c9f83c&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Jean Delvare",
	"commitDate": "1271254451",
	"modificationSum": "2",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
]},
{
"id": "a6a5349",
"name": "Sage Weil",
"data": {
	"relativeDate": "2 days ago",
	"authorEmail": "sage@newdream.net",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=9448668a9e1522c9b83ea2bc9d753ecf&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Sage Weil",
	"commitDate": "1271192827",
	"modificationSum": "0",
	"subsystem": "fs",
	"$color": "#a529e9"
},
"adjacencies": [
]},
{
"id": "6c9ff10",
"name": "Stephen Smalley",
"data": {
	"relativeDate": "4 weeks ago",
	"authorEmail": "sds@tycho.nsa.gov",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=68ddc364892be2c46a90dcb78ee511c4&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "James Morris",
	"commitDate": "1271287561",
	"modificationSum": "1",
	"subsystem": "security",
	"$color": "#402626"
},
"adjacencies": [
]},
{
"id": "014f615",
"name": "Ping Cheng",
"data": {
	"relativeDate": "2 days ago",
	"authorEmail": "pingc@wacom.com",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=22093950d98b0d224a03cc64a869d042&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Dmitry Torokhov",
	"commitDate": "1271355370",
	"modificationSum": "5",
	"subsystem": "drivers",
	"$color": "#5f29e9"
},
"adjacencies": [
]},
{
"id": "19b3eec",
"name": "Stefan Richter",
"data": {
	"relativeDate": "5 days ago",
	"authorEmail": "stefanr@s5r6.in-berlin.de",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=52aa74a9f14ff3d83a17aebac55f643c&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Stefan Richter",
	"commitDate": "1271346649",
	"modificationSum": "14",
	"subsystem": "include",
	"$color": "#a0c89f"
},
"adjacencies": [
]},
{
"id": "2b2f862",
"name": "Ingo Molnar",
"data": {
	"relativeDate": "3 days ago",
	"authorEmail": "mingo@elte.hu",
	"avatar": "http://www.gravatar.com/avatar.php?gravatar_id=a0e934a93318e87ffe558badbdcb2be8&default=http%3A%2F%2Fweb.uvic.ca%2F%7Earasbm%2Fimg%2Fperson.png&size=60",
	"committerName": "Ingo Molnar",
	"commitDate": "1271157894",
	"modificationSum": "0",
	"subsystem": "",
	"$color": ""
},
"adjacencies": [
]}];//end


    var infovis = document.getElementById('infovis');
    var w = infovis.offsetWidth, h = infovis.offsetHeight;
    //init canvas
    //Create a new canvas instance.
    var canvas = new Canvas('mycanvas', {
        'injectInto': 'infovis',
        'width': w,
        'height': h,
        'backgroundColor': '#1a1a1a'
    });
    //end
    
    //init st
    //Create a new ST instance
    var st = new ST(canvas, {
        //set duration for the animation
        duration: 600,
        //set animation transition type
        transition: Trans.Quart.easeInOut,
        //set distance between node and its children
        levelDistance: 30,
	orientation: 'right',	
	levelsToShow: 10,

        Node: {
            height: 60,
            width: 30,
	    dim: 3,
            type: 'circle',
            color: '#aaa',
            overridable: true
        },
        
        Edge: {
            type: 'quadratic:end',
            overridable: true,
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
		
	    //attach a eventhandler for a tooltip window to show here
	    label.onmouseover = function (event) {
		var tip = document.getElementById("tooltip");
		var html ="<table border =\"0\"><tr><td>";
		html += "<img class=\"avatar\" src=\"" + node.data.avatar + "\" /></td><td>";
		html += "<br /> Author: <b>" + node.name + "</b><br />";
		html += "Email: " + node.data.authorEmail + "<br />";
		html += "Written " + node.data.relativeDate + "<br />";
		html += "Committed by " + node.data.committerName + "<br />";
		if(node.data.subsystem != "") {
			html += "Subsystem: " + node.data.subsystem + "<br />";
		}
		if(node.data.modificationSum == 0) {
			html += "this merge contains no new modifications<br />";	
		} else {
			html += "In total " + node.data.modificationSum + " lines where modified<br />";
		}
		html += "</td></tr></table>";
		tip.innerHTML = html;
		tip.style.left = (event.clientX - 160) + 'px';
		tip.style.top = (event.clientY) + 'px';
	    }

            //set label styles
            var style = label.style;
            style.width = 20 + 'px';
            style.height = 30 + 'px';
	    //style.top = Math.round(Math.random()*60) + 'px' 
            style.cursor = 'pointer';
            style.color = '#383';
            style.fontSize = '0.6em';
            style.textAlign= 'center';
            style.paddingTop = '35px';
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
                //node.data.$color = "#ff7";
            }
            else {
		node.data.$type = 'circle';
                var GUtil = Graph.Util;
                //if the node belongs to the last plotted level
                if(!GUtil.anySubnode(node, "exist")) {
                    //count children number
                    var count = 0;
                    GUtil.eachSubnode(node, function(n) { count++; });
		    if(count > 0) {
			node.data.$type = 'square';
		    } else {
			node.data.$type = 'circle';
		    }
                }
            }
        },
        
        //This method is called right before plotting
        //an edge. It's useful for changing an individual edge
        //style properties before plotting it.
        //Edge data proprties prefixed with a dollar sign will
        //override the Edge global style properties.
        onBeforePlotLine: function(adj){
	    //adj.data.$lineWidth = adj.nodeFrom.data.$lineWidth;
 	    //adj.data.$color = adj.nodeTo.data.$color;
            if (adj.nodeFrom.selected && adj.nodeTo.selected) {
                //adj.data.$color = "#eaf";
                //adj.data.$lineWidth = 5;
            }
            else {
		
                //adj.data.$color=adj.;
                //delete adj.data.$lineWidth;
            }
        }
    });
    //load json data
    st.loadJSON(json);
    //compute node positions and layout
    st.compute();
    //optional: make a translation of the tree
    st.geom.translate(new Complex(-200, 0), "startPos");
    //emulate a click on the root node.
    st.onClick(st.root);
    //end
    //Add event handlers to switch spacetree orientation.
    var top = get('r-top'), 
    left = get('r-left'), 
    bottom = get('r-bottom'), 
    right = get('r-right');
    
    function changeHandler() {
        if(this.checked) {
            top.disabled = bottom.disabled = right.disabled = left.disabled = true;
            st.switchPosition(this.value, "animate", {
                onComplete: function(){
                    top.disabled = bottom.disabled = right.disabled = left.disabled = false;
                }
            });
        }
    };
    
    top.onchange = left.onchange = bottom.onchange = right.onchange = changeHandler;
    //end
}
