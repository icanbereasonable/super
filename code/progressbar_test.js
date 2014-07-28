//update progress bar
var pBar = document.getElementById('p');
var updateProgress = function(value) {
  pBar.value = value;
  pBar.getElementsByTagName('span')[0].innerHTML = Math.floor((100 / 100) * value);
}


function mUpOne() {
	var mV = document.getElementById('m');
	mV.value = mV.value + 1;
}

function mUpFive() {
	var mV = document.getElementById('m');
	mV.value = mV.value + 5;
}

function mUpTen() {
	var mV = document.getElementById('m');
	mV.value = mV.value + 10;
}

function mUpR() {
	var mV = document.getElementById('m');
	mV.value = 1;
}