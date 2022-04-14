/* 
1. Define a function  maxOfTwoNumbers  that takes two 
numbers as arguments and returns the largest of them. 
Use the if-then-else construct available in Javascript. 
Do some googling to figure this out if you forget how 
conditionals work.
*/

maxOfTwoNumbers = (firstValue, secondValue) => {
    // ADD YOUR CODE HERE
    if (!isNaN(firstValue) && !isNaN(secondValue)) {
        if (firstValue < secondValue) {
            return secondValue;
        } else if (firstValue > secondValue) {
            return firstValue;
        } else if (firstValue = secondValue) {
            return firstValue;
        };
    } else {
        return 'input is NaN';
    }
  };
console.log(maxOfTwoNumbers(2,5))
console.log(maxOfTwoNumbers(6,3))
console.log(maxOfTwoNumbers(-3,-5))
console.log(maxOfTwoNumbers('tree', 'fee'))
  
//   /*
//   2. Define a function  maxOfThree  that takes three numbers as arguments and returns the largest of them.
//   */
  maxOfThree = (firstValue, secondValue, thirdValue) => {
    // ADD YOUR CODE HERE
    if (!isNaN(firstValue) && !isNaN(secondValue) && !isNaN(thirdValue)) {
        if ((firstValue < secondValue) && (thirdValue < secondValue)) {
            return secondValue; 
        } else if ((firstValue > secondValue) && (firstValue > thirdValue)) {
            return firstValue;
        } else if ((thirdValue > firstValue) && (thirdValue > secondValue)) {
            return thirdValue;
        } 
    } else {
        return 'input is NaN';
    }
  };

  console.log(maxOfThree(4, 10, 8))
  console.log(maxOfThree(30, 40, 59))
  console.log(maxOfThree(3, 70, 32))
  
//   /*
//   3. Write a function  isCharacterAVowel  that takes a character 
// (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
//   */
  isCharacterAVowel = (letter) => {
    // ADD YOUR CODE HERE
    if (isNaN(letter) && letter.length === 1) {
        if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
            return true;
        } else {
            return false;
        }
    } else {
        return 'input is invalid';
    }
  };
  
  console.log(isCharacterAVowel("i"))
  console.log(isCharacterAVowel("l"))
  console.log(isCharacterAVowel("3gdag"))
  console.log(isCharacterAVowel(1))

//   /*
//   4. Define a function  sumArray  and a function  multiplyArray  
// that sums and multiplies (respectively) all the numbers in an 
// array of numbers. For example,  sumArray([1,2,3,4])  should return 10, 
// and  multiplyArray([1,2,3,4])  should return 24.
//   */
  
  sumArray = (numbers) => {
    // ADD YOUR CODE HERE
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
  };

  console.log(sumArray([2, 4, 6, 8]));
  console.log(sumArray([4, 8, 10, 12]));

  multiplyArray = (numbers) => {
    let result = 1;
    for (let i = 0; i < numbers.length; i++){
        result = result * numbers[i];
    }
    return result;
  };

  console.log(multiplyArray([1,2,3,5]))
  console.log(multiplyArray([0,2,3,4]))
  
//   /*
//   5.Write a function that returns the number of arguments passed to the function when called.
//   */
  
function countArguments () {
    return arguments.length;
} 

console.log(countArguments('hello', 123, 'cheese', 456))
console.log(countArguments('my', 'name', 'is', 'joanne', 'tang'))



//   /*
//   6. Define a function  reverseString  that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
//   */
  
  reverseString = (str) => {
    // ADD YOUR CODE HERE
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
  };
  
  console.log(reverseString('happy yappy'));

//   /*
//   7. Write a function  findLongestWord  that takes an array of words and returns the length of the longest one.
//   */
  findLongestWord = (words) => {
    // ADD YOUR CODE HERE
    let longestWord = 0;
    for (let i = 0; i < words.length; i++) {
        longestWord = words[i].length;
    }
    return longestWord
  };
  
  console.log(findLongestWord(['cheese', 'nachos', 'fatal', 'ferocious']))
  console.log(findLongestWord(['the', 'you', 'extra']))



//   /*
//   8. Write a function  filterLongWords  that takes an array of words and a number  i  and returns the array of words that are longer than i characters long.
//   */
  filterLongWords = (words) => {
    // ADD YOUR CODE HERE
    let longWord = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 3) {
            longWord.push(words[i]);
        }
    }
    return longWord
  };

  console.log(filterLongWords(['he', 'shoe', 'purple', 'do']))
  console.log(filterLongWords(['dog', 'cat', 'squirrel', 'horse', 'rabbit']))


