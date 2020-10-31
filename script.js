// user input variables that is called when button is clicked

function writePassword(){
  var passwordLength = parseInt(prompt("How many characters in your password?(8-128)"))


  if (passwordLength < 8 || passwordLength > 128){
    alert("Length must be 8-128 characters")

  }

  if (passwordLength >= 8 && passwordLength <= 128){
    var passwordUppercase = confirm("Would you like uppercase letters?")
    var passwordLowercase = confirm("Would you like lowercase letters?")
    var passwordNumbers = confirm("Would you like numbers?")
    var passwordSymbols = confirm("Would you like symbols?")

    if (passwordUppercase != true && passwordLowercase != true && passwordNumbers != true && passwordSymbols != true){
      alert("You must select at least one character type!")
  
    }

  }

  var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s","t", "u", "v", "w", "x", "y", "z"];

  var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S","T", "U", "V", "W", "X", "Y", "Z"];

  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  var symbols = ["!", "”", "#", "$", "%", "&", "’", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">" , "?", "@", "[", "^", "_", "{", "|", "}", "~",];

  var possibleCharacter = [];

  var generatedPassword = "";

  //build list of possible values
  if (passwordNumbers && passwordSymbols && passwordUppercase && passwordLowercase){
     possibleCharacter = possibleCharacter.concat(numbers, symbols, upper, lower) 
  }

  else if (passwordSymbols && passwordUppercase && passwordLowercase){
    possibleCharacter = possibleCharacter.concat(symbols, upper, lower)
  }

  else if (passwordSymbols && passwordNumbers && passwordLowercase){
    possibleCharacter = possibleCharacter.concat(symbols, numbers, lower)
  }
  else if (passwordSymbols && passwordUppercase && passwordLowercase){
    possibleCharacter = possibleCharacter.concat(symbols, numbers, upper)
  }
  else if (passwordSymbols && passwordUppercase && passwordLowercase){
    possibleCharacter = possibleCharacter.concat(numbers, upper, lower)
  }

  else if (passwordUppercase && passwordNumbers){
    possibleCharacter = possibleCharacter.concat(upper, numbers)
  }

  else if (passwordUppercase && passwordLowercase){
    possibleCharacter = possibleCharacter.concat(upper, lower)
  }

  else if (passwordUppercase && passwordSymbols){
    possibleCharacter = possibleCharacter.concat(upper, symbols)
  }

  else if (passwordNumbers && passwordSymbols){
    possibleCharacter = possibleCharacter.concat(numbers,symbols)
  }
  else if (passwordNumbers && passwordLowercase){
    possibleCharacter = possibleCharacter.concat(numbers,lower)
  }

  else if (passwordLowercase && passwordSymbols){
    possibleCharacter = possibleCharacter.concat(lower, symbols)
  }

  else if (passwordLowercase){
    possibleCharacter = possibleCharacter.concat(lower)
  }

  else if (passwordUppercase){
    possibleCharacter = possibleCharacter.concat(upper)
  }

  else if (passwordNumbers){
    possibleCharacter = possibleCharacter.concat(numbers)
  }

  else if (passwordSymbols){
    possibleCharacter = possibleCharacter.concat(symbols)
  }

  //loop over length of password
  for (var i = 0; i < passwordLength; i++){
    //pick random character from array
    generatedPassword += possibleCharacter[Math.floor(Math.random) * possibleCharacter.length];
    
    
  }
  //return password add character to password string
  return generatedPassword;

}


//Assignment Code
var resultEl = document.querySelector("#result");
var generateEl = document.querySelector("#generate");

// Add event listener to generate button
generateEl.addEventListener("click", writePassword);




// make an array of characters for uppercase, lowercase, and special characters to use for the generator
// once user clicks,then prompt the user for specific criteria and use that criteria fpr the generator
// prompt them for the length of password between 8-128 characters 
// once all prompts are complete then display the results in an alert or on the page