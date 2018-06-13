var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var word = ["Miss Saigon", "Les Mis", "Cabaret", "A Bronx Tale", "Anastasia", "The Addams Family", "Dear Evan Hansen", "Hamilton", "Annie", "The King and I", "Chicago", "Beauty and the Beast", "The Book of Mormon", "Little Shop of Horrors", "The Phantom of the Opera", "Cats", "Once on this Island", "Sweeney Todd", "Hedwig and the Angry Inch", "Matilda the Musical", "Newsies", "Pippin", "The Pirates of Penzance", "Avenue Q", "School of Rock", "Something Rotten"];
var guesses = document.getElementById("guessedletters");
var guesses = [];
var guessesrem = document.getElementById("guessesrem");
var guessesrem = 8;

//random word chosen
var compword = word[Math.floor(Math.random() * (word.length))];
    console.log("computer word: " + compword);

document.onkeyup = function(event) {
     guess = event.key;
     console.log("player guess: " + guess);

// underscores of word shown

//player guesses letter

//check if letter was chosen and not number or something

if (~alphabet.indexOf(guess)) {
         console.log("woohoo you guessed a letter")
    }
//if correct fill in the black

//else guesses go down

//connect to html
    document.getElementById("guessedletters").innerHTML = guesses;
    document.getElementById("guessesrem").innerHTML = guesses;
}