// user input variables

function generatePassword(){
  var passwordLength = prompt("How many characters in your password?(8-128)")

  if (passwordLength < 8 || passwordLength > 128){
    alert("Length must be 8-128 characters")
    
    generatePassword()
  }

  if (passwordLength >= 8 && passwordLength <= 128){
    var passwordUppercase = confirm("Would you like uppercase letters?")
    var passwordLowercase = confirm("Would you like lowercase letters?")
    var passwordNumbers = confirm("Would you like numbers?")
    var passwordSymbols = confirm("Would you like symbols?")
  }

  if (passwordUppercase != true && passwordLowercase != true && passwordNumbers != true && passwordSymbols != true){
    alert("You must select at least one character type!")
  }
}

//DOM element

var resultEl = document.getElementById("result");



var randomFunction = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

function getRandomLower() {
  var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s","t", "u", "v", "w", "x", "y", "z"]
  return lower[Math.floor(Math.random() * lower.length)];
}

function getRandomUpper() {
 var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S","T", "U", "V", "W", "X", "Y", "Z"]
  return upper[Math.floor(Math.random() * upper.length)];
}

function getRandomNumber() {
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getRandomSymbol() {
  var symbols = ["!", "”", "#", "$", "%", "&", "’", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">" , "?", "@", "[", "^", "_", "{", "|", "}", "~",];
  return symbols[Math.floor(Math.random() * symbols.length)];
}




// Assignment Code
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
  
//   var generatedPassword
//   passwordText.value = password;

// }

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);




// make an array of characters for uppercase, lowercase, and special characters to use for the generator
// once user clicks,then prompt the user for specific criteria and use that criteria fpr the generator
// prompt them for the length of password between 8-128 characters 
// once all prompts are complete then display the results in an alert of on the page