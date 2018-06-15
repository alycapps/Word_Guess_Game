var word = ["Miss Saigon", "Les Mis", "Cabaret", "A Bronx Tale", "Anastasia", "The Addams Family", "Dear Evan Hansen", "Hamilton", "Annie", "The King and I", "Chicago", "Beauty and the Beast", "The Book of Mormon", "Little Shop of Horrors", "The Phantom of the Opera", "Cats", "Once on this Island", "Sweeney Todd", "Hedwig and the Angry Inch", "Matilda the Musical", "Newsies", "Pippin", "The Pirates of Penzance", "Avenue Q", "School of Rock", "Something Rotten"];
var guesses = document.getElementById("guessedletters");
guesses = [];
var guessesrem = document.getElementById("guessesrem");
var startingguess = 8;
guessesrem.innerText = startingguess;
var wordlocation = document.getElementById("wordlocation");
var wins = document.getElementById("wins");
wins = 0;
var losses = document.getElementById("losses");
losses = 0;


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

// function correctguess(b) {
//     compword.toLowerCase();
//     for (var i=0; i<compword.length; i++) {
//         if (compword.includes(b));
//     }
// }

//display underscores on page
wordlocation.innerHTML = underscores(compword);

//player guesses letter
document.onkeyup = function(event) {
    guess = event.key;
    console.log("player guess: " + guess);
     

    //check if letter was chosen and not number or something
        if (event.keyCode >=65 && event.keyCode <=90) {
            guesses.push(event.key);
            console.log("guesses array: " + guesses);

            // check if letter has already been chosen
            //if guess is not last letter in guesses array print new letter chosen
            if (guesses.indexOf(guess) === guesses.length -1) {
  
                
                //won game
                

                //if correct fill in the blank
                if (compword.includes(guess)) {
                    console.log("correct letter");
                }

                //else guesses go down & letter shown in letters guessed
                else {
                    console.log("wrong letter");
                    startingguess--;
                    console.log("guessesrem" + startingguess);
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
}

