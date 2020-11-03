//Assigning variable code
const generateBtn = document.querySelector('#generate');

//assigning value to arrays
for generatePassword() {
  alert('Password Expired. Please create a new password with the following characters.')
  let length = parseInt(prompt('Please choose the length of your new password between 8 - 128 characters.'))
  let upperCaseQ = confirm('If you want an upper case letter, please click OK.')
  let lowerCaseQ = confirm('If youw want a lower case letter, please click OK.')
  let specialCharQ = confirm('If you want a special character, please click OK.')
  let numQ = confirm('If you want a numerical character, please click OK.')
  let upperCase =['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  let lowerCase =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let specialChar =['!', '@', '#', '$', '%', '&']
  let num =['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

  //creating a collection of arrays in order to push certain arrays

  let availableCollection =[upperCase, lowerCase, specialChar, num]


  //write password to #password input

  if(length > 7 && length < 129) {

  let newPassword = ''
  let newPasswordCharacter = ''

  if (upperCaseQ) {
    let newPasswordCharacter += upperCase
    newPassword += upperCase[Math.floor(Math.random() * upperCasse.length)]
  }

  if (lowerCaseQ) {
    let newPasswordCharacter += lowerCase
    newPassword += lowerCase[Math.floor(Math.random() * lowerCase.length)]
  }

  if (specialCharQ) {
    let newPasswordCharacter += specialChar
    newPassword += specialChar[Math.floor(Math.random() * specialChar.length)]
  }

  if (numQ) {
    let newPasswordCharacter += num
    newPassword += num[Math.floor(Math.random() * num.length)]
  }

  console.log(newPasswordCharacter)
  let newLength = length - newPassword.length

  for (let i = 0; i < newLength; i++) {
    let newCharacter = newPasswordCharacter[Math.floor(Math.random()) * newPasswordCharacter.length]
    newPassword += newCharacter
  }

  console.log(newPassword)
  return newPassword

} else {
  alert('Incorrect Password')
}


function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

generateBtn.addEventListener('click', writePassword)