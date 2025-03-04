// CodeWars ==> Kata 8 - solution //

//#region String-repeat
/* Link => https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript */
// function repeatStr(num, str) {
//     "========== with For Loop  ==============";
//     let myString = "";
//     for (let i = 0; i < num; i++) {
//         myString += str;

//     }
//     return myString;
//     "========== with repeat method ==============";
//     // return str.repeat(num);
// }
// console.log(repeatStr(5, "Hello "));
// console.log(repeatStr(3, "Yes "));
// console.log(repeatStr(7, "No "));

//#endregion

//#region Convert-number-to-reversed-array
/* Link => https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript */
// function digitize (num) {
//     return num.toString().split("").map((num) => +num).reverse();
// }
// console.log(digitize (35231));
//#endregion

//#region Counting sheep
/* Link => https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript */
// function countSheeps(sheep) {
//     let count = sheep.filter((sheep) => sheep === true).length;
//     return count;
// }

// console.log(countSheeps([true, true, true, false,
//     true, true, true, true,
//     true, false, true, false,
//     true, false, false, true,
//     true, true, true, true,
//     false, false, true, true]));
//#endregion

//#region  Get opposite
/* Link ==> https://www.codewars.com/kata/56dec885c54a926dcd001095/train/javascript */
// function opposite(number) {
//    return -number
// }
// console.log(opposite(1))
// console.log(opposite(14))
// console.log(opposite(13))
//#endregion

//#region  Returning negative
/* Link => https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript */
// function makeNegative(num) {
//    return num > 0 ? -num : num
//   }

// console.log(makeNegative(1))  ;
// console.log( makeNegative(-5)) ;
// console.log( makeNegative(0)) ;

//#endregion

//#region  Jenny's secret message
/* Link ==> https://www.codewars.com/kata/55225023e1be1ec8bc000390/train/javascript */

// function greet(name) {
//     if (name === "Johnny") return "Hello, my love!";
//     return "Hello, " + name + "!";
// }
// console.log(greet("Mohamed"));

//#endregion

//#region   A Needle In The HayStack

/* Link ==> https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript */

// function findNeedle(haystack) {
//     // let found = haystack.indexOf("needle");
//     // return `found the needle at position ${found}`;

//     "=====================================";
//     // for (let i = 0; i < haystack.length; i++) {
//     //     if (haystack[i] === "needle") {
//     //         return `found the needle at position ${i}`;
//     //     }
//     // }
//     "=====================================";
//     // let found = haystack.findIndex((ele) => ele === "needle");
//     // return `found the needle at position ${found}`;
// }
// console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));

//#endregion

//#region  Count-of-positives-sum-of-negatives
/* Link ==> https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript */
// function countPositivesSumNegatives(input) {
//      //  if (!input || input.length === 0) return [];
//     // let countPositive = [];
//     // let sumNegative = 0;
//     // for (let i = 0; i < input.length; i++) {
//     //     if (input[i] > 0) {
//     //         countPositive.push(input[i]);
//     //     } else {
//     //         sumNegative += input[i];
//     //     }

//     // }

//     // return [countPositive.length, sumNegative];

//     "============================================";
//     //     if (!input || input.length === 0) return [];
//     // let countPositive = input.filter((ele) => ele > 0).length;
//     // let sumNegative = input.filter((ele) => ele < 0).reduce((acc, current) => acc + current, 0);
//     // const result = [countPositive, sumNegative];
//     // return result;

// }

// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));


//#endregion

//#region Double Char
// function doubleChar(str) {
//     let double = str.split('').map(  (ele) => ele+ele ).join("")
//     return double
//   }
//   console.log(doubleChar("String")) // "String" ==> "SSttrriinngg"
//#endregion

//#region  Basic Mathematical Operations
// function basicOp(operation, value1, value2) {

//   // if (operation === "+") {
//   //   return value1 + value2;
//   // } else if (operation === "-") {
//   //  return value1 - value2;
//   // } else if (operation === "*") {
//   //  return value1 * value2;
//   // } else if (operation === "/") {
//   //   return value1 / value2;
//   // }
//   "=====================";
//   // return eval(value1 + operation + value2)
//   "=====================";
// //   switch (operation) {
// //     case "+": return value1 + value2;
// //     case "-": return value1 - value2;
// //     case "*": return value1 * value2;
// //     case "/": return value1 / value2;

// //     default: return "invalid operation";
// //   }

// // }
// // console.log(basicOp("+", 4, 7));
// // console.log(basicOp('-', 15, 18));
// // console.log(basicOp('*', 5, 5));
// // console.log(basicOp('/', 49, 7));

//#endregion


//#region To square(root) or not to square(root)
/* Link ==> https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/javascript */

// function squareOrSquareRoot(array) {
//   return array.map((ele)=> Number.isInteger(Math.sqrt(ele))  ? Math.sqrt(ele) : ele*ele);
// }
// console.log(squareOrSquareRoot([4,3,9,7,2,1]))

//#endregion

//#region Count by X

/* Link ==> https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript */
// function countBy(x, n) {
//   // let z = [];
//   // for (let i = 1; i <= n; i++) {
//   //   z.push(i * x);
//   // }
//   // return z;

// }

//#endregion

//#region  Remove String Spaces
/* Link ==> https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript */

// function noSpace(x) {
//   // return x.split(" ").join("");
//   "=====================================";
//   // return x.replaceAll(" " , "") ;
//   "=====================================";
//   // return x.replace(/\s/g, "");
// }
// console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));
// console.log(noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"));
// console.log(noSpace("8aaaaa dddd r     "));
//#endregion

//#region  Invert values
/* Link ==> https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript */
// function invert(array) {
//   // return array.map( (ele) => - ele );
//   "=====================================";
//   // const result = [];
//   // for (let i = 0; i < array.length; i++) {
//   //   result.push(- array[i]);
//   // }
//   // return result;
// }
// console.log(invert([1, 2, 3, 4, 5]));
// console.log(invert([1, -2, 3, -4, 5]));
// console.log(invert([]));

//#endregion

//#region Convert boolean values to strings 'Yes' or 'No'.
/* Link ==> https://www.codewars.com/kata/53369039d7ab3ac506000467/train/javascript */
// function boolToWord(bool) {
//   return bool ? "Yes" : "No";
// }
// console.log(boolToWord(true));
// console.log(boolToWord(false));
//#endregion

//#region Reversing Words in a String
// function reverse(string) {
//   //  return string.split(" ").reverse().join(" ")
//   "===================================";
//   // return string.split(" ").reduce((acc, curr) => curr + " " + acc);

// }
// console.log(reverse("Hello World"));
// console.log(reverse("Hi There."));

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"

//#endregion

//#region  Keep Hydrated
/* Link ==> https://www.codewars.com/kata/582cb0224e56e068d800003c/train/javascript */
// function litres(time) {
//   return Math.floor(time * 0.5);
// }
// console.log(litres(3));
// console.log(litres(6.7));
// console.log(litres(11.8));
//#endregion
