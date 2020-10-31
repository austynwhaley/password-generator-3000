//Assignment Code
var resultEl = document.querySelector("#password");
var generateButton = document.querySelector("#generate");



generateButton.addEventListener("click", generatePassword);

function generatePassword() {

    var lower = ["abcdefghijklmnopqrstuvwxyz"]

    var upper = ["ABCDEFGHIJKLMNOPQRSTUZWXYZ"]

    var numbers = ["0123456789"]

    var symbols = ["!”#$%&’()*+,-./:;<=>?@[\]^_`{|}~"]

    var generatePassword = "";
    var passwordOptions = "";

    var passwordLength = prompt("How many characters would you like your password to be?");

    if (Number(passwordLength < 8) | Number(passwordLength > 128) | isNaN(passwordLength)) {
        alert("Please enter a number between 8 and 128!");
        return;
    } 
    //pick characters from arrays
    var lowercaseCharacters = confirm("Would you like lowercase letters?");

    if (lowercaseCharacters) {
        passwordOptions += lower;
    }

    var uppercaseCharacters = confirm("Would you like uppercase letters?");

    if (uppercaseCharacters) {
        passwordOptions += upper;
    }

    var numberCharacters = confirm("Would you like numbers?");

    if (numberCharacters) {
        passwordOptions += numbers;
    }

    var specialCharactersInput = confirm("Would you like symbols?");

    if (specialCharactersInput) {
        passwordOptions += symbols;
    }

    if (passwordOptions === "") {
        alert("You must select at least one character type!");
    }
    

    //loop over length of password
    if (Number(passwordLength >= 8) && Number(passwordLength <= 128)) {
        for (var i = 0; i < passwordLength; i++) {
            generatePassword += passwordOptions.charAt(Math.floor(Math.random() * passwordOptions.length));
        };
        localStorage.setItem("password", generatePassword);
        var generatedPasswordStr = localStorage.getItem("password");
        resultEl.textContent = generatedPasswordStr;
    };
};
