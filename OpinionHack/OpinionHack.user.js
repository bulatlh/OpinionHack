// ==UserScript==
// @name          Playground
// @namespace     http://www.otherbrane.com/playground
// @description   Scripting is fun
// @require       http://www.mrdoob.com/lab/javascript/beachballs/cannon.min.js
// @require       http://www.mrdoob.com/lab/javascript/beachballs/three.min.js
// @require       http://mrdoob.github.io/three.js/examples/js/libs/tween.min.js
// @require       http://mrdoob.github.io/three.js/examples/js/controls/TrackballControls.js
// @require       http://mrdoob.github.io/three.js/examples/js/renderers/CSS3DRenderer.js
// @version       1.0
// @grant       none
// ==/UserScript==

// http://www.techradar.com/us/news/internet/the-beginner-s-guide-to-greasemonkey-scripting-598247/3#articleContent

/*
 Inspired by and based on:

 http://mrdoob.github.io/three.js/examples/css3d_periodictable.html
 */

// http://stackoverflow.com/questions/5226810/stepping-through-a-greasemonkey-script


document.styleSheets[0].insertRule("#opinion {position:relative; top:10px; left:0px; "+ 
    " height: 100x; width:500x; background-color:yellow; z-index:100;" + "border:1px solid; border-radius:4px;" + "}");


if ($('#buyboxDivId').length){
    var extra_button =  document.createElement('input');
    // var button = document.createElement('button');
    $(extra_button).attr('id', 'opinion');
    // $(extra_button).attr('type', 'submit');
    $(extra_button).attr('value', 'Connect to friend');
    // $(extra_button).append(button);
    $('#buyboxDivId').append(extra_button);
    $(extra_button).click(function(){
        alert("Hello world");
    });
}