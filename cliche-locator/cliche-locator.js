//File path
let clicheFilePath = "cliches.txt";

var clichesArray;
//Read text file of cliches
readTextFile(clicheFilePath, function(rawText) {
    clichesArray = rawText.split("\n");
    for (var i = 0; i < clichesArray.length; i++) { clichesArray[i] = clichesArray[i].trim() }
});

class Essay {
    constructor(text) {
        this.text = text;
        
        this.errors = [];
        //errors array format = {startIndex: Int, endIndex: Int}
    }
    
    //Adds an error to the errors array with a start and end index
    flagErrorForRange(startIndex, endIndex) {
        this.errors.push({startIndex: startIndex, endIndex: endIndex});
    }
    
    //Finds the index of a string in the text of the essay
    findStringInText(stringToFind) {
        return this.text.toLowerCase().indexOf(stringToFind.toLowerCase());
    }
    
    //Analyzes essay for cliches
    findCliches() {
        //Iterate through array of cliches and find ranges that match
        for (var i = 0; i < clichesArray.length; i++) {
            let cliche = clichesArray[i];
            let clicheIndex = this.findStringInText(cliche);
            if (clicheIndex != -1 && cliche != "") {
                this.flagErrorForRange(clicheIndex, clicheIndex+cliche.length);
            }
        }
        
        //sort errors array by start index
        this.errors.sort(function(a, b) {
            return a.startIndex - b.startIndex;
        });
    }
    
    //Returns all cliches in the form of <p> tags all contained by a single <div id="essayOutput" class="text">
    getDOMElement() {
        var paragraphText = [];
        paragraphText.push("&nbsp;&nbsp;&nbsp;&nbsp;"); //Start paragraph with tab (4 spaces)
        var paragraphIndex = 0;
        var errorIndex = 0;
        
        if (this.errors.length > 0) { //If any errors were found
            for (var i = 0; i < this.text.length; i++) { //Iterate through every character in the essay
                
                if (i == this.errors[errorIndex].startIndex) { //If current position is start of cliche, add <span> to begin highlighting
                    paragraphText[paragraphIndex] += "<span class=\"cliche\">";
                } else if (i == this.errors[errorIndex].endIndex) { //If current position is end of cliche, add </span> to end highlighting
                    paragraphText[paragraphIndex] += "</span>";
                    if (errorIndex + 1 < this.errors.length) { //Increment errorIndex if not out of range
                        errorIndex += 1;
                    }
                } else if (i > this.errors[errorIndex].endIndex) { //If, somehow, we passed the cliche's end index, go to next error
                    if (errorIndex + 1 < this.errors.length) {
                        errorIndex += 1;
                    }
                }

                if (this.text[i] == "\n") { //If we get to a newline, create a new paragraph
                    paragraphIndex += 1;
                    paragraphText.push("&nbsp;&nbsp;&nbsp;&nbsp;");
                }

                paragraphText[paragraphIndex] += this.text[i]; //Append current character in text to paragraph
            }
        } else {
            paragraphText = this.text.split("\n");
        }
        
        //Create div holding all paragraph elements and return it
        var div = document.createElement("div");
        div.className = "text"
        div.id = "essayOutput"
        for (var i = 0; i < paragraphText.length; i++) {
            var p = document.createElement("p");
            p.innerHTML = paragraphText[i];
            
            div.appendChild(p);
        }
        return div;
    }
}

function submitButtonPressed() {
    //Get Bootstrap container
    var container = document.getElementsByClassName("container")[0];
    
    //Get text from <textarea> and create Essay object
	var text = document.getElementById("essayInput").value;
    let essay = new Essay(text);
    essay.findCliches();

    //Remove input area to make room for analyzed essay
    let about = document.getElementById("about");
    let inputArea = document.getElementById("inputArea");
	inputArea.parentElement.removeChild(inputArea);
    about.parentElement.removeChild(about);
    
    //Create output area <div>
    var outputArea = document.createElement("div");
    outputArea.className = "col-lg-8 col-lg-offset-2 col-xs-12";
	var essayElement = document.createElement("blockquote");
    essayElement.appendChild(essay.getDOMElement());
    outputArea.appendChild(essayElement);
    var reloadButton = document.createElement("button");
    var reloadIcon = document.createElement("span");
    reloadIcon.className = "glyphicon glyphicon-repeat";
    reloadIcon.setAttribute("aria-hidden", "true");
	reloadButton.appendChild(reloadIcon);
    reloadButton.appendChild(document.createTextNode(" Reload"));
	reloadButton.setAttribute("onclick", "location.reload();");
    reloadButton.className = "btn btn-primary btn-lg";
	outputArea.appendChild(reloadButton);
    
    //Append elements to Bootstrap container
    container.appendChild(outputArea);
    container.appendChild(about);
}

function insertSampleEssay() {
    document.getElementById("essayInput").value = "Ken Starr, who is spearheading the campaign to get the President, says he'll leave no stone unturned in his intensive investigation to discover the true facts behind the latest sworn affidavit.\nTaking leave from his prestigious law firm job, Starr has left gentle hints that so far we've only seen the tip of the iceberg. He paints a grim picture of the the red-faced pillar of society who has tried to sweep the facts under the rug.\nBoth sides have unleashed a storm of protest in the ongoing battle for the reins of government. But defenders are few and far between for the disgraced and dishonored President, who aides say is nervous and distraught.";
}

//Function to read text files (synchronously, yes I know)
//Thanks StackOverflow!
function readTextFile(file, completion) {
	var rawFile = new XMLHttpRequest();
	rawFile.open("GET", file, false);
	rawFile.onreadystatechange = function () {
		if(rawFile.readyState === 4) {
			if(rawFile.status === 200 || rawFile.status == 0) {
				var allText = rawFile.responseText;
				completion(allText);
			}
		}
	}
	rawFile.send(null);
}