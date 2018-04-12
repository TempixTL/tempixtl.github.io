/*jslint browser: true, devel: true*/
/*global $, jQuery, alert*/

var programmerText = ">Hey, I'm Thomas. I'm a programmer.",
    pathToMOTD = "motd.txt";

//Before webpage is loaded
window.onload = function () {
    "use strict";
    
    $(".programming.lead").text(">");
    
    //Hide almost all page elements
    //$("blockquote").hide();
    //$("#index-body").hide();
    //$("#footer").hide();
    //$(".index.jumbotron").hide();
};

function blinkingCursor() {
    "use strict";
    
    var showUnderline = true;

    setInterval(function () {
        programmerText = document.getElementsByClassName("programming")[0].innerHTML;
        if (showUnderline === true) {
            programmerText += "_";
        } else {
            programmerText = programmerText.slice(0, -1);
        }
        showUnderline = !showUnderline;
        document.getElementsByClassName("programming")[0].innerHTML = programmerText;
    }, 500);
}

function typing(completionHandler) {
    "use strict";
    
    var index = 1,
        typeInterval = setInterval(function () {
            document.getElementsByClassName("programming")[0].innerHTML = programmerText.substring(0, index);

            if (index < programmerText.length) {
                index += 1;
            } else {
                clearInterval(typeInterval);
                completionHandler();
            }
        }, 100);
}

function readTextFile(fileName, completionHandler) {
    "use strict";
    
    var rawFile = new XMLHttpRequest();
    
    rawFile.open("GET", fileName, true);

    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 404) {
                console.log("File not found");
                completionHandler(null);
            } else if (rawFile.responseText !== undefined) {
                completionHandler(rawFile.responseText);
            }
        }
    };
    
    rawFile.send(null);
}

function getMOTD(path, completionHandler) {
    "use strict";
    
    readTextFile(path, function (returnText) {
        if (returnText !== null) {
            
            returnText = returnText.split("\n");
            var specialText = returnText[0],
                specialMessages = [],
                defaultMessages = [],
                currentDay = new Date().getDate(),
                currentMonth = new Date().getMonth() + 1;
            
            if (specialText.substring(specialText.indexOf("="), specialText.length - 1) !== "") { //If special text exists, use it
                returnText = specialText.substring(specialText.indexOf("=") + 1, specialText.length);
            } else {
                returnText.splice(0, 1);
                
                //separate all other motds into special and default arrays
                returnText.forEach(function (element, index, array) {
                    if (element.charAt(0) === "*") {
                        specialMessages.push(element);
                    } else {
                        defaultMessages.push(element);
                    }
                });
                
                //Pick a random default message to show
                returnText = defaultMessages[Math.floor((Math.random() * defaultMessages.length))];
                
                //If there is a special message for a holiday, show that one
                specialMessages.forEach(function (element, index, array) {
                    var specialMonth = element.substring(1, element.indexOf("/")),
                        specialDay = element.substring(element.indexOf("/") + 1, element.indexOf("="));
                    
                    specialDay = parseInt(specialDay, 10);
                    specialMonth = parseInt(specialMonth, 10);
                    
                    if (currentDay === specialDay && currentMonth === specialMonth) {
                        returnText = element.substring(element.indexOf("=") + 1, element.length);
                    }
                });
            }
            
        } else { //If there is an error
            returnText = "Hey, I'm Thomas. I'm a programmer.";
        }
        
        completionHandler(returnText);
    });
}

//After all webpage elements are loaded
$(function () {
    "use strict";
    
    //Get message of the day
    getMOTD(pathToMOTD, function (returnText) {
        programmerText = ">" + returnText;
        //Do typing animation
        typing(function () {
            //After typing animation finishes...
            blinkingCursor();
            /*$(".index.jumbotron").slideDown(1000, function () {
                $("blockquote").fadeIn(1000, function () {
                    $("#index-body").fadeIn(1000);
                    $("#footer").fadeIn(1000);
                });
            });
            */
        });
    });
});