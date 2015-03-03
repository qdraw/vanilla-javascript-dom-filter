"use strict";

if (document.querySelectorAll("#preloader").length >= 1) {
	document.getElementById("preloader").style.display = "block";
}///e/fi


initFilter();

function initFilter () {
	
	var thumbnail = document.querySelectorAll("#content .thumbnail");
	if (thumbnail.length >= 1) {
		makeFilterList();
	}///e/thumbnail.length 


}//e/filter

function makeFilterList () {
	var thumbnail = document.querySelectorAll("#content .thumbnail");
	var tags = [];

	for (var i = 0; i < thumbnail.length; i++) {
		// thumbnail[i].style.display  = "none";
		// var temptag = thumbnail[i].children[0].dataset.tag; >> not supported in IE

		var temptag = thumbnail[i].children[0].getAttribute('data-tag');

		// console.dir(temptag);
		var temptag = temptag.split(",");

		for (var p = 0; p < temptag.length; p++) {
			tags.push(temptag[p]);
		};

	};
	tags = arrayDuplicate(tags);


    var z = document.getElementById("filter");

    if (!(z==null)) {
		writeFilterList (tags);
    };


}//e/fiter

// filterList = arrayDuplicate(filterList);



function writeFilterList (tags) {
// #filter article

    var ul = document.createElement("ul");
    ul.className = "tags";
	document.querySelector("#filter article").appendChild(ul);

    var filterarticle = document.querySelector("#filter article ul")


    for (var i = 0; i < tags.length; i++) {
	    var li = document.createElement("li");
	    var a = document.createElement("a");

    	var currentitem = filterarticle.appendChild(li).appendChild(a);
    	currentitem.href = "#" + tags[i]; 
    	currentitem.innerHTML = tags[i];
    };


}///e/writeFilterList

hashSelect();
function hashSelect () {

	var thumbnail = document.querySelectorAll("#content .thumbnail");
	if (thumbnail.length >= 1) {
		var hash = window.location.hash.replace("#","");
		filterSelect(hash);
		console.log("hash " + hash);
	}//e/thumbnail
}///e/hashSelect



function fadeIn (input) {


	// input.style.opacity
	// console.log(Number(input.style.opacity) + 0.1);

	if (Number(input.style.opacity) < 0.5) {
		input.style.opacity = Number(input.style.opacity) + 0.015;
	}
	else {
		input.style.opacity = Number(input.style.opacity) + 0.1;
	}




	if (Number(input.style.opacity) < 1) {
		requestAnimationFrame(function(z) {
        	fadeIn(input);
    	});
	};
  

}///e/function fadeIn



function filterSelect(filtername) {
	function leftInSlideUsingMarginProxy (object) {
		requestAnimationFrame(function(z) {
		      	leftInSlideUsingMargin(object);
		});

	}//e/leftInSlideUsingMarginProxy

	// var thumbnail = document.getElementById("content");


	var q = 0;
	var thumbnail = document.getElementById("content").firstChild;
	while(thumbnail) {



		if ((thumbnail.nodeName == "div")||(thumbnail.nodeName == "DIV")) {

				// console.dir(thumbnail);

				// var datatag = thumbnail.firstChild.getAttribute('data-tag');

				// var datatag = thumbnail.firstElementChild.getAttribute('data-tag');
				// var datatag = thumbnail.getAttribute('data-tag');


				var datatag = thumbnail.firstElementChild.getAttribute('data-tag');

		        if ((datatag.indexOf(filtername) > -1) || (filtername == "all")) {


				

					// var urlWithoutHash = document.location.href.replace(location.hash , "" );

					console.log(location.hash);
					var url = "#" + filtername;
					var obj = { Page: "page", Url:  url};
					history.pushState(obj, obj.Page, obj.Url);


		        	thumbnail.className = "thumbnail";
      	

	        		thumbnail.children[1].style.opacity = "0";

	        		var input = thumbnail.children[1];


	        		fadeIn (input);


					var classNames  = ["one", "four", "three","two"];

					for (var c = 0; c < classNames.length; c++) {
					    if ( ( (q+c) % 4 ) === 0 ) {
							thumbnail.className = classNames[c];
					    }//e/fi
					};
					q++;


						

		        }//fi
		        else {
		        	thumbnail.className = "nothumbnail";
		        }



		};//e/fi





	thumbnail = thumbnail.nextSibling;
	}//e/for/while


	if (document.querySelectorAll("#content .nothumbnail").length == document.getElementById("content").children.length) {
		console.log("damm");
		for (var i = 0; i < document.getElementById("content").children.length; i++) {
			document.getElementById("content").children[i].className = "thumbnail"
		};
	};


	// Toggle on:

	var toggle = document.querySelectorAll("#filter article ul li a");

	for (var i = 0; i < toggle.length; i++) {
		if (document.querySelectorAll("#filter article ul li a")[i].href.indexOf(filtername) >= 0) {
			console.log(toggle[i].href);
			if (toggle[i].className === "active") {

				toggle[i].className = "noactive";
				console.log("all");

				filterSelect("all");
			}
			else {
				toggle[i].className = "active";
				if (filtername=="") { // is new state aka filtername==all

					toggle[i].className = "noactive";
				};

			} 
		}//e/fi
		else {
			toggle[i].className = "noactive";
		}///else

	};

	if (document.querySelectorAll("#preloader").length >= 1) {

			if (document.querySelectorAll("#page1").length >= 1) {

				var dv = document.createElement("div");
				dv.style.cssText = 'z-index:-1; position:fixed;top:0px;width:100%;height:100%;opacity:0.4;z-index:100;background:#fff;';
				dv.id = "loadShield";
				document.body.appendChild(dv);

			}//e/fi




		 setTimeout(function(){ 
			if (document.querySelectorAll("#page1").length >= 1) {
			 	var el = document.getElementById( "loadShield" );
				el.parentNode.removeChild( el );
			}///e/fi
		 	document.getElementById("preloader").style.display = "none";


		 }, 1000);


		if (document.querySelectorAll("#page2").length >= 1) {
			var thumbnail = document.getElementById("content");
			console.log(thumbnail.children.length);


			for (var i = 0; i < thumbnail.children.length; i++) {
					var object = thumbnail.children[i];
					leftInSlideUsingMarginProxy(object);
			};
		}///e/fi	

		if (document.querySelectorAll("#page3").length >= 1) {

			var thumbnail = document.getElementById("content");
			console.log(thumbnail.children.length);


			for (var i = 0; i < thumbnail.children.length; i++) {
					var object = thumbnail.children[i];
					object.style.transform = "scale(1)";
			};

		    
		}

		if (document.querySelectorAll("#page4").length >= 1) {
			var thumbnail = document.getElementById("content");
			console.log(thumbnail.children.length);


			for (var i = 0; i < thumbnail.children.length; i++) {
					var object = thumbnail.children[i];
					diffSlider(object);
			};


		} //e/pg3



	}///e/fi

}//e/filterSelect(hash)



function leftInSlideUsingMargin (object) {

	var increment = 10;

	if (!(object.className.indexOf("start") > -1)) {
		if (object.style.marginTop === "0px") {
			object.style.marginTop = "-500px";
			object.className += " start"
		}
	};

	if (object.style.marginTop == "" ) {
		object.className += " start"
		object.style.marginTop = "-500px";
	}

	// if (object.style.marginTop == "" ) {
	// 	object.style.marginTop = "-500px";
	// 	object.style.zIndex = "3";

	// 	// object.style.marginTop  =  object.offsetTop + "px";
	// };

	var	marginleft = object.style.marginTop.split("px");

	var	counter = Number(marginleft[0]);


	object.style.marginTop = (counter + increment) + "px";

	if ((counter === 0)) {
		object.style.marginTop = "0px";
	};

	// console.log(counter);

	if ((counter < 0)||(counter >= 500)) {
		if (!(object.className.indexOf("start") > -1)) {

		var store = object.className.split(" ");
		object.className = store[0];
		}

	    requestAnimationFrame(function(z) {
	         leftInSlideUsingMargin(object);
	    });


	}///e/counter


}//e/leftInSlideProxy






function diffSlider (object) {
	if (object.className != "nothumbnail") {
		console.dir(object)
	}
	if (object.className === "one") {
		// object.style.left = "0px";
	}//e/one

}//e/diffSlider




// if (pageName != "index") {

// 	var w = document.querySelectorAll(".tags a");
// 	for (var i = w.length - 1; i >= 0; i--) {
// 		// console.log(w[i]);
// 		w[i].addEventListener("click", localLink, false);
// 	};

// };//e/pageName

	var w = document.querySelectorAll(".tags a");
	for (var i = w.length - 1; i >= 0; i--) {
		// console.log(w[i]);
		// w[i].addEventListener("click", localLink, false);
		w[i].addEventListener("click", function(e){ var those = this; localLink(e,those) }, false);
	};

function localLink (e,those) {
    e.preventDefault();

	var tag = those.href.substring(those.href.indexOf("#")+1,those.href.length);
	var hash = window.location.hash.replace("#","");


	if (!(tag == hash && those.parentNode.nodeName =="DIV") ) {
		if (document.querySelectorAll("#preloader").length >= 1) {
			document.getElementById("preloader").style.display = "block";
		}///e/fi
		filterSelect(tag);
	};




}//e//localLink


function arrayDuplicate (array) {

	var temp = {};
	for (var i = 0; i < array.length; i++)
	temp[array[i]] = true;
	var r = [];
	for (var k in temp)
	r.push(k);
	return r;

}//e//arrayDuplicate


loadImageFromImagesFolder();

function loadImageFromImagesFolder () {

	var thumbnail = document.getElementById("content").firstChild;
	while(thumbnail) {
		if ((thumbnail.nodeName == "div")||(thumbnail.nodeName == "DIV")) {
			var dataname = thumbnail.firstElementChild.getAttribute('data-name');

			thumbnail.firstElementChild.style.backgroundImage = "url('images/"+ dataname +".png')"
			// console.log(dataname);

		};//e/fi


	thumbnail = thumbnail.nextSibling;
	}//e/for/while

}//e/loadImageFromImagesFolder




// var q = document.querySelectorAll('.backgroundimage');

// for (var i = 0; i < q.length; i++) {
//     q[i].addEventListener("click", function(e){ var those = this; backgroundSizerProxy(e,those) }, false);
// }





// function backgroundSizerProxy (e,those) {
//     e.preventDefault();

// 	var dv = document.createElement("div");
// 	dv.style.cssText = 'z-index:-1; position:fixed;top:0px;width:100%;height:100%;opacity:0.4;z-index:100;background:#fff;';
// 	document.body.appendChild(dv);


//     var goToPosition = those.parentElement.offsetTop;


//     requestAnimationFrame(function(z) {
//          anchorLink(goToPosition);
//     });




//     requestAnimationFrame(function(z) {
//          backgroundSizer(those);
//     });
// }///e/backgroundSizerProxy

// function backgroundSizer (those) {



// 	if ((those.parentElement.className != "one")) {
// 		those.parentElement.previousElementSibling.children[0].style.width = those.parentElement.previousElementSibling.offsetWidth - 50 + "px";
// 		those.parentElement.previousElementSibling.style.width = those.parentElement.previousElementSibling.offsetWidth - 50 + "px";

// 		those.parentElement.previousElementSibling.children[1].style.display = "none"; // label
// 		console.log(those.parentElement.previousElementSibling.children[1]);

// 	};

// 	if (those.parentElement.previousElementSibling != null) {
// 		if ((those.parentElement.className === "two")||(those.parentElement.className === "four")) {
// 		    those.parentElement.previousElementSibling.style.display = "none";
// 		}
// 	};

// 	var q = those.parentElement.offsetWidth / those.parentElement.offsetHeight;

// 	console.log(40 * q);

// 	those.parentElement.style.width = those.parentElement.offsetWidth + 90 + "px"; //3

// 	if ((those.parentElement.className === "one")||(those.parentElement.className === "four")) {
// 		those.style.height = those.parentElement.offsetHeight + 30 + "px"; //1
// 	}
// 	else {
// 		those.style.height = those.parentElement.offsetHeight + 90 + "px"; //1
// 	}


// 	if (those.parentElement.offsetWidth < window.innerWidth-70) {

// 		// if ((those.parentElement.className != "one")) {
// 		// 	those.parentElement.previousElementSibling.style.width = 0 + "px";
// 		// }

// 		requestAnimationFrame(function(z) {
// 	        backgroundSizer(those);
// 	    });
// 	}
// 	else {

// 		 location.replace(those.href);
// 	}




// }///e/function anchorLink


















