"use strict";


const init = function(e) {
	let spn = document.querySelector("#changed-text");
	let foo = localStorage.getItem('mystrings');
	spn.innerHTML = foo;
	})
};
document.addEventListener('DOMContentLoaded', function() {
init();});


