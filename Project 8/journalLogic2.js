"use strict";

const init = function(e) {
	document.getElementById("changedentry").value = localStorage.getItem('mystrings');
	
	
	
};
document.addEventListener('DOMContentLoaded', function() {
	localStorage.setItem('tree', localStorage.getItem('mystrings'));
	var variable1 = localStorage.getItem('tree');
	document.getElementById("changedentry").innerHTML = variable1;
	
	localStorage.setItem('getthedate', localStorage.getItem('mydate'));
	var variable2 = localStorage.getItem('getthedate');
	document.getElementById("mydate1").innerHTML = variable2;
	
	localStorage.setItem('getthetitle', localStorage.getItem('mytitle'));
	var variable3 = localStorage.getItem('getthetitle');
	document.getElementById("mytitle1").innerHTML = variable3;
	
});