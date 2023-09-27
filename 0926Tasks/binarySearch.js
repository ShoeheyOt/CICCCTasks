// function binarySearch(arr, target) {
//   //.....
// }
// binarySearch([1,2,3,4,5,6,7,8], 3) //2
// binarySearch([1,2,3,4,5,6,7,8], 11) //-1
// binarySearch([1,2,3,4,5,6,7,8], 8) //7


function binarySearch (arr, target) {
  arr.sort(function(a, b) {
  return a - b;
  });  

  let left = 0;
  let right = arr.length - 1;
  let returnedIndex = -1;
  while ( left <= right ) {
    
    let middle = Math.floor ((left+right) / 2 );
    
    if ( arr[middle] == target) {
      returnedIndex = middle;
      break;
    } else if ( arr[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return returnedIndex;
}

console.log(binarySearch([1,2,3,4,5], 4))
console.log(binarySearch([1,2,3,4,5,6,7,8], 11));
console.log(binarySearch([1,2,3,4,5,6,7,8], 8));
console.log(binarySearch([2,8,4,6,3,5,2,4], 3));
