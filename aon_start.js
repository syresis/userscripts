// ==UserScript==
// @name     Archives of Nethys Improvements On Start
// @match    http://aonprd.com/*
// @grant    GM_addStyle
// @run-at   document-start
// ==/UserScript==

(function() {
    'use strict';
})();

GM_addStyle ( `
    #wrapper {
        width: 100%;
    }

    body.light {
        background: #0f0f0f;
    }

    #main-menu {
        background: none;
        padding: 0 0 0 0;
        width: 9%;
        top: 20%;

        position: fixed !important;
    }

    #main-menu, #main-menu a:hover {
        color: #cbc18f;
    }

    #main-wrapper {
        padding-left: 45px;
        margin-left: 10%;
    }

    #main-menu, #main-menu a {
        color: #dedede;
        font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;
    }
` );
