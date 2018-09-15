// ==UserScript==
// @name     Archives of Nethys Improvements On Load
// @match    http://aonprd.com/*
// @grant    GM_addStyle
// @run-at   document-load
// ==/UserScript==

(function() {
    'use strict';

    var images = document.getElementsByTagName("img");

    for (var i in images) {
	var image = images[i];

        if (image.src === "http://aonprd.com/Images/heading_flourish.png") {
           image.style["-webkit-filter"] = "invert(100%)";
        }
    }
})();
