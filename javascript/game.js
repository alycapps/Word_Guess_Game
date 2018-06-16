var word = ["miss saigon", "les mis", "cabaret", "a bronx tale", "anastasia", "the addams family", "dear evan hansen", "hamilton", "annie", "the king and i", "chicago", "beauty and the beast", "the book of mormon", "little shop of horrors", "the phantom of the opera", "cats", "once on this island", "sweeney todd", "hedwig and the angry inch", "matilda the musical", "newsies", "pippin", "the pirates of penzance", "avenue q", "school of rock", "something rotten"];
var guesses = document.getElementById("guessedletters");
guesses = [];
var guessesrem = document.getElementById("guessesrem");
var startingguess = 6;
guessesrem.innerText = startingguess;
var wordlocation = document.getElementById("wordlocation");
var wins = document.getElementById("wins");
var winsnumber = 0;
wins.innerText = winsnumber;
var losses = document.getElementById("losses");
var lossesnumber = 0;
losses.innerText = lossesnumber;

//random word chosen
var compword = word[Math.floor(Math.random() * (word.length))];
    console.log("computer word: " + compword);

//underscores of word shown
function underscores(a) {
    var characters = "";
    for (var i=0; i<a.length; i++) {
        //add if statement for spaces
        if (a[i] === " "){
            characters += " ";
        }
        //add else statement for spaces
        else {
            characters += "-";
        }
    }
    console.log(characters); 
    return characters;
}

//display underscores on page
var displayedword = underscores(compword);
wordlocation.innerHTML = displayedword;

//player guesses letter
document.onkeyup = function(event) {
    var guess = event.key;
    console.log("player guess: " + guess);
     
    //check if letter was chosen and not number or something
        if (event.keyCode >=65 && event.keyCode <=90) {
            console.log("guesses array: " + guesses)
            var currentword = wordlocation.innerText;

            // check if letter has already been chosen
            if (guesses.indexOf(guess) === -1) {
                guesses.push(event.key);

                //if correct fill in the blank
                if (compword.includes(guess)) {
                    console.log("correct letter");
                    // fill in blanks with guessed letters
                    var rewriteword = ""; 
                    for (var w=0; w < compword.length; w++) {
                        if (guess == compword[w]) {
                            rewriteword += guess;
                        }
                        else {
                            rewriteword += currentword[w];
                        }
                        console.log("replaced" + rewriteword);
                    }
                    wordlocation.innerText = rewriteword;

                    //win game if word is complete
                        if (rewriteword == compword) {
                            winsnumber++;
                            startingguess = 6;
                            guesses = [];
                            console.log("you win")
                            //choose and display new word
                            compword = word[Math.floor(Math.random() * (word.length))];
                            console.log("computer word: " + compword);
                            underscores(compword);
                            displayedword = underscores(compword);
                            wordlocation.innerHTML = displayedword;
                        }

                }

                //if guess is wrong
                else if (startingguess > 0) {
                    console.log("wrong letter");
                    startingguess--;
                }

                //if out of guesses lose game
                else {
                    lossesnumber++;
                    console.log("losses" + lossesnumber);
                    startingguess = 6;
                    guesses = [];
                }
            }


            // else if duplicate letter
            else {
                alert("Please chose a new letter");
                //remove duplicate letter from guesses array
            }
    }
    //choose a letter alert
    else {
        alert("Please choose a letter.");
    }

    //connect to html
    document.getElementById("guessedletters").innerHTML = guesses;
    document.getElementById("guessesrem").innerHTML = startingguess;
    document.getElementById("losses").innerHTML = lossesnumber;
    document.getElementById("wins").innerHTML = winsnumber;
}

