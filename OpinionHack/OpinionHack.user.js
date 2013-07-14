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


var curtain = document.createElement('div');
$(curtain).attr('id', 'curtain');
$('html').append(curtain);
$(curtain).click(function(){
    $('#curtain').css('display', 'none');
    $('#poll_wrapper').css('display', 'none');
});

var wrapper_frame = document.createElement('div');
$(wrapper_frame).attr('id', 'poll_wrapper');

$('html').append(wrapper_frame);



var amazon_top_logo = document.createElement('div');
$(amazon_top_logo).attr('id', 'amz_logo');
var amz_logo_pict = document.createElement('img');
$(amz_logo_pict).attr('id', 'amz_logo');
$(amz_logo_pict).attr('src', 'amz_logo.png');
$(amazon_top_logo).append(amz_logo_pict);


if ($('#buyboxDivId').length){
    var extra_button = document.createElement('div');
    $(extra_button).attr('id', 'opinion');
    $('#buyboxDivId').append(extra_button);
    $(extra_button).text("Ask a friend");

    // $(extra_button).attr('value', 'Connect to friend');
    // $(extra_button).attr('disabled', 'disabled');
    // $(button_div).attr('id', 'button_div');



    $(extra_button).click(function(){
        $("body").css("overflow", "hidden");
        $('#curtain').css('display', 'block');
        $('#poll_wrapper').css('display', 'block');
        $.ajax({
                type: "POST",
                url: "http://secure-plains-5304.herokuapp.com/init",
                data: { id: "1,2,3"}
        });
    });

}


