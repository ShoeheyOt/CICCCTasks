/**
 * Challenge: Simple Algo Test
 * sumArrayFn is a function that takes an array of numbers. Write the logic
 * to return the sum of all the numbers in the array.
 *
 * Test Output:
 * console.log(sumArray([])) // 0
 * console.log(sumArray([1, 2, 3])) // 6
 * console.log(sumArray([10, 20, 30])) // 60
 *
 * Positive Test Cases:
 * 1. Empty array should return 0
 * 2. Array with all positive numbers should return the sum of all the numbers
 * 3. Array with all negative numbers should return the sum of all the numbers
 * 4. Array with mixed positive and negative numbers should return the sum of all the numbers
 *
 */

// function sumArray (arr) {
//   let sum = 0;  
//   for (let i = 0; i < arr.length; i++){
//     sum += arr[i];
//   }
//   return sum;
// };

// console.log(sumArray([100,20]));

/**
 * Challenge: Is Ascending Order
 * isSortedFn is a function that takes an array of numbers. Write the logic to
 * return true if the elements in the array are in ascending order and false
 * otherwise. An array is said to be in ascending order if the elements, from
 * left to right, are in increasing order. None of the elements in the array are
 * equal to each other.
 *
 * Test Output:
 * console.log(isSorted([])) // true
 * console.log(isSorted([1, 2, 3, 4, 5])) // true
 * console.log(isSorted([1, 3, 2, 5, 4])) // false
 * console.log(isSorted([7])) // true
 * console.log(isSorted([2, 5])) // true
 *
 * Positive Test Cases:
 * 1. Empty array should return true
 * 2. Sorted array should return true
 * 3. Unsorted array should return false
 * 4. Array with single element should return true
 * 5. Array with two elements in ascending order should return true
 * 6. Array with two elements in descending order should return false
 *
 */

// check if array have any value inside
//


const array1 = ["a", "b", "c"];

array1.forEach((element) => console.log(element));


// Traditional anonymous function
// (function (a, b) {
//   return a + b + 100;
// });

// Arrow function
const result = (a, b) => a + b + 100;

const a = 4;
const b = 2;


// Traditional anonymous function (no parameters)
// (function () {
//   return a + b + 100;
// });

// // Arrow function (no parameters)
console.log(() => a + b + 100);
