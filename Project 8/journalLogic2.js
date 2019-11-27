/*
var date = "mm/dd/year";
var title = "Title";
var entry = "Entry goes here";

function getDate() {
	date = document.getElementById("date_today").value;	
	document.getElementById("mydate").innerHTML = "CHANGE";
}

function getTitle() {
	title = document.getElementById("textentry").value;
	document.getElementById("mytitle").innerHTMl = "ChANGE";
}

function getEntry() {
	entry = document.getElementById("textentry").value;
	document.getElementById("myentry").innerHTML = "CHANGE";
}

document.getElementById("lalala").onclick = function () {
	window.open("journalNewEntry.html");
	if (document.getElementById("myentry").value = "VARIABLE") {
		document.getElementById("myentry").innerHTML = "123";
	}
}

*/

"use strict";

const init = function(e) {
	let spn = document.querySelector("#changed-text");
	let foo = localStorage.getItem('mystrings');
	spn.innerHTML = foo;
	})
};
document.addEventListener('DOMContentLoaded', function() {
init();});