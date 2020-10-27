// user inputs

//var passwordLength = prompt("How many characters in your password?(8-128)")

//var passwordUppercase = confirm("Would you like uppercase letters?")

//var passwordLowercase = confirm("would you like lowercase letters?")

//var passwordNumbers = confirm("Would you like numbers?")

//var passwordSymbols = confirm("Would you like symbols?")





// generator functions

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = ["!", "”", "#", "$", "%", "&", "’", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">" , "?", "@", "[", "^", "_", "{", "|", "}", "~",];
  return symbols[Math.floor(Math.random() * symbols.length)];
}


console.log(getRandomLower());

console.log(getRandomUpper());

console.log(getRandomNumber());

console.log(getRandomSymbol());

