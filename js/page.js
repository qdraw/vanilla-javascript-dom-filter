// ONLY FOR NOW, THIS IS A TECH DEMO
// NASTY CODE:


var isChromium = !!window.chrome;
var isFF = !!window.sidebar;
var isSafari = /constructor/i.test(window.HTMLElement);


if (!isChromium &&!isFF&&!isSafari) {
	//      Chrome *     Opera ≥ 14     Android 4.0.4
	// firefox *

	var TechDEMO = document.createElement("div");
	TechDEMO.style.cssText = 'position:absolute;left:40%; top:20%;width:15%;height:15%;z-index:100;background:#fff; padding:20px';
	TechDEMO.innerHTML = "Dit is een techdemo die alleen met de laatste versies van Firefox, Chrome en Safari werkt"
	TechDEMO.id = "TechDEMO";
	document.body.appendChild(TechDEMO);

};

// E/NASTY CODE:
