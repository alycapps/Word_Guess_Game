var word = ["Miss Saigon", "Les Mis", "Cabaret", "A Bronx Tale", "Anastasia", "The Addams Family", "Dear Evan Hansen", "Hamilton", "Annie", "The King and I", "Chicago", "Beauty and the Beast", "The Book of Mormon", "Little Shop of Horrors", "The Phantom of the Opera", "Cats", "Once on this Island", "Sweeney Todd", "Hedwig and the Angry Inch", "Matilda the Musical", "Newsies", "Pippin", "The Pirates of Penzance", "Avenue Q", "School of Rock", "Something Rotten"];
var guesses = document.getElementById("guessedletters");
guesses = [];
var guessesrem = document.getElementById("guessesrem");
var startingguess = 8;
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

function replace(b) {
    for (var w=0; w < compword.length; w++) {
        var index = compword.indexOf(b);
        if (b === compword[w]) {
        //    displayedword[w] = b;
           var m = displayedword[0, w] + b + displayedword[w+1];
            console.log(displayedword[0, w] + b + displayedword[w+1]);
        }
        // console.log("index" + index);
        // console.log("1stguess" + displayedword);
        // displayedword.replace(displayedword.charAt(index), guess);
        // console.log("guess" + displayedword);
        console.log("displayedword" + displayedword);
        wordlocation.innerHTML = m;
    }
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
            guesses.push(event.key);
            console.log("guesses array: " + guesses)
            var currentword = wordlocation.innerText;

            // check if letter has already been chosen
            //if guess is not last letter in guesses array print new letter chosen
            if (guesses.indexOf(guess) === guesses.length -1) {
  
                
                //won game
                if (displayedword === compword) {
                    wins++;
                    startingguess = 8;
                    guesses = [];
                }
        
                //if correct fill in the blank
                else if (compword.includes(guess)) {
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
                    
                }

                //else guesses go down & letter shown in letters guessed
                else if (startingguess > 0) {
                    console.log("wrong letter");
                    startingguess--;
                }

                else {
                    lossesnumber++;
                    console.log("losses" + lossesnumber);
                    startingguess = 8;
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

