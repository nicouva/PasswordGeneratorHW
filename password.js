const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const specialChar = ['!', '@', '#', '$', '%', '&']
const num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

alert('Password Expired. Please create a new password with the following characters.')

function length() {
  let passLength = prompt('Please determine password length.')
  if (passLength)
}


function writePassword()=> {
  let availableCollection = [upperCase, lowerCase, specialChar, num]

  let upperCollection = prompt('Please select a capitalized letter.')
  if (upperCollection == 'OK') {
    availableCollection.push(upperCase)
  }

  let lowerCollection = prompt('Please select a lowercase letter.')
  if (lowerCollection == 'OK') {
    availableCollection.push(lowerCase)
  }

  let specCollection = prompt('Please select a special character.')
  if (specCollection == 'OK') {
    availableCollection.push(specialChar)
  }

  let numCollection = prompt('Please select a number from 0 - 9.')
  if (numCollection == 'OK') {
    availableCollection.push(num)
  }
}
