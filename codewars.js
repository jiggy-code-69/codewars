//Build a function that returns an array of integers from n to 1 where n>0.
//Example : n=5 --> [5,4,3,2,1]


const reverseSeq = n => {
  let arr = [];

  for (let i = n; i >= 1; i--) {
    arr.push(i);
  }

  return arr;
};



// A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

var isSquare = function(n){
 let squareCheckNo = Math.floor(Math.sqrt(n))
 if(n < 0){
   return false;
 }
else if (squareCheckNo*squareCheckNo === n){
  return true
} 
  return false;
}

var isSquare = function(n){
  return Math.sqrt(n) % 1 === 0
}




// <!-- Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" -->

function longest(s1, s2) {
    
 let newArr = s1.concat(s2);
    let Str =Array.from(new Set(newArr))
    return Str.sort().join("");
}


// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input -->1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

function SeriesSum(n) {
  let sum = 0;
  let denominator = 1;

  for (let i = 0; i < n; i++) {
    sum += 1 / denominator;
    denominator += 3;
  }

  return sum.toFixed(2);
}

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false


function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}



// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
let vowels = /[aeiou]/gi;
  return str.replace(vowels, "");
}


// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  const matches1 = str.match(/x/gi);
  const matches2 = str.match(/o/gi);
      const xCount = matches1 === null ? 0 : matches1.length;
      const yCount = matches2 === null ? 0 : matches2.length;
  return xCount === yCount;
}
