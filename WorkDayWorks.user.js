// ==UserScript==
// @name         WorkDay Works
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Workday ezAce
// @author       Jonathan T
// @match        https://wd5.myworkday.com/*
// @grant        none
// ==/UserScript==
​
// If this doesn't work/messes up your timesheet I am not liable.
​
window.addEventListener('load', function() {
    // your code here
    setTimeout(function(){
        let enterTime = document.getElementsByClassName('WP3M WMQN WE5M WD4M');
        enterTime[0].click();
        setTimeout(function() {
            let enterTime = document.getElementsByClassName('WE4Q WA4Q WG3Q WN4Q WL4Q');
            // [0] Clear
            // [1] Enter Time
            enterTime[1].click();
            // Input the hours for 9-12, 1-6
            // gwt-Label WMK1
            setTimeout(function(){
                // Returns length 26 list of input boxes
                // 4 are allocated as default for in/out
                let inputBoxes = document.getElementsByClassName('gwt-TextBox WEE2 WLE2');
                // TESTING for 0 index not 1-5
                for(let i = 0; i <= 0; i++){
                    let idx = i * 4;
                    inputBoxes[idx].value = "09:00 AM";
                    inputBoxes[idx+1].value = "12:00 PM";
                    inputBoxes[idx+2].value = "01:00 PM";
                    inputBoxes[idx+3].value = "06:00 PM";
                }
                // Click done
                setTimeout(function(){
                    let okButton = document.getElementsByClassName('WP3M WIJO WMQN WE5M WD4M');
                    okButton[0].click();
                }, 5000);
                // Page load time ~5s?
            }, 5000);
        }, 3000);
    }, 3000);
}, false);

