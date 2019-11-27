"use strict";

const init = function(e) {
	let btn = document.querySelector("#savebutton");
	
	btn.addEventListener('click', function() {
		window.localStorage.clear();
		localStorage.setItem('mystrings', document.getElementById("textentry").value);
		
		
		localStorage.setItem('mydate', document.getElementById("textentryfordate").value);
		
		localStorage.setItem('mytitle', document.getElementById("textentryfortitle").value);
		
		window.document.location = './journalNewEntry.html';
	})
	
	
};
document.addEventListener('DOMContentLoaded', function() {
init();});