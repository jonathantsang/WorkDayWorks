// ==UserScript==
// @name         WorkDay Works
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Workday ezAce
// @author       Jonathan T
// @match        https://wd5.myworkday.com/*
// @grant        none
// ==/UserScript==

// If this doesn't work/messes up your timesheet I am not liable.
// Test oct 20-27

let enterTimeButtonName = 'WF4M WCRN WK5M WJ4M';
let enterTimeOptionName = 'WK4Q WG4Q WM3Q WD5Q WB5Q';
let inputBoxesName = 'gwt-TextBox WKE2 WBF2';
let tabsName = 'WOK1 WEI1';
let okButtonName = 'WF4M WJ4M WOJO WCRN WK5M';
let refreshName = 'wd-Text WF-1 WG-1 WI5 WKBN';

window.addEventListener('load', function() {
    setTimeout(function(){
        // Get the original "Enter Time" button
        let enterTime = document.getElementsByClassName(enterTimeButtonName);
        enterTime[0].click();
        setTimeout(function() {
            // Click the "Enter Time" option in the dropdown list
            let enterTime = document.getElementsByClassName(enterTimeOptionName);
            // [0] Clear
            // [1] Enter Time
            enterTime[1].click();
            // Input the hours for 9-12, 1-6
            setTimeout(function(){
                // Returns length 26 list of input boxes
                // 4 are allocated as default for in/out
                let inputBoxes = document.getElementsByClassName(inputBoxesName);
                let tabs = document.getElementsByClassName(tabsName);
                let refresh = document.getElementsByClassName(refreshName);
                setTimeout(function(){
                    for(let i = 1; i <= 6; i++){
                        let idx = i * 4;
                        tabs[i].click();
                        inputBoxes[idx].focus();
                        inputBoxes[idx].value = "09:00 AM";
                        inputBoxes[idx].focus();
                        inputBoxes[idx+1].value = "12:00 PM";
                        inputBoxes[idx].focus();
                        inputBoxes[idx+2].value = "01:00 PM";
                        inputBoxes[idx].focus();
                        inputBoxes[idx+3].value = "06:00 PM";
                    }
                }, 5000);
                // Page load time ~5s?
            }, 5000);
        }, 3000);
    }, 3000);
}, false);
