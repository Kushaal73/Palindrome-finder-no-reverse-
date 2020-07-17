let word = prompt("whats the word");
let letters = word.split("");
let length = letters.length;
//console.log(letters);
//console.log(length);

let storage = []; //this is where the letters are stored but reversed
for (i = length - 1; i > -1; i--) {
  storage.push(letters[i]); //this pushes the letter into the stirage array
}

storage = storage.join("");
//console.log(storage); //writes storage to the console.

if (storage === word) {
  console.log(word, "is a palindrome");
} else {
  console.log(word, "is not a palindrome");
}
