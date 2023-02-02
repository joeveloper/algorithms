//     console.log('hello world');

//     const sumUp = (a) => {
//         console.log(a * a)
//     }

//     let start = 0;
//     let end = 0;


//     start = performance.now()
//     sumUp(3999983893)
//     end = performance.now()
//     console.log(end - start)

// const sumUp = (num) => {
//         let result = 0;
//         for (let i = 0; i <= num; i++ ) {
//                  result += i;
//             }
//             return result;
//     }

//     start = performance.now();
//     sumUp(999999999);
//     end = performance.now();
//     console.log(end - start);

// const revStr = (word) => {
//     let result = "";
//     for (let i = word.length  - 1; i >= 0; i--) {
//         result += word[i];
//     }
//     return console.log(result)
// }

// revStr("adeyinka");

// algorithm the calculates the sum  of an array

// console.log('hello')

// function sumArray(arr) {
//     let result = 0;
//     for (let i = 0; i <= arr[i]; i++) {
//         result += arr[i]
//     }
//     return result;
// }

// console.log(sumArray([2,3,5]))

// const sumArray = (array) => {
//     let result = 0
//     for (const num of array) {
//         result += num
//     }
//     return result
// }

// console.log(sumArray([2,3,5]))


// FIBONACCI SEQUENCE
// const fibo = (num) => {
//     let fib =[0,1];
//     for (let i = 2; i < num; i++) {
//         fib[i] = fib[i - 1] + fib[i - 2];
//     }
//     return fib

// }

// console.log(fibo(10));

// FACTORIAL OF A NUMBER
// function factorial(n) {
//     let result = 1;
//     for (let i = n; i >=1 ; i--) {
//         result *= i
//     }
//     return result
// }

// console.log(factorial(5));

// PRIME NUMBER
// function primeNum(n) {
//     if (n < 2) {
//         return false
//     } 
//     for(let i = 2; i<n; i++) {
//         if(n%2 === 0) {
//             return false
//         }
//     }
//     return true;
// }

// console.log(primeNum(6))

// POWER OF TWO
// function ispowerOfTwo(n) {
//    if ( n < 1) {
//     return false;
//    }
//    while(n > 2) {
//     if (n%2 !== 0) {
//         return false;
//     }
//     n /= 2;
//    } 
//    return true
// }

// console.log(ispowerOfTwo(9))

// RECURSIVE FIBONACCI SERIES
// function recursiveFibonacci(n) {
//     if (n < 2) {
//         return n
//     }
//     return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
// }

// console.log(recursiveFibonacci(7));

// RECURSIVE FACTORIAL
// function recurFactorial(n) {
//     if (n === 0) {
//         return 1
//     }
//     return n * recurFactorial(n-1);
// }


// console.log(recurFactorial(5));

// LINEAR SEARCH
// const linearSearch = (arr, target) => {
//     for(let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             return i
//         }
//     }
//     return -1
// }

// console.log(linearSearch([2,3,4,5,6,7,9], 10))
// console.log(linearSearch([2,3,4,5,6,7,9], 5))

// BINARY SEARCH
// function binarySearch(arr, target) {
//     let leftIndex =0;
//     let rightIndex = arr.length - 1;

//     while (leftIndex <= rightIndex) {
//         let middleIndex = Math.floor(leftIndex + rightIndex / 2)
//         if (target === arr[middleIndex]) {
//             return middleIndex;
//         }
//         if (target < middleIndex) {
//             rightIndex = middleIndex - 1
//         } else {
//             leftIndex = middleIndex
//         }
//     }
//     return -1

// }

// console.log(binarySearch([2,3,4,5,6,7,9], 10));
// console.log(binarySearch([2,3,4,5,6,7,9], 5));

// QUICK SORT
// function quickSort(arr) {
//     if (arr.length < 2) {
//         return arr
//     }
//     let pivot = arr[arr.length - 1];
//     let left = [];
//     let right = [];
//     for (let i = 0; i < arr.length -1; i ++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i])
//         } else {
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left), pivot, quickSort(right)]
// }

// console.log(quickSort([2,3,4,5,6,7,9]));

// function sumPrimes(num) {
  
//     if (num < 2) {
//       return false;
//     }
//   for (let i = 2; i <= num; i++) {
//     console.log(i)
//     if (i%2 === 0) {
//         return
//     }
//   }
  
  
//   }

  
//   console.log(sumPrimes(10));

// function aVeryBigSum(ar) {
//     let sum = 0;
//     for (let i = 0; i <= ar.length -1; i++) {
//         sum += ar[i]
//     }
//     return sum

// }

// const ar = [3,4,5,6]
// console.log(aVeryBigSum(ar));


//SORT AN ARRAY AND DIVIDE BY NATURE OF ELEMENTS---PLUSMINUS ALGORITH
// function plusMinus(arr) {
//     // Write your code here
//     let positive = [];
//     let negative = [];
//     let zeros =[]
//     let positiveSum;
//     let negativeSum;
//     let zeroSum;

    
//     for (let i = 0; i <= arr.length - 1; i++) {
//         console.log(arr[i])
//         if (arr[i] === 0){
//             zeros.push(arr[i])
//         }
//         if (arr[i] < 0) {
//             negative.push(arr[i])
//         } 
//         if (arr[i]>0) {
//             positive.push(arr[i])
//         }
//     }
    // console.log(negative);
    // console.log(positive);
    // console.log(zeros)
//     console.log(positiveSum = (positive.length / arr.length));
//     console.log(negativeSum = (negative.length / arr.length));
//     console.log(zeroSum = (zeros.length / arr.length));
// }

// const arr = [-2,4,5,-2,0,4,0]
// console.log(plusMinus(arr))

//MINI MAX SUM OF ARRAY
// function miniMaxSum(arr) {
//     // Write your code here
//     let ar1 = 0;
//     let ar2 = 0;
//     let ar3 = 0;
//     let ar4 = 0;
//     let final = []
//     for (i = 0; i <= arr.length; i++) {
//         ar1 = arr[0] + arr[1] + arr[2] + arr[3]
//         ar2 = arr[1] + arr[2] + arr[3] + arr[4]
//         ar3 = arr[0] + arr[1] + arr[3] + arr[4]
//         ar4 = arr[0] + arr[1] + arr[2] + arr[4]
//     }
//     final =[ar1, ar2, ar3, ar4];
//     console.log(Math.min(...final));
//     console.log(Math.max(...final));
   
// }

// console.log(miniMaxSum([2,3,4,5,6]))


//DIAGONAL DIFFERENCE
// function diagonalDifference(arr) {
//     // Write your code here
//     let dl = 0;
//     let dr = 0;
//     let diff = 0;
//     for (let i = 0; i <= arr.length; i ++) {
//         for (let j = 0; j <=  [i].length; j++) {           
//             dl = arr[0][0] + arr[1][1] + arr[2][2];
//             // console.log(dl) 
//             // dl.push(arr[i][j]);
//             dr = arr[2][2] + arr[2][1] + arr[2][0];
//             // console.log(dr)
//             // diff = dl - dr;
//         }
//         diff = dl - dr;
        
//     }
//     console.log(diff)
    
// }

// const arr = [
//     [1,2,3],
//     [2,3,4],
//     [3,4,5]
// ]
// console.log(diagonalDifference(arr))

//BREAKING THE RECORD

// function breakRecord(arr) {
//     let base = arr[0];
//     let top = 0
//     let min = 0;
//     let max = 0;
//     let ans = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < base) {
//             base = arr[i]
//             min +=1   
//         } 
//         if (arr[i] > arr[i-1]) {
//             top = arr[i]
//             max +=1
//         }
//     }
//     return ans = [max, min]
// }

// const arr = [3,4,2,6,7,1];
// console.log(breakRecord(arr))


//BILL DIVISION
// function billDivision(bill, k, b) {
//     let newBill = [];
//     let split = 0
//     let totalBill = 0
//     let message;
//     for (let i = 0; i < bill.length; i++) {
//         if (i === k) {
//             k = bill[i]
//         }
//         if (bill[i] !== bill[k]) {
//             newBill.push(bill[i])
//         } 
//     }
//     for (let j = 0; j < newBill.length; j++) {
//         totalBill += newBill[j]
//         // console.log(totalBill)
//     }
//     split = Math.abs(totalBill / 2)
//     if (b >= split) {
//         message = Math.round(b - split)
//     } else {
//          message = "Bon Apetite"
//     }
    

    //     totalBill = Math.abs(split / 2)
    //     if (b > totalBill){
    //         message = Math.abs(b - totalBill)
    //     } else {
    //         message = "Bon Apetite"
    //     }
    
//     return message;
// }


// // const arr = ([3,4,2], 4);
// console.log(billDivision([3,4,2], 2, 1)


// function simpleArraySum(ar) {
//     let result = 0;
//     for (let i = 0; i < ar.length; i++){
//         result = result + ar[i]
//     }
//     return result
       
// }

// console.log(simpleArraySum([23,1,4,65,12]));
// console.log(simpleArraySum([1,2,3,4,5,6,7,8,9,9,11,22,33,44,55]));

// function vowelsAndConsonants(s) {
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     let consonants = 'bcdfghjklmnpqrstvwxyz'.split('')
//     // let arraySplit = s.split('');
//     // let vowelDisplay = []
//     // let consonants = []
//     for (let i = 0; i < s.length; i++) {
//         for (let j = 0; j < vowels.length; j++) {
//             if (s[i] == vowels[j]) {
//                 console.log(s[i])
//             } 
//         }
//     }
    

//     for (let i = 0; i < s.length; i++) {
//         for (let j = 0; j < consonants.length; j++) {
//             if (s[i] == consonants[j]) {
//                 console.log(s[i])
//             } 
//         }
//     }
// }
  

// console.log(vowelsAndConsonants('javascriptloop'))

// function multiples(n) {
//     let result = 0;
//     for (let i = 0; i < n; i++ ) {
//         if (i%3 == 0 || i%5 ==0) {
//             result += i
//         }
//     }
//    return result
// }

// console.log(multiples(10))


// function missingNumbers(arr, brr) {
//     // Write your code here
//     let newArray = []
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < brr.length; j++) {
//             if (arr[i] === brr[j]) {
//                 newArray.push(arr[i])
//             }
//         }
//     }

// }

// console.log(missingNumbers([1,2,3],[1,1,2,2,4]))

// const person = {age: 23}
// console.log(person["age"])

// function joinFirstLastName(person) {
//     const firstName = person.firstName;
//     const lastName = person.lastName;
//     return firstName + '-' + lastName;
//   }
  
//   joinFirstLastName(person); // "Nick-Anderson"

// function getIndexToIns(arr, num) {
//     let indexPosition;
//         arr.sort(function(a,b) {
//             return a - b;
//         });
//     for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > num) {
//         arr[i+1] = num
//         }
//     }
//     indexPosition = arr.indexOf(num)
//     return indexPosition;
//   }

// function getIndexToIns(arr, num) {
//     arr.sort(function(a,b) {
//       return a - b;
//     });

//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] >= num) {
//         return i;
//       }
//     }
   
//     return arr.length;
//   };
  
//   console.log(getIndexToIns([20, 40, 60], 80));

// function findLongestWordLength(str) {
//     str = str.split(" ");
//    let size = 0
//    for ( let i = 0; i < str.length; i++) {
//      if (str[i].length > size) {
//        size = str[i].length;
//      }
//    }
//    return size
//  }
 
//  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

// function largestOfFour(arr) {
//     let resArr = [];
    
//     for (let i = 0; i< arr.length; i++) {
//         let resnum = 0
//       for (let j = 0; j < arr[i].length; j++) {
//         if (arr[i][j] > resnum) {
//           resnum = arr[i][j]
//         }
//       }
//       resArr.push(resnum)
//     }
//     return resArr;
//   }
  
//   console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));

// function findElement(arr, func = (arr)=> {
//     if (arr[i]%2 ===0) {
//       return arr[i]
//     } else {
//       return  undefined
//     }
//  }) 
//  {
//    let num;
//    let final = [];
//    for (let i = 0; i < arr.length; i++) {
//      if (arr[i] %2 ===0) {
//        final.push(arr[i])
//      }
     
//    }
//    num = final[0]
//  return num;
// }

// console.log(findElement([1, 1, 3, 7], num => num % 2 === 0));

// function titleCase(str) {
//     word = str.split(" ");
//     for (let i = 0; i < word.length; i++) {
//       word[i] = word[i][0].toUpperCase() + word[i].substr(1)
//     }
//     // word.join()
//     return word.join(' ');
//   }
  
//   console.log(titleCase("I'm a little tea pot"));

// function frankenSplice(arr1, arr2, n) {
//     for (let i = 0; i < arr1.length; i++) {
//         arr2.splice(n, , arr1[i]).push(arr1[i])
//     //   arr2.insert(n, arr1[i])
//     }
//     arr2.join()
//     return arr2;
//   }
  
//   console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

// function confirmEnding(str, target) {
//     str = str.toLowerCase()
//     for (let i = str.length-1; i >= 0; i--) {
//       if (str.substr(-str[target.length]) == target) {
//         return true
//       } else {
//         return false
//       }
//     }
//   }
  
//   console.log(confirmEnding("Bastian", "n"));

// function sumAll(arr) {
//   let sum = 0
//   let newArr = []
//   let num = 0
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= num) {
//       num = arr[i]
//       newArr.push(num)
//     }
    
//   }
//   console.log(newArr)
//   console.log(newArr[newArr.length-1])
//   for (let j = newArr[0]; j <= newArr[newArr.length-1]; j++) {
//     sum += j
//   }
//   return sum;
// }

// console.log(sumAll([4, 1]));

// function utopianTree(n) {
//     // Write your code here
//     let result = 1;
//     for (let i = 0; i < n; i++) {
//       if (i%2 === 0){
//       result*= 2;
//       } else {
//       result+= 1
//     }
//   }
//     return result
// }

// console.log(utopianTree(1))

// function getTotalX(a, b) {
//     // Write your code here
    
//     let counter = 0;
//     a.sort();
//     b.sort();
//     // console.log(a[0], (b[b.length-1]))
//     for (let i = a[0]; i < b[0]; i++) {
//       let n = i
//       for (let j = 0; j < b.length; j++) {
//         if ((a.every(e=>n%e==0) && b.every(e=>e%n==0))) {
//           // console.log(n)
//           counter++
//         }
//       }
//     }
//     return counter;

// }

// console.log(getTotalX([2,4], [16,32,96]))

// function sumAll(arr) {
//   let sum = 0;
//   arr.sort((a,b)=> a-b);
//   for (let i = arr[0]; i<=arr[arr.length-1]; i++) {
//     sum+=i
//   }
//   return sum
// }

// console.log(sumAll([10,5]))

function findDigits(n) {
    // Write your code here
  const numsArr = Array.from(String(n), Number);
    let counter = 0;
    for (let i = 0; i<=numsArr.length; i++) {
        if(n%numsArr[i]===0) {
          counter++
        } else {
          counter=counter
        }
    }
    return counter

}

console.log(findDigits(124))