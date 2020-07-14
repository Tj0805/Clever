var random_words =[
"abruptly",
"absurd",
"abyss",
"affix",
"askew",
"avenue",
"awkward",
"axiom",
"azure",
"bagpipes",
"bandwagon",
"banjo",
"bayou",
"beekeeper",
"bikini",
"blitz",
"blizzard",
"boggle",
"bookworm",
"boxcar",
"boxful",
"buckaroo",
"buffalo",
"buffoon",
"buxom",
"buzzard",
"buzzing",
"buzzwords",
"caliph",
"cobweb",
"cockiness",
"croquet",
]
let answer= '';
let totalError =10;
let mistakes =0;
let guessed =[];
let wordStatus =  null;

function randomWord() { //created a function called randomWord
    answer = random_words[Math.floor(Math.random() *random_words.length)]; //Chooses words by random
  }
  function generateButtons() { 
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
      `
        <button
          class="btn btn-lg btn-primary m-2"
          id='` + letter + `'
          onClick="controltheGuess('` + letter + `')"
        >
          ` + letter + `
        </button>
      `).join('');// gets rid of the commas
      document.getElementById('kb').innerHTML = buttonsHTML;
    }
    function controltheGuess(chosenLetter) {
        guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null; // if the chosen letter is doesnt exist, push guessed letter into array 
        document.getElementById(chosenLetter).setAttribute('disabled', true);

        if (answer.indexOf(chosenLetter) >= 0) {
            guessedWord();
            checkIfGameWon();
          } else if (answer.indexOf(chosenLetter) === -1) {
            mistakes++;
            updateMistakes();
            checkIfGameLost();
            updateHangmanPicture();
          }
        }



 // Picture 
 


        function updateHangmanPicture() {
          document.getElementById('hangmanPic').src = './hangman/' + mistakes + '.jpg';
        }


        function checkIfGameWon() {
            if (wordStatus === answer) {
              document.getElementById('kb').innerHTML = 'You have Won Congrats!!!';
            }
          }
          
          function checkIfGameLost() {
            if (mistakes === totalError) {
              document.getElementById('wordSpotlight').innerHTML = 'The answer was: ' + answer;
              document.getElementById('kb').innerHTML = 'LOL you lost, Try HARDER!!!';
            }
          }
          function guessedWord() {
            wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
          
            document.getElementById('wordSpotlight').innerHTML = wordStatus;
          }
          
          function updateMistakes() {
            document.getElementById('mistakes').innerHTML = mistakes;
          }
          
          function reset() {
            mistakes = 0;
            guessed = [];
            document.getElementById('hangmanPic').src = './hangman/1.jpg';
          
            randomWord();
            guessedWord();
            updateMistakes();
            generateButtons();
          }
          
          document.getElementById('totalError').innerHTML = totalError;
          
          randomWord();
          generateButtons();
          guessedWord();
          