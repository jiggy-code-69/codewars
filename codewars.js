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
