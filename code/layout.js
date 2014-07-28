// MODERNIZR //
//check browser localStorage capabilities, and warn the user if their browser is too old//

//if (Modernizr.localstorage) {
  // window.localStorage is available!
//} else {
//	alert("Your browser doesn't support localStorage and can't save your game. Try updating to a newer version.")
  // no native support for HTML5 storage
//}

// FOR THE POPUPS //

//checks if esc key was pressed//
//window.document.onkeydown = function (e)
//{
//	if (!e)
//	{
//		e = event;
//	}
//	if (e.keycode == 27)
//	{
//		popupClose();
//	}
//}

//makes the popup divs invisible//
function popupClose()
{
	document.getElementById('popupS').style.display='none';
	document.getElementById('popupL').style.display='none';
	document.getElementById('popupH').style.display='none';
	document.getElementById('popupA').style.display='none';
	document.getElementById('popupC').style.display='none';
	document.getElementById('popupFade').style.display='none';
}

//save//
//makes the popup divs visible//
function popupS()
{
	document.getElementById('popupS').style.display='block';
	document.getElementById('popupFade').style.display='block';
}

//load//
//makes the popup divs visible//
function popupL()
{
	document.getElementById('popupL').style.display='block';
	document.getElementById('popupFade').style.display='block';
}


//help//
//makes the popup divs visible//
function popupH()
{
	document.getElementById('popupH').style.display='block';
	document.getElementById('popupFade').style.display='block';
}


//about//
//makes the popup divs visible//
function popupA()
{
	document.getElementById('popupA').style.display='block';
	document.getElementById('popupFade').style.display='block';
}


//contact//
//makes the popup divs visible//
function popupC()
{
	document.getElementById('popupC').style.display='block';
	document.getElementById('popupFade').style.display='block';
}

// SAVING AND LOADING //

// STATS AND METERS //

var statVal = 1;
var statId = document.getElementById('mor');


function morUp() {
	var mV = statId;
	mV.value = mV.value + statVal;
}
//test html: <a href="#" onClick="statVal=1, statId=document.getElementById('arc'), morUp()">morality +1</a>

function abilUp() {
	var aV = +document.getElementById('str').value;
	aV = aV + statVal;
	console.log("str ="+ aV);
}