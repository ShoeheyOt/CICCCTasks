//Solution 1 which is not reusable

//function printPattern(targetNumber) {
//   if (targetNumber <= 0) {
//       console.log(targetNumber);
//       console.log(targetNumber + 5);
//       console.log(targetNumber + 10);
//       return;
//   }
//   console.log(targetNumber);
//   printPattern(targetNumber - 5);
// }

// printPattern(8);


//Solution2
function printPattern(targetNumber) {
  if (targetNumber <= 0) {
      console.log(targetNumber);
      return;
  }
  console.log(targetNumber);
  printPattern(targetNumber - 5);
  console.log(targetNumber)
}

printPattern(10);