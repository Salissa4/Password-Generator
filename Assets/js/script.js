// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {

//array for characters to generate password
var upperCase = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", 
  "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", 
  "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var symbols = [ "!", "#", "$", "%", "&", "@", "*"];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var generatePass = [];
var userInput = [];

//prompt for password length
    var length = parseInt(
      prompt ("How many characters would you like in your password?"), 10
      );

    if (length < 8 ) {
      alert ("Password length must be a minimum of 8 characters.");
      return null;
    }
    if (length > 128 ) {
      alert ("Password length must be a maxmimum of 128 characters.");
      return null;
    }
  //var to confirm special characters, numbers, upperCase, lowerCase
    var hasUpperCase = confirm ("Click ok to include upper case alpha.");
    var hasLowerCase = confirm ("Click ok to include lower case alpha.");
    var hasSymbols = confirm ("Click ok to include symbols.");
    var hasNumbers = confirm ("Click ok to include numbers.");

  //if password doesnt include any of these fail password generator
  if (
    hasUpperCase === false &&
    hasLowerCase === false &&
    hasSymbols === false &&
    hasNumbers === false 
    ) {
      alert("To generate password must select one character type");
      return null;
    };
  
  if (upperCase){
      generatePass = generatePass.concat(upperCase);
      
    }
    
   if (lowerCase){
      generatePass = generatePass.concat(lowerCase);
    
    }
    
    if (symbols){
      generatePass = generatePass.concat(symbols);
    
    }
    
    if (numbers) 
      generatePass = generatePass.concat(numbers);
      console.log(generatePass)
    
    
    for (var i = 0; i < length ; i++) {
          
      userInput.push (generatePass[Math.floor(Math.random() * generatePass.length)]); 
      }

      return userInput.join("") ;
    }
    
  
//password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);