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
"id": "e99cc29",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "26b23ac",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "d6d8bf5",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "26b23ac",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "22a8cdd",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "75dfca8",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "22a8cdd",
"name": "Kyle McMartin",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "kyle@redhat.com"
},
"adjacencies": [
	{
	"nodeTo": "0e9695d",
	"data": {		"$lineWidth": 1 }
	}]},
{
"id": "0e9695d",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "280c96b",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "fed08d0",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "280c96b",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "b49199c",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "62737d4",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "b49199c",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "4dfd459",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "07ccb7b",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "4dfd459",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "676ad58",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "a6c7fdd",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "676ad58",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "ffaa60d",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "cab4d27",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "ffaa60d",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "efa82bab",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "531c2dc",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "efa82bab",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "06a57f4",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "fdcb457",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "06a57f4",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "fd48d6c",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "12b336a",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "fd48d6c",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "bbf8fc6",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "a67093d",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "bbf8fc6",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "67dcabd",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "a9f0c38",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "67dcabd",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "09e65ed",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "77c1ff3",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "09e65ed",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "9883b83",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "734c299",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "9883b83",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "a4b4df2",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "5b7efa8",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "a4b4df2",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "5ea8d37",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "8523c04",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "5ea8d37",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "f2d6cff",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "681ee44",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "f2d6cff",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "803bf5e",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "440ab7a",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "803bf5e",
"name": "Michael Neuling",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "mikey@neuling.org"
},
"adjacencies": [
	{
	"nodeTo": "4cfbafd",
	"data": {		"$lineWidth": 2 }
	}]},
{
"id": "4cfbafd",
"name": "Andreas Schwab",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "schwab@linux-m68k.org"
},
"adjacencies": [
	{
	"nodeTo": "763458e",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "763458e",
"name": "Rishikesh",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "risrajak@linux.vnet.ibm.com"
},
"adjacencies": [
	{
	"nodeTo": "f8c6334",
	"data": {		"$lineWidth": 2 }
	}]},
{
"id": "f8c6334",
"name": "Peter Tyser",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "ptyser@xes-inc.com"
},
"adjacencies": [
	{
	"nodeTo": "cff9279",
	"data": {		"$lineWidth": 4 }
	}]},
{
"id": "cff9279",
"name": "Peter Tyser",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "ptyser@xes-inc.com"
},
"adjacencies": [
	{
	"nodeTo": "c286d03",
	"data": {		"$lineWidth": 2 }
	}]},
{
"id": "c286d03",
"name": "Johan Kristell",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "johan.kristell@axis.com"
},
"adjacencies": [
	{
	"nodeTo": "93716b9",
	"data": {		"$lineWidth": 3 }
	}]},
{
"id": "93716b9",
"name": "Marcel Selhorst",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "m.selhorst@sirrix.com"
},
"adjacencies": [
	{
	"nodeTo": "f79f118",
	"data": {		"$lineWidth": 22 }
	}]},
{
"id": "f79f118",
"name": "Arnd Bergmann",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "arnd@arndb.de"
},
"adjacencies": [
	{
	"nodeTo": "e28cab4",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "e28cab4",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "909ccdb",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "1c010ff",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "909ccdb",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "2cbd188",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "7717aef",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "2cbd188",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "5993fe3",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "ee73f65",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "5993fe3",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "5391014",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "cbf8de1",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "5391014",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "5551638",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "77058e1",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "5551638",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "0ea4578",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "05507fa",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "0ea4578",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "ac73fdd",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "44bfce5",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "ac73fdd",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "3af9cf11",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "ef286f6",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "3af9cf11",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "deb0c98",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "8781ff9",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "deb0c98",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "a5f28ae",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "260c64d",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "a5f28ae",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "8defcaa",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "6efd806",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "8defcaa",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "08c4f1b",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "1dbf588",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "08c4f1b",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "2b1f5c3",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "691c9ae",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "2b1f5c3",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "9d2bc1a",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "a601341",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "9d2bc1a",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "8bd7380",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "36350e0",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "8bd7380",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "6339204",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "1af0b2f",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "6339204",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "80e1e82",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "89068c5",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "80e1e82",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "2927525",
	"data": {		"$lineWidth": 5 }
	}]},
{
"id": "2927525",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "10 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "82e22d7",
	"data": {		"$lineWidth": 1 }
	}]},
{
"id": "82e22d7",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "10 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "f6510ec",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "b0bcdd3",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "f6510ec",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "10 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "6f5a55f",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "93533c2",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "6f5a55f",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "10 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "9d9c3a5",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "9d9c3a5",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "10 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "56dca4c",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "3e0b33f",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "56dca4c",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "10 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "73d2eaa",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "2d68b7f",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "73d2eaa",
"name": "Andres Salomon",
"data": {
	"relativeDate": "10 weeks ago",
	"authorEmail": "dilinger@collabora.co.uk"
},
"adjacencies": [
	{
	"nodeTo": "2938429",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "2938429",
"name": "Stephen Rothwell",
"data": {
	"relativeDate": "10 weeks ago",
	"authorEmail": "sfr@canb.auug.org.au"
},
"adjacencies": [
	{
	"nodeTo": "cbee475",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "cbee475",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "10 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "adbfbcd",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "5ff5571",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "adbfbcd",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "10 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "fc76be4",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "23b5c50",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "fc76be4",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "10 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "9d82d5e",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "4aba098",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "9d82d5e",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "10 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "a9861b5",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "301fe8e",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "a9861b5",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "10 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "aa16cd8",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "9b4b351",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "aa16cd8",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "10 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "a3a71ca",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "59647b6",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "a3a71ca",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "10 weeks ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "6f14a66",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "8f05228",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "6f14a66",
"name": "Tejun Heo",
"data": {
	"relativeDate": "10 weeks ago",
	"authorEmail": "tj@kernel.org"
},
"adjacencies": [
	{
	"nodeTo": "e9e70bc",
	"data": {		"$lineWidth": 3 }
	}]},
{
"id": "e9e70bc",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "c031d52",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "58424a4",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "c031d52",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "c1c0cbb",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "ba9e9f3",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "c1c0cbb",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "c80d292",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "3256a05",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "c80d292",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "2a2a566",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "b8a1d37",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "2a2a566",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "ca0bf64",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "f98bfbd",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "ca0bf64",
"name": "Thadeu Lima de Souza Cascardo",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "cascardo@holoscopio.com"
},
"adjacencies": [
	{
	"nodeTo": "ea08541",
	"data": {		"$lineWidth": 1 }
	}]},
{
"id": "ea08541",
"name": "Shaohui Zheng",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "shaohui.zheng@intel.com"
},
"adjacencies": [
	{
	"nodeTo": "a225a5c",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "a225a5c",
"name": "Anton Blanchard",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "anton@samba.org"
},
"adjacencies": [
	{
	"nodeTo": "094e953",
	"data": {		"$lineWidth": 2 }
	}]},
{
"id": "094e953",
"name": "Jeff Mahoney",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "jeffm@suse.com"
},
"adjacencies": [
	{
	"nodeTo": "03eac7b",
	"data": {		"$lineWidth": 4 }
	}]},
{
"id": "03eac7b",
"name": "Richard Röjfors",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "richard.rojfors@pelagicore.com"
},
"adjacencies": [
	{
	"nodeTo": "1ec5620",
	"data": {		"$lineWidth": 1 }
	}]},
{
"id": "1ec5620",
"name": "Uwe Kleine-König",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "u.kleine-koenig@pengutronix.de"
},
"adjacencies": [
	{
	"nodeTo": "4528fd0",
	"data": {		"$lineWidth": 2 }
	}]},
{
"id": "4528fd0",
"name": "Li Zefan",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "lizf@cn.fujitsu.com"
},
"adjacencies": [
	{
	"nodeTo": "ef2b9b0",
	"data": {		"$lineWidth": 2 }
	}]},
{
"id": "ef2b9b0",
"name": "Hui Zhu",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "teawater@gmail.com"
},
"adjacencies": [
	{
	"nodeTo": "99cf611",
	"data": {		"$lineWidth": 1 }
	}]},
{
"id": "99cf611",
"name": "Richard Kennedy",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "richard@rsk.demon.co.uk"
},
"adjacencies": [
	{
	"nodeTo": "c85e9a9",
	"data": {		"$lineWidth": 2 }
	}]},
{
"id": "c85e9a9",
"name": "Wu Fengguang",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "fengguang.wu@intel.com"
},
"adjacencies": [
	{
	"nodeTo": "325fda7",
	"data": {		"$lineWidth": 1 }
	}]},
{
"id": "325fda7",
"name": "KAMEZAWA Hiroyuki",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "kamezawa.hiroyu@jp.fujitsu.com"
},
"adjacencies": [
	{
	"nodeTo": "931e80e",
	"data": {		"$lineWidth": 10 }
	}]},
{
"id": "931e80e",
"name": "anfei zhou",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "anfei.zhou@gmail.com"
},
"adjacencies": [
	{
	"nodeTo": "bc173f7",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "bc173f7",
"name": "Randy Dunlap",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "randy.dunlap@oracle.com"
},
"adjacencies": [
	{
	"nodeTo": "f4b5162",
	"data": {		"$lineWidth": 1 }
	}]},
{
"id": "f4b5162",
"name": "Sergey Matyukevich",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "geomatsi@gmail.com"
},
"adjacencies": [
	{
	"nodeTo": "b3cb537",
	"data": {		"$lineWidth": 2 }
	}]},
{
"id": "b3cb537",
"name": "Alberto Panizzo",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "maramaopercheseimorto@gmail.com"
},
"adjacencies": [
	{
	"nodeTo": "859ddf0",
	"data": {		"$lineWidth": 4 }
	}]},
{
"id": "859ddf0",
"name": "Tejun Heo",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "tj@kernel.org"
},
"adjacencies": [
	{
	"nodeTo": "1a45dcf",
	"data": {		"$lineWidth": 4 }
	}]},
{
"id": "1a45dcf",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "02b709d",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "1efe8fe",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "02b709d",
"name": "Nick Piggin",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "npiggin@suse.de"
},
"adjacencies": [
	{
	"nodeTo": "de56042",
	"data": {		"$lineWidth": 11 }
	}]},
{
"id": "de56042",
"name": "Nick Piggin",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "npiggin@suse.de"
},
"adjacencies": [
	{
	"nodeTo": "489b24f",
	"data": {		"$lineWidth": 14 }
	}]},
{
"id": "489b24f",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "4dab75e",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "cd1510c",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "4dab75e",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "7fbcca2",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "ea8d62d",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "7fbcca2",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "e770a0f",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "bc10e87",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "e770a0f",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "7ab02af",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "91dfc42",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "7ab02af",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "ab65832",
	"data": {		"$lineWidth": 5 }
	}]},
{
"id": "ab65832",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "9ce9290",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "f3f1e14",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "9ce9290",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "13af757",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "17aafcca",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "13af757",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "e20da89",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "bbec919",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "e20da89",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "834db33",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "48d5067",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "834db33",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "8ea85c2",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "5352ae6",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "8ea85c2",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "bdd8466",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "9d3cfc4",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "bdd8466",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "935cc93",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "7b7422a",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "935cc93",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "4ca5ded",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "0368897",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "4ca5ded",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "ed23690",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "61684ce",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "ed23690",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
	{
	"nodeTo": "32337f8",
	"data": {		"$lineWidth": 0 }
	},
	{
	"nodeTo": "a2fad9b",
	"data": {		"$lineWidth": 0 }
	}]},
{
"id": "32337f8",
"name": "Linus Torvalds",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "torvalds@linux-foundation.org"
},
"adjacencies": [
]},
{
"id": "a2fad9b",
"name": "Mark Brown",
"data": {
	"relativeDate": "3 months ago",
	"authorEmail": "broonie@opensource.wolfsonmicro.com"
},
"adjacencies": [
]},
{
"id": "61684ce",
"name": "FUJITA Tomonori",
"data": {
	"relativeDate": "3 months ago",
	"authorEmail": "fujita.tomonori@lab.ntt.co.jp"
},
"adjacencies": [
]},
{
"id": "0368897",
"name": "Mike Frysinger",
"data": {
	"relativeDate": "3 months ago",
	"authorEmail": "vapier@gentoo.org"
},
"adjacencies": [
]},
{
"id": "7b7422a",
"name": "Thomas Gleixner",
"data": {
	"relativeDate": "3 months ago",
	"authorEmail": "tglx@linutronix.de"
},
"adjacencies": [
]},
{
"id": "9d3cfc4",
"name": "Frans Pop",
"data": {
	"relativeDate": "3 months ago",
	"authorEmail": "elendil@planet.nl"
},
"adjacencies": [
]},
{
"id": "5352ae6",
"name": "Jason Wessel",
"data": {
	"relativeDate": "3 months ago",
	"authorEmail": "jason.wessel@windriver.com"
},
"adjacencies": [
]},
{
"id": "48d5067",
"name": "Oleg Nesterov",
"data": {
	"relativeDate": "3 months ago",
	"authorEmail": "oleg@redhat.com"
},
"adjacencies": [
]},
{
"id": "bbec919",
"name": "Frederic Weisbecker",
"data": {
	"relativeDate": "3 months ago",
	"authorEmail": "fweisbec@gmail.com"
},
"adjacencies": [
]},
{
"id": "17aafcca",
"name": "Michel Dänzer",
"data": {
	"relativeDate": "3 months ago",
	"authorEmail": "daenzer@vmware.com"
},
"adjacencies": [
]},
{
"id": "f3f1e14",
"name": "Takashi Iwai",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "tiwai@suse.de"
},
"adjacencies": [
]},
{
"id": "91dfc42",
"name": "Guenter Roeck",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "guenter.roeck@ericsson.com"
},
"adjacencies": [
]},
{
"id": "bc10e87",
"name": "Marek Skuczynski",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "mareksk7@gmail.com"
},
"adjacencies": [
]},
{
"id": "ea8d62d",
"name": "Steven Whitehouse",
"data": {
	"relativeDate": "3 months ago",
	"authorEmail": "swhiteho@redhat.com"
},
"adjacencies": [
]},
{
"id": "cd1510c",
"name": "Herbert Xu",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "herbert@gondor.apana.org.au"
},
"adjacencies": [
]},
{
"id": "1efe8fe",
"name": "Vivek Goyal",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "vgoyal@redhat.com"
},
"adjacencies": [
]},
{
"id": "f98bfbd",
"name": "Evgeniy Polyakov",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "zbr@ioremap.net"
},
"adjacencies": [
]},
{
"id": "b8a1d37",
"name": "Julia Lawall",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "julia@diku.dk"
},
"adjacencies": [
]},
{
"id": "3256a05",
"name": "Ryusuke Konishi",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "konishi.ryusuke@lab.ntt.co.jp"
},
"adjacencies": [
]},
{
"id": "ba9e9f3",
"name": "Mauro Carvalho Chehab",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "mchehab@redhat.com"
},
"adjacencies": [
]},
{
"id": "58424a4",
"name": "Steven J. Magnani",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "steve@digidescorp.com"
},
"adjacencies": [
]},
{
"id": "8f05228",
"name": "Steven Whitehouse",
"data": {
	"relativeDate": "3 months ago",
	"authorEmail": "swhiteho@redhat.com"
},
"adjacencies": [
]},
{
"id": "59647b6",
"name": "Thomas Gleixner",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "tglx@linutronix.de"
},
"adjacencies": [
]},
{
"id": "9b4b351",
"name": "Trond Myklebust",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "Trond.Myklebust@netapp.com"
},
"adjacencies": [
]},
{
"id": "301fe8e",
"name": "Tony Lindgren",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "tony@atomide.com"
},
"adjacencies": [
]},
{
"id": "4aba098",
"name": "Russell King",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "rmk+kernel@arm.linux.org.uk"
},
"adjacencies": [
]},
{
"id": "23b5c50",
"name": "Aneesh Kumar K.V",
"data": {
	"relativeDate": "10 weeks ago",
	"authorEmail": "aneesh.kumar@linux.vnet.ibm.com"
},
"adjacencies": [
]},
{
"id": "5ff5571",
"name": "Dave Airlie",
"data": {
	"relativeDate": "10 weeks ago",
	"authorEmail": "airlied@redhat.com"
},
"adjacencies": [
]},
{
"id": "2d68b7f",
"name": "Catalin Marinas",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "catalin.marinas@arm.com"
},
"adjacencies": [
]},
{
"id": "3e0b33f",
"name": "Takashi Iwai",
"data": {
	"relativeDate": "10 weeks ago",
	"authorEmail": "tiwai@suse.de"
},
"adjacencies": [
]},
{
"id": "93533c2",
"name": "Chris Wilson",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "chris@chris-wilson.co.uk"
},
"adjacencies": [
]},
{
"id": "b0bcdd3",
"name": "Jean Delvare",
"data": {
	"relativeDate": "10 weeks ago",
	"authorEmail": "khali@linux-fr.org"
},
"adjacencies": [
]},
{
"id": "89068c5",
"name": "Al Viro",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "viro@zeniv.linux.org.uk"
},
"adjacencies": [
]},
{
"id": "1af0b2f",
"name": "Matt Fleming",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "matt@console-pimps.org"
},
"adjacencies": [
]},
{
"id": "36350e0",
"name": "Mark Nelson",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "markn@au1.ibm.com"
},
"adjacencies": [
]},
{
"id": "a601341",
"name": "Michal Simek",
"data": {
	"relativeDate": "2 months ago",
	"authorEmail": "monstr@monstr.eu"
},
"adjacencies": [
]},
{
"id": "691c9ae",
"name": "Francesco Lavra",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "francescolavra@interfree.it"
},
"adjacencies": [
]},
{
"id": "1dbf588",
"name": "Nagananda.Chumbalkar@hp.com",
"data": {
	"relativeDate": "4 months ago",
	"authorEmail": "Nagananda.Chumbalkar@hp.com"
},
"adjacencies": [
]},
{
"id": "6efd806",
"name": "Sunil Mushran",
"data": {
	"relativeDate": "10 weeks ago",
	"authorEmail": "sunil.mushran@oracle.com"
},
"adjacencies": [
]},
{
"id": "260c64d",
"name": "J. Bruce Fields",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "bfields@citi.umich.edu"
},
"adjacencies": [
]},
{
"id": "8781ff9",
"name": "Eric Van Hensbergen",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "ericvh@gmail.com"
},
"adjacencies": [
]},
{
"id": "ef286f6",
"name": "NeilBrown",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "neilb@suse.de"
},
"adjacencies": [
]},
{
"id": "44bfce5",
"name": "David S. Miller",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "davem@davemloft.net"
},
"adjacencies": [
]},
{
"id": "05507fa",
"name": "Jeff Layton",
"data": {
	"relativeDate": "10 weeks ago",
	"authorEmail": "jlayton@redhat.com"
},
"adjacencies": [
]},
{
"id": "77058e1",
"name": "David Gibson",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "david@gibson.dropbear.id.au"
},
"adjacencies": [
]},
{
"id": "cbf8de1",
"name": "Hans-Christian Egtvedt",
"data": {
	"relativeDate": "4 months ago",
	"authorEmail": "hans-christian.egtvedt@atmel.com"
},
"adjacencies": [
]},
{
"id": "ee73f65",
"name": "Marcelo Tosatti",
"data": {
	"relativeDate": "3 months ago",
	"authorEmail": "mtosatti@redhat.com"
},
"adjacencies": [
]},
{
"id": "7717aef",
"name": "Heiko Carstens",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "heiko.carstens@de.ibm.com"
},
"adjacencies": [
]},
{
"id": "1c010ff",
"name": "Jean Delvare",
"data": {
	"relativeDate": "10 weeks ago",
	"authorEmail": "khali@linux-fr.org"
},
"adjacencies": [
]},
{
"id": "440ab7a",
"name": "David S. Miller",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "davem@davemloft.net"
},
"adjacencies": [
]},
{
"id": "681ee44",
"name": "Suresh Siddha",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "suresh.b.siddha@intel.com"
},
"adjacencies": [
]},
{
"id": "8523c04",
"name": "Sean Hefty",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "sean.hefty@intel.com"
},
"adjacencies": [
]},
{
"id": "5b7efa8",
"name": "David Daney",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "ddaney@caviumnetworks.com"
},
"adjacencies": [
]},
{
"id": "734c299",
"name": "Julia Lawall",
"data": {
	"relativeDate": "10 weeks ago",
	"authorEmail": "julia@diku.dk"
},
"adjacencies": [
]},
{
"id": "77c1ff3",
"name": "Andy Getzendanner",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "james.getzendanner@students.olin.edu"
},
"adjacencies": [
]},
{
"id": "a9f0c38",
"name": "Dmitry Torokhov",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "dmitry.torokhov@gmail.com"
},
"adjacencies": [
]},
{
"id": "a67093d",
"name": "Anirban Chakraborty",
"data": {
	"relativeDate": "10 weeks ago",
	"authorEmail": "anirban.chakraborty@qlogic.com"
},
"adjacencies": [
]},
{
"id": "12b336a",
"name": "Mark Brown",
"data": {
	"relativeDate": "3 months ago",
	"authorEmail": "broonie@opensource.wolfsonmicro.com"
},
"adjacencies": [
]},
{
"id": "fdcb457",
"name": "Trond Myklebust",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "Trond.Myklebust@netapp.com"
},
"adjacencies": [
]},
{
"id": "531c2dc",
"name": "Stephen M. Cameron",
"data": {
	"relativeDate": "10 weeks ago",
	"authorEmail": "scameron@beardog.cce.hp.com"
},
"adjacencies": [
]},
{
"id": "cab4d27",
"name": "Borislav Petkov",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "borislav.petkov@amd.com"
},
"adjacencies": [
]},
{
"id": "a6c7fdd",
"name": "Aaro Koskinen",
"data": {
	"relativeDate": "10 weeks ago",
	"authorEmail": "aaro.koskinen@nokia.com"
},
"adjacencies": [
]},
{
"id": "07ccb7b",
"name": "Steven Whitehouse",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "swhiteho@redhat.com"
},
"adjacencies": [
]},
{
"id": "62737d4",
"name": "Roel Kluin",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "roel.kluin@gmail.com"
},
"adjacencies": [
]},
{
"id": "fed08d0",
"name": "Jody Bruchon",
"data": {
	"relativeDate": "10 weeks ago",
	"authorEmail": "jody@nctritech.com"
},
"adjacencies": [
]},
{
"id": "75dfca8",
"name": "Jesse Barnes",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "jbarnes@virtuousgeek.org"
},
"adjacencies": [
]},
{
"id": "d6d8bf5",
"name": "Takashi Iwai",
"data": {
	"relativeDate": "9 weeks ago",
	"authorEmail": "tiwai@suse.de"
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
        duration: 800,
        //set animation transition type
        transition: Trans.Quart.easeInOut,
        //set distance between node and its children
        levelDistance: 30,
        //set node and edge styles
        //set overridable=true for styling individual
        //nodes or edges
        Node: {
            height: 20,
            width: 30,
            type: 'none',
            color: '#aaa',
            overridable: true
        },
        
        Edge: {
            type: 'bezier',
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
            label.innerHTML = ""; //node.name;
            label.onclick = function(){
                st.onClick(node.id);
            };
            //set label styles
            var style = label.style;
            style.width = 20 + 'px';
            style.height = 10 + 'px';
	    style.top = Math.round(Math.random()*60) + 'px' 
            style.cursor = 'pointer';
            style.color = '#333';
            style.fontSize = '0.8em';
            style.textAlign= 'center';
            style.paddingTop = '9px';
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
	adj.data.$lineWidth = adj.nodeFrom.data.$lineWidth;
            if (adj.nodeFrom.selected && adj.nodeTo.selected) {
                adj.data.$color = "#eaf";
                adj.data.$lineWidth = 5;
            }
            else {
                delete adj.data.$color;
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
