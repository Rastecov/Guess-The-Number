
// Variable to store the list of guesses 
let guesses = [];

// Variable for store the correct random number 
let correctNumber = getRandomNumber();


window.onload = function() {
  
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame)
}

/**
 * Functionality for playing the whole game
 */

function playGame(){

  let numberGuess =  document.getElementById('number-guess').value;

  displayResult(numberGuess);
  saveGuessHistory(numberGuess);
  displayHistory();
    
  }


/**
 * Show the result for if the guess it too high, too low, or correct
 */

function displayResult(numberGuess) {

  if(numberGuess == correctNumber ){
    showYouWon();
    
  }
  else if(numberGuess < correctNumber ){
    showNumberBelow();
   
  }
  else{
    showNumberAbove();
    
  }


}




/**
 * Initialize a new game by resetting all values and content on the page
 * HINT: reset the correctNumber, guesses, and HTML content
 */
function initGame(){

  //Reset the correct Number to be guessed
  correctNumber = getRandomNumber();

  // Reset the result display
  document.getElementById("result").innerHTML = "";

  //Reset the guesses array
  guesses = [];

  //Reset the guesses display history 
  displayHistory();
}

/**
 * Reset the HTML content for guess history
 */
function resetResultContent(){
  document.getElementById("result").innerHTML = "";
}

/**
 * Return a random number between 1 and 100
 */
function getRandomNumber(){
  return Math.floor(Math.random() * 100) + 1;
}





/**
 * Save guess history 
 */
function saveGuessHistory(guess) {
  // *CODE GOES BELOW HERE *

  guesses.push(guess);

  console.log(guesses);
}

/**
 * Display guess history to user
 */
function displayHistory() {
  let index = guesses.length - 1; 
  let list = "<ul class='list-group'>";
  while(index >= 0   ){

    list += "<li class='list-group-item'>" + 
    "You guessed " + guesses[index] + "</li>";
      index--;
  }

  list += '</ul>'



  document.getElementById("history").innerHTML = list;
}



/**
 * Retrieve the dialog based on if the guess is wrong or correct 
 */
function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "high":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
      case "low":
      dialog = "<div class='alert alert-danger' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function showYouWon(){
  const text = "Awesome job, you got it!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   */

  let dialog = getDialog("won", text);

  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
  const text = "Your guess is too high!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   */

  let dialog = getDialog("high", text);


  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Your guess is too low!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   */

  let dialog = getDialog("low", text);

  document.getElementById("result").innerHTML = dialog;
}
