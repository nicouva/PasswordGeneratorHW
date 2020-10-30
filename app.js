let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let specialChar = ['!', '@', '#', '$', '%', '&']
let num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']


document.getElementById('generate').addEventListener('click', (event) => {
  let answer1 = prompt('Password Expired. Would You Like to Make a New Password?')
  console.log('yes')
  let count = prompt('Please choose the length of the new password')
})

function generate() {
  let complexity = document.getElementById('count').value;
  let values = [upperCase, lowerCase, specialChar, num]
  let password = ''
}

for (i = 0; 1 <= complexity; i++) {

}

  //for (i = 0; i < 8; i++) 




  // Write password to the #password input
  //function writePassword(upperCase, lowerCase, specialChar, num) {
    //var password = generatePassword(upperCase, lowerCase, specialChar, num);
    //var passwordText = document.querySelector("#password");

    //passwordText.value = password;



//generateBtn.addEventListener('click' writePassword)

//var generateBtn = document.querySelector("#generate"){ alert('Password Expired. Please click "OK" to create a new password')}

// Add event listener to generate button
//////generateBtn.addEventListener("click", writePassword) 