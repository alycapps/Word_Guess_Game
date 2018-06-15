var word = ["Miss Saigon", "Les Mis", "Cabaret", "A Bronx Tale", "Anastasia", "The Addams Family", "Dear Evan Hansen", "Hamilton", "Annie", "The King and I", "Chicago", "Beauty and the Beast", "The Book of Mormon", "Little Shop of Horrors", "The Phantom of the Opera", "Cats", "Once on this Island", "Sweeney Todd", "Hedwig and the Angry Inch", "Matilda the Musical", "Newsies", "Pippin", "The Pirates of Penzance", "Avenue Q", "School of Rock", "Something Rotten"];
var guesses = document.getElementById("guessedletters");
guesses = [];
var guessesrem = document.getElementById("guessesrem");
guessesrem.innerHTML = 8;
var wordlocation = document.getElementById("wordlocation");


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
            console.log("a" + a.charAt[i]);
        }
    }
    console.log(characters); 
    return characters;
    }

//display underscores on page
wordlocation.innerHTML = underscores(compword);

//player guesses letter
document.onkeyup = function(event) {
    guess = event.key;
    console.log("player guess: " + guess);
     

    //check if letter was chosen and not number or something
        if (event.keyCode >=65 && event.keyCode <=90) {
            console.log("woohoo you guessed a letter")
            guesses.push(event.key);
            console.log("guesses array: " + guesses);

        // check if letter has already been chosen
        //if guess is not last letter in guesses array print new letter chosen
        if (guesses.indexOf(guess) === guesses.length -1) {
            console.log("new letter chosen");
            console.log(guesses.indexOf(guess));
            console.log(guesses.length);
            //if correct fill in the blank
                
            //else guesses go down & letter shown in letters guessed
        
        }

        // else if duplicate letter
        else {
            alert("Please chose a new letter");
            console.log("duplicate letter chosen");
            console.log(guesses.indexOf(guess));
            console.log(guesses.length);
        }
    }
    //choose a letter alert
    else {
        alert("Please choose a letter.");
    }

    //connect to html
    document.getElementById("guessedletters").innerHTML = guesses;
    document.getElementById("guessesrem").innerHTML = guessesrem;
}

