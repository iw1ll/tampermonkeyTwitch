// ==UserScript==
// @name         Hide Twitch Element
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Скрывает элемент с !important стилями
// @match        https://www.twitch.tv/*
// @author       iW1ll
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    console.log('Twitch Hide Element Started');

    const targetSelector = '.Layout-sc-1xcs6mc-0 .dZwwnJ';

    GM_addStyle(`
        ${targetSelector} {
            display: none !important;
            visibility: hidden !important;
        }
    `);

    const observer = new MutationObserver(() => {
        document.querySelectorAll(targetSelector).forEach(element => {
            if(getComputedStyle(element).display !== 'none') {
                element.style.setProperty('display', 'none', 'important');
                element.style.setProperty('visibility', 'hidden', 'important');
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class']
    });

    document.querySelectorAll(targetSelector).forEach(element => {
        element.style.setProperty('display', 'none', 'important');
    });
})();
