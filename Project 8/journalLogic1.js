"use strict";

const init = function(e) {
	let btn = document.querySelector("#savebutton");
	let newstring = document.getElementById("textentry").value;
	
	btn.addEventListener('click', function() {
		localStorage.setItem('mystrings', newstring);
		window.document.location = './journalNewEntry.html';
	})
};
document.addEventListener('DOMContentLoaded', function() {
init();});