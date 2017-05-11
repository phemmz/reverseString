//function called reverseString that returns the reverse of the string argument provided
const reverseString = (word) => {
  let reversed;
//if an empty string is supplied return null
  if (word === '') {
    return null;
  } 
//reverse the argument supplied and check if the reversed argument is the same with the argument supplied
  else {
    let reversedWord = [];
    for (let counter=word.length; counter>0; counter--) {
        reversedWord.push(word.charAt(counter-1));
    }
    reversed = reversedWord.join('');
  }
  if (reversed === word) {
    return true;
  }
  else {
    return reversed;
  }
}