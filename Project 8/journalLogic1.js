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
	let btn = document.querySelector("#lalala");
	let newstring = document.getElementById("textentry").value;
	
	btn.addEventListener('click', function() {
		localStorage.setItem('mystrings', newstring);
		window.document.location = './journalNewEntry.html';
	})
};
document.addEventListener('DOMContentLoaded', function() {
init();});