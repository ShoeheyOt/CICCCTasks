/* 01-----------------------Power---------------------------------------------------------------------
Write a function called power which accepts a base and an exponent.
The function should return the power of the base to the exponent.
This function should mimic the functionality of Math.pow()
        - do not worry about negative bases and exponents.
*/
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exponent){
    
    // write your code here - good luck!
    if (exponent === 0) {
        return 1;
    };
    if (exponent === 1) return base;
    return base *= power(base, exponent - 1);
    };

    console.log(power(3,1));

// function power(base, exponent){
//     if (exponent === 0) {
//         return 1
//     }

//     return power(base, exponent - 1) * base
// }



    // while (exponent > 0) {
    //     resultBase *= base;
    //     exponent--;
    // };
    // return resultBase;



/* 02-----------------------Flatten Nested Arrays---------------------------------------------------------------------
Write a recursive function called `flatten` that takes an array of nested arrays and returns a single
flat array containing all the elements from the nested arrays.
*/
// flatten([1, [2, 3], [4, [5, 6]]]); // Should return [1, 2, 3, 4, 5, 6]
// flatten([[], [1, 2, [3, 4]], [5]]); // Should return [1, 2, 3, 4, 5]
// flatten([[1, 2], [3, [4, 5]], 6]); // Should return [1, 2, 3, 4, 5, 6]

// function flatten(arr){
//     // write your code here - good luck!
//     const flatten = arr.flat(Infinity);
//     return flatten;

// }

function flatten(arr) {
    let result = [];

    function flat (result, array) {
        // write your own
        if (typeof array === "number" ) {
             result.push(array);
        } else {
            for (let i = 0; i < array.length; i++) {
                flat (result, array[i]) 
            }
        }
    }
    flat(result, arr);
    return result;
};

    
    


console.log(flatten([1, [2, 3], [4, [5, 6]]]));

module.exports = {
    power,
    flatten
};



