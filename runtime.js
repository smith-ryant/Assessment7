const perf = require("execution-time")(); // Importing the 'execution-time' module to measure the execution time of functions

function doublerAppend(nums) {
  // Function to double every number in an array and append the result to a new array

  let new_nums = []; // Create an empty array to store the doubled numbers

  for (let i = 0; i < nums.length; i++) {
    // Loop through each number in the input array
    let num = nums[i] * 2; // Double the current number
    new_nums.push(num); // Append the doubled number to the new array
  }
}

function doublerInsert(nums) {
  // Function to double every number in an array and insert the result at the beginning of a new array

  let new_nums = []; // Create an empty array to store the doubled numbers

  for (let i = 0; i < nums.length; i++) {
    // Loop through each number in the input array
    let num = nums[i] * 2; // Double the current number
    new_nums.unshift(num); // Insert the doubled number at the beginning of the new array
  }
}

function getSizedArray(size) {
  // Function to generate an array of numbers from 0 to a given size
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push(i);
  }
  return array;
}

const tinyArray = getSizedArray(10); // Generate an array of size 10
const smallArray = getSizedArray(100); // Generate an array of size 100
const mediumArray = getSizedArray(1000); // Generate an array of size 1000
const largeArray = getSizedArray(10000); // Generate an array of size 10000
const extraLargeArray = getSizedArray(100000); // Generate an array of size 100000

// Measure the execution time of the 'doublerAppend' function with the 'extraLargeArray'
perf.start(); // Starts the timer
doublerAppend(extraLargeArray); // Call the 'doublerAppend' function with the 'extraLargeArray'
let resultsAppend = perf.stop(); // Stops the timer and saves the execution time results

// Measure the execution time of the 'doublerInsert' function with the 'extraLargeArray'
perf.start(); // Starts the timer
doublerInsert(extraLargeArray); // Call the 'doublerInsert' function with the 'extraLargeArray'
let resultsInsert = perf.stop(); // Stops the timer and saves the execution time results

console.log("Results for the extraLargeArray");
console.log("insert", resultsInsert.preciseWords); // Print the execution time of 'doublerInsert'
console.log("append", resultsAppend.preciseWords); // Print the execution time of 'doublerAppend'

function addToZero(nums) {
  let seen = new Set(); // Create a set to store the numbers we've seen

  for (let num of nums) {
    // Loop through each number in the array
    if (seen.has(-num)) {
      // If the set contains the negative of the current number
      return true; // Return true
    }
    seen.add(num); // Add the current number to the set
  }

  return false; // If no pair sums to zero, return false
}
addToZero([]); // false
addToZero([1]); // false
addToZero([1, 2, 3]); // false
addToZero([1, 2, 3, -2]); // true

function hasUniqueChars(word) {
  let seen = new Set(); // Create a set to store the characters we've seen

  for (let char of word) {
    // Loop through each character in the word
    if (seen.has(char)) {
      // If the set contains the current character
      return false; // Return false
    }
    seen.add(char); // Add the current character to the set
  }

  return true; // If no duplicate characters are found, return true
}
hasUniqueChars("Monday"); // true
hasUniqueChars("Moonday"); // false

function isPangram(sentence) {
  let seen = new Set(); // Create a set to store the characters we've seen

  for (let char of sentence.toLowerCase()) {
    // Convert to lowercase and loop through each character in the sentence
    if (char >= "a" && char <= "z") {
      // If the character is a letter
      seen.add(char); // Add the character to the set
    }
  }

  return seen.size === 26; // Return true if all letters of the alphabet are present, false otherwise
}
isPangram("The quick brown fox jumps over the lazy dog"); // true
isPangram("Hello, world!"); // false

function findLongestWord(words) {
  let maxLength = 0; // Initialize maximum length to 0

  for (let word of words) {
    // Loop through each word in the array
    if (word.length > maxLength) {
      // If the length of the current word is greater than the maximum length
      maxLength = word.length; // Update the maximum length
    }
  }

  return maxLength; // Return the maximum length
}
findLongestWord(["apple", "banana", "cherry"]); // 6
