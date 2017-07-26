// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(num1,num2){
  if (num1 > num2){
    return num1
  }
  else {
    return num2
  }    // Your answer here
}

console.log(max(1,2));


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(x,y,z){
  if(x > y && x > z){
    return x
  }
  else if(y > x && y > z){
    return y
  }
  else {
    return z
  }
    // Your answer here
}

console.log(maxOfThree(4,6,8));


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
  switch (char) {
    case 'a':
      return true;
      break;
    case 'e':
      return true;
      break;
    case 'i':
      return true;
      break;
    case 'o':
      return true;
      break;
    case 'u':
      return true;
      break;
  }
}

console.log(isVowel('e'));


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.

 function sum(x,y){
   return x + y;
 }
 console.log(sum(2,4))



// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.

function avg(x,y,z){
  return (x+y+z)/3;
}
console.log(avg(6,8,10));



// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.

function getLength(aString){
  return aString.length;
}
console.log(getLength('Malignity'));



// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan(x,y){
  if (x < y){
    return true;
  }
  else {
    return false;
  }
}
console.log(greaterThan(7,23))


// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.
function greet(name){
  return 'Hello, ' + name + '!';
}

console.log(greet('Sara'));


// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madlib(adjective, animal, verb, thing){
  return 'The ' + adjective + ' ' + animal + ' ' + verb + ' the ' + thing + '!';
}

console.log(madlib('small', 'fox', 'licked', 'popsicle'));
