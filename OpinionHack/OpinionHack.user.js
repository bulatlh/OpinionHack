// ==UserScript==
// @name          OpinionHack
// @namespace     http://www.otherbrane.com/playground
// @description   Scripting is fun
// @require       http://www.mrdoob.com/lab/javascript/beachballs/cannon.min.js
// @require       http://mrdoob.github.io/three.js/examples/js/renderers/CSS3DRenderer.js
// @version       1.0
// @grant         none
// ==/UserScript==


// var fb_root = document.createElement('div');
// $(fb_root).attr('id', 'fb_root');
// $('body').append(fb_root);

// window.onload = function(){ // this could be done faster with the livequery() plugin for jquery
//     elt = document.createElement('iframe');
//     elt.id = 'facebook_load_frame';
//     elt.src = 'https://stormy-thicket-6531.herokuapp.com/iframe.html';
//     document.getElementsByTagName('body')[0].appendChild(elt);
// };

// // Message passing API from David Walsh at http://davidwalsh.name/window-iframe
// // Create IE + others compatible event handler
// var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
// var eventer = window[eventMethod];
// var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
// // Listen to message from child window
// eventer(messageEvent,function(e) {
//    console.log("Connection status: "+e.data.connectStatus+"; UserID: "+e.data.userID+"; AccessToken: "+e.data.accessToken);
//  //This is the data from the Facebook SDK
// },false);



document.styleSheets[0].insertRule("#opinion {position:relative; top:10px; left:0px; "+ 
    " height: 100x; width:500x; background-color:yellow; z-index:100;" + "border:1px solid; border-radius:4px;" + "}");

var dialog_menu = document.createElement('div');
$(dialog_menu).attr('id', 'dialog-modal');
$('body').append(dialog_menu);
$(dialog_menu).attr('title', 'Facebook connect');



if ($('#buyboxDivId').length){
    var extra_button =  document.createElement('input');
    // var button = document.createElement('button');
    $(extra_button).attr('id', 'opinion');
    $(extra_button).attr('value', 'Connect to friend');
    // $(extra_button).attr('disabled', 'disabled');
    $('#buyboxDivId').append(extra_button);
    
    $(extra_button).click(function(){
        var modal = new LightFace({
                         height: 200,
                        width: 300,
                        title: 'My Profile',
                        content: 'Lorem ipsum....'
                        });
        modal.open();
    });

}


