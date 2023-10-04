/* 01-----------------------Upvotes vs Downvotes---------------------------------------------------------------------
/*
    Given an object containing counts of both upvotes and downvotes,
    return what vote count should be displayed.
    This is calculated by subtracting the number of downvotes from upvotes.

    getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13
    getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31
    getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0

    You can expect only positive integers for vote counts.
*/
console.log("01----Upvotes vs Downvotes------");

function getVoteCount(votes) {
    // write your code here - good luck!    
    const resultNum = votes.upvotes - votes.downvotes;
    return resultNum;
}

console.log(getVoteCount({ upvotes: 13, downvotes: 0 }));
console.log(getVoteCount({ upvotes: 132, downvotes: 132 }));





/* 02-----------------------Word Endings---------------------------------------------------------------------
/*
    Create a function that adds a string ending to each member in an array.

    addEnding(["clever", "meek", "hurried", "nice"], "ly")
        ➞ ["cleverly", "meekly", "hurriedly", "nicely"]
    addEnding(["new", "pander", "scoop"], "er")
        ➞ ["newer", "panderer", "scooper"]
    addEnding(["bend", "sharpen", "mean"], "ing")
        ➞ ["bending", "sharpening", "meaning"]

    Don't forget to return the result.
*/
console.log("02----Word Endings------");
function addEnding(arr, ending) {
    // write your code here - good luck!
    const returnArr = [];
    for (let i = 0; i < arr.length; i++) {
        returnArr.push(arr[i] + ending);
    }
    return returnArr;
    // I want to use forEach...
};

console.log(addEnding(["clever", "meek", "hurried", "nice"], "ly"));


/* 03-----------------------Get Sum of People's Budget---------------------------------------------------------------------
/*
    Create the function that takes an array with
    objects and returns the sum of people's budgets.

    getBudgets([
        { name: "John", age: 21, budget: 23000 },
        { name: "Steve",  age: 32, budget: 40000 },
        { name: "Martin",  age: 16, budget: 2700 }
    ]) ➞ 65700

    getBudgets([
        { name: "John",  age: 21, budget: 29000 },
        { name: "Steve",  age: 32, budget: 32000 },
        { name: "Martin",  age: 16, budget: 1600 }
    ]) ➞ 62600

*/
console.log("03----get Budgets------");
function getBudgets(arr) {
    // write your code here - good luck!
    let returnBudgets = 0;
    for ( let i = 0; i < arr.length; i++) {
        returnBudgets += arr[i].budget;
    }
    return returnBudgets;
};

console.log(getBudgets([
    { name: "John",  age: 21, budget: 29000 },
    { name: "Steve",  age: 32, budget: 32000 },
    { name: "Martin",  age: 16, budget: 1600 }
]))

/* 04-----------------------How Many Vowels?---------------------------------------------------------------------
/*
    Create a function that takes a string and returns the number (count)
    of vowels contained within it.

    countVowels("Clarify") ➞ 2
    countVowels("Yolk") ➞ 1
    countVowels("Prediction") ➞ 4

    a, e, i, o, u are considered vowels (not y).
    All test cases are one word and only contain letters.
*/

function countVowels(str) {
    // write your code here - good luck!
    const vowel = 'AIUEOaiueo'
    let countVowel = 0;
    for (let i = 0; i < str.length; i++) {
        if ( vowel.indexOf(str[i]) !== -1) {
            countVowel ++;
        }
    }
    return countVowel;
};
console.log(countVowels("Clarify"));

/* 05-----------------------BONUS (Not mandatory): Converting Objects to Arrays---------------------------------------------------------------------
/*
    Write a function that converts an object into an array,
    where each element represents a key-value pair in the form of an array.

    toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
    toArray({ xcoords: 15, ycoords: 12 }) ➞ [["xcoords", 15], ["ycoords", 12]]
    toArray({}) ➞ []

    Return an empty array if the object is empty.
*/

function toArray(obj) {
    // write your code here - good luck!
    let returnArr = Object.entries(obj);
    return returnArr;

};

console.log(toArray({ a: 1, b: 2 }));


module.exports = {
    getVoteCount,
    addEnding,
    getBudgets,
    countVowels,
    toArray,
};