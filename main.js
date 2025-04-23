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

//#region  Convert a Number to a String

/* Link ==> https://www.codewars.com/kata/5265326f5fda8eb1160004c8/train/javascript */

// function numberToString(num) {
//     "========== with string method ============"
//     //  return num.toString()
//     "========== with template literal ============"
//     // return `${num}`
//   }
// console.log( numberToString(123))
// console.log(numberToString(999  ))
// console.log(numberToString(-100 ))
//#endregion

//#region  Calculate average
/* Link ==> https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript */

// function findAverage(array) {
//     "========== with for loop ============";
//     // let sum = 0;
//     // for (let i = 0; i < array.length; i++) {
//     //     sum += array[i];
//     // }
//     // return sum / array.length;

//     "========== with higher order function [HOF] ============";
//     // if (array.length == 0) return 0;
//     // return array.reduce((acc, current) => acc + current, 0) / array.length;

// }
// console.log(findAverage([1, 2, 3, 4]));
//#endregion

//#region Convert a String to a Number
// Link ==> https://www.codewars.com/kata/544675c6f971f7399a000e79/train/javascript
// const stringToNumber = function (str) {
//     "=====================";
//     // return parseInt(str);
//     "=====================";
//     // return Number(str) ;
//     "=====================";
//     return +str;
// };
// console.log(stringToNumber("1234"));
//#endregion

//#region Count The Monkeys
// Link ==>  https://www.codewars.com/kata/56f69d9f9400f508fb000ba7/train/javascript
// function monkeyCount(n) {
//     "============= with for loop =================";
//     // const numbers = [];
//     // for (let i = 1; i <= n; i++) {
//     //     numbers.push(i);
//     // }
//     // return numbers;
//     "============= Array From =================";
//     // return Array.from({ length: n }, (_, i) => i + 1);

// }

// console.log(monkeyCount(10));
// console.log(monkeyCount(5));
// console.log(monkeyCount(1));
//#endregion

//#region Welcome
// Link ==>  https://www.codewars.com/kata/577ff15ad648a14b780000e7/train/javascript
// function greet(language) {
//     const languages = {
//         english: "Welcome",
//         czech: "Vitejte",
//         danish: "Velkomst",
//         dutch: "Welkom",
//         estonian: "Tere tulemast",
//         finnish: "Tervetuloa",
//         flemish: "Welgekomen",
//         french: "Bienvenue",
//         german: "Willkommen",
//         irish: "Failte",
//         italian: "Benvenuto",
//         latvian: "Gaidits",
//         lithuanian: "Laukiamas",
//         polish: "Witamy",
//         spanish: "Bienvenido",
//         swedish: "Valkommen",
//         welsh: "Croeso"
//     };

//     // if (languages.hasOwnProperty(language)) {
//     //     return languages[language];
//     // } else {
//     //     return languages.english;
//     // }

//     "=========== with For OF ===============";
//     // for (const [key, value] of Object.entries(languages)) {
//     //     if (language === "") {
//     //         return languages.english;
//     //     } else if (language === key) {
//     //         return value;
//     //     }
//     // }
// }
// console.log(greet("dutch"));
// console.log(greet("french"));
// console.log(greet(""));
//#endregion

//#region Sentence Smash
// Link ==> https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/javascript
// function smash(words) {
//     return words.join(" ").trim();
// };
// console.log(smash(['hello', 'world', 'this', 'is', 'great']));
//#endregion

//#region Switch It Up
// Link ==> https://www.codewars.com/kata/5808dcb8f0ed42ae34000031/train/javascript
// function switchItUp(number) {
//     switch (number) {
//         case 0: return "Zero";
//         case 1: return "One";
//         case 2: return "Two";
//         case 3: return "Three";
//         case 4: return "Four";
//         case 5: return "Five";
//         case 6: return "Six";
//         case 7: return "Seven";
//         case 8: return "Eight";
//         case 9: return "Nine";
//         default: return "inValid Number";
//     }
// }
// console.log(switchItUp(8));
//#endregion

//#region  Do I Get A Bonus
// Link ==> https://www.codewars.com/kata/56f6ad906b88de513f000d96/train/javascript
// function bonusTime(salary, bonus) {
//     return bonus ?`£${salary * 10}` : `£${salary}`;
// }

// console.log(bonusTime(8000, true));
// console.log(bonusTime(8000, false));
//#endregion

//#region Exclamation marks
// Link ==> https://www.codewars.com/kata/57fae964d80daa229d000126/train/javascript
// function remove(string) {
//     "========  by regular expression ============";
//     // return string.replace(/!$/, "");
//     "======== by endsWith / slice ============";
//     // return string.endsWith("!") ? string.slice(0, -1) : string;
// }
// console.log(remove("Hi!"));
// console.log(remove("Hi!!!"));
// console.log(remove("Hi! Hi!"));
//#endregion

//#region Are You Playing Banjo
// Link ==> https://www.codewars.com/kata/53af2b8861023f1d88000832/train/javascript
// function areYouPlayingBanjo(name) {
//     // return name[0] === "r" || name[0] === "R" ? name + " plays banjo" : name + " does not play banjo";
//     "================================================";
//     // return name[0].toLowerCase() === "r" ? name + " plays banjo" : name + " does not play banjo";
// }
// console.log(areYouPlayingBanjo("Ramy"));
//#endregion

//#region Removing Elements
// Link ==> https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript
// function removeEveryOther(arr) {
//     // let result = [];
//     // for (let i = 0; i < arr.length; i++) {
//     //     if (i % 2 == 0) {
//     //         result.push(arr[i]);
//     //     }
//     // }
//     // return result;
//     "===========================";
//     return arr.filter((_, index) => index % 2 == 0);

// }
// console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));
// console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));
//#endregion

//#region Unfinished Loop - Bug Fixing #1
// Link ==> https://www.codewars.com/kata/55c28f7304e3eaebef0000da/train/javascript
// function createArray(number) {
//     const newArray = [];
//     for (let counter = 1; counter <= number; counter++) {
//         newArray.push(counter);
//     }
//     return newArray;
// }
//#endregion

//#region Transportation on vacation

// Link ==> https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript
// function rentalCarCost(d) {
//     let price = 40 * d;
//     if (d < 3) return price;
//     if (d >= 7) {
//         return price - 50;
//     } else {
//         return price - 20;
//     }
// }

// console.log(rentalCarCost(d));
//#endregion

//#region  Exclusive Xor Operator
// Link ==>  https://www.codewars.com/kata/56fa3c5ce4d45d2a52001b3c/train/javascript
// function xor(a, b) {
//     return a === b ? false : true;
// }
// console.log(xor(false, true));
// console.log(xor(true, true));
// console.log(xor(false, false));
//#endregion

//#region Find the first non consecutive number
// Links ==> https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript
// function firstNonConsecutive(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] - 1  > arr[i - 1]) {
//             return arr[i];
//         }
//     }
//     return null;

// }
// console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));
//#endregion

//#region   Volume Of a Cubiod
// Link ==> https://www.codewars.com/kata/58261acb22be6e2ed800003a/train/javascript
// class Kata {
//     static getVolumeOfCuboid(length, width, height) {
//         return length * width * height;
//     }
// }
// console.log(Kata.getVolumeOfCuboid(10, 10, 10));

//#endregion

//#region Formatting To Decimal Places
// Link ==> https://www.codewars.com/kata/5641a03210e973055a00000d/train/javascript
// function twoDecimalPlaces(n) {
//     return +n.toFixed(2);
// }
// console.log(twoDecimalPlaces(5.5589));
// console.log(twoDecimalPlaces(-3.3424));
//#endregion

//#region  Dollar And Cents
// Link ==> https://www.codewars.com/kata/55902c5eaa8069a5b4000083/train/javascript

// function formatMoney(amount) {
//     return `$${amount.toFixed(2)}`;
// }
// console.log(formatMoney(39.99));
// console.log(formatMoney(3.1));
//#endregion

//#region Find The Position
// Link == > https://www.codewars.com/kata/5808e2006b65bff35500008f/train/javascript
// function position(letter) {
//     const lettersObject = {
//         a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10,
//         k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20,
//         u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
//     };
//     if (lettersObject.hasOwnProperty(letter)) {
//         return `Position of alphabet: ${lettersObject[letter]}`;
//     }

// }
// console.log(position("a"));
// console.log(position("z"));
//#endregion

//#region Opposites attract
// Link ==> https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
// function lovefunc(flower1, flower2) {
// //    if ((flower1%2==1 && flower2%2==0)||(flower1%2==0 && flower2%2==1)){
// //         return true
// //       }else{
// //          return false
// //       }

// }

// console.log(lovefunc(1, 4));
// console.log(lovefunc(2, 2));
//#endregion

//#region  No Zeros For Heros
// Link ==> https://www.codewars.com/kata/570a6a46455d08ff8d001002/train/javascript
// function noBoringZeros(n) {
//   return + n.toString().replace(/0+$/g , "")
//   }
//   console.log(noBoringZeros(1050  ))
//   console.log(noBoringZeros(1450   ))
//   console.log(noBoringZeros(-1050    ))
//   console.log(noBoringZeros(0    ))
//   console.log(noBoringZeros(-105     ))
//#endregion

//#region  Get The Mean Of An Array
// Link ==> https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript
// function getAverage(marks) {
//     if (marks.length == 0) return 0;
//     let  avg = marks.reduce( (acc, current) => acc + current , 0) / marks.length
//      return Math.ceil(avg)
// }
// console.log(getAverage([2.5, 2, 2.5, 22.5]));
//#endregion

//#region Vowel Remover
//Link =>  https://www.codewars.com/kata/5547929140907378f9000039/train/javascript
// function shortcut(string) {
//     // const vowel = ["a", "e", "i", "u", "o"];
//     // return string.split("").filter((char) => !vowel.includes(char)).join("");

//     "========== with Regex ===========";
//     return string.replace(/(a|e|i|u|o)/g, "");

// }
// console.log(shortcut("hello"));
// console.log(shortcut("codewars"));
// console.log(shortcut("goodbye"));
// console.log(shortcut("HELLO"));
//#endregion

//#region Remove Exclamation Marks
//Link ==>  https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript
// function removeExclamationMarks(s) {
//     // return s.replace(/!/g , "");
//     "===================================";
//     // return s.split("").filter((word) => !word.includes("!"));
// }
// console.log(removeExclamationMarks("Hello!!!"));
//#endregion

//#region Reversed Strings
// Link ==> https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript
// function solution(str) {
//     // let result = "";
//     // for (let i = str.length - 1; i >= 0; i--) {
//     //     result += str[i];
//     // }
//     // return result;
//     "==========================" ;
//     // return str.split("").reverse().join("");

// }
// console.log(solution("world"));
//#endregion

//#region Reduce but Grow
// // Link ==> https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript
// function grow(x) {
//     // let result = 1;
//     // for (let i = 0; i < x.length; i++) {
//     //     result *= x[i];

//     // }
//     // return result;
//     "====================================";
//     return x.reduce((acc, current) => acc * current);
// }
// console.log(grow([1, 2, 3, 4]));
//#endregion

//#region Is it a palindrome
//  Link ==>  https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript
// function isPalindrome(x) {
//     return x.toLowerCase() === x.toLowerCase().split("").reverse().join("");

// }
// console.log(isPalindrome("aba"));
// console.log(isPalindrome("hello"));
//#endregion

//#region Grasshopper - Summation
// Link ==> https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript
// var summation = function (num) {
//     return Array.from({ length: num }, (_, i) => i + 1).reduce((acc, current) => acc + current);
// };
// console.log(summation(8));
//#endregion

//#region  Printing Array elements with Comma delimiters
// Link ==> https://www.codewars.com/kata/56e2f59fb2ed128081001328/train/javascript
// function printArray(array) {
//    return array.join()
// }
// console.log(printArray(["h","o","l","a"])) // ==> "h,o,l,a"
//#endregion

//#region How Many Stairs Will Suzuki Climb
// Link ==> https://www.codewars.com/kata/56fc55cd1f5a93d68a001d4e/train/javascript
// stairs = [
//     [6737, 7244, 5776], // Sunday
//     [9826, 7057, 9247], // Monday
//     [5842, 5484, 6543], // Tuesday
//     [5153, 6832, 8274], // Wednesday
//     [7148, 6152, 5940], // Thursday
//     [8040, 9174, 7555], // Friday
//     [7682, 5252, 8793]  // Saturday
// ];
// function stairsIn20(s) {
//     let oneYearTotal = s.flat().reduce((sum, num) => sum + num, 0);
//     return oneYearTotal * 20;
// }

// console.log(stairsIn20(stairs));
//#endregion

//#region Remove First and Last Character
// Link ==> https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
// function removeChar(str){
//    return str.slice(1 , -1)

//    };
//    console.log(removeChar("Hello")) // ell
//#endregion

//#region Square(n) Sum
// Link ==> https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript
// function squareSum(numbers) {
//     return numbers.map((num) => Math.pow(num, 2)).reduce((acc, current) => acc + current, 0);
// }
// console.log(squareSum([0, 3, 4, 5])); // 50
// console.log(squareSum([1, 2, 2])); // 9
//#endregion

//#region Find the smallest integer in the array
// Link ==> https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript
// function findSmallestInt(arr) {
//     // return Math.min(...arr);
//     "==================================";
//     // return arr.reduce((acc, current) => acc < current ? acc : current);

// }
// console.log(findSmallestInt([34, 15, 88, 2]));
// console.log(findSmallestInt([34, -345, -1, 100]));
//#endregion

//#region Is n divisible by x and y
// Link ==> https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
// function isDivisible(n, x, y) {
//     // if (n % x == 0 && n % y == 0) {
//     //     return true;
//     // } else {
//     //     return false;
//     // }
//     "=======================";
//    return n % x == 0 && n % y == 0 ?true : false;
// }
// console.log(isDivisible(12, 3, 4));
// console.log(isDivisible(5, 3, 4));
//#endregion

//#region Beginner Lost Without a Map
// Link ==> https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript
// function maps(x) {
//     const result = [];
//     for (let i = 0; i < x.length; i++) {
//         result.push(x[i] + x[i]);
//     }
//     return result;
//     "=============================";
//     // return x.map( (num) => num + num )
// }
// console.log(maps([1, 2, 3]));
//#endregion

//#region Fake Binary
//Link ==> https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript
// function fakeBin(x){
//     return x.split("").map( (num) => num >= 5 ? 1 : 0).join("")
// }
// console.log(fakeBin('45385593107843568'))
//#endregion

//#region Sum Arrays
//Link ==> https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript
// function sum (numbers) {
//     if (numbers.length === 0) return 0 ;
//     return numbers.reduce( (acc , current) => acc + current , 0)
//   }
//   console.log(sum([1, 5.2, 4, 0, -1]))
//#endregion

//#region Simple multiplication
//Link ==> https://www.codewars.com/kata/583710ccaa6717322c000105/train/javascript
//     function simpleMultiplication(number) {
//       return number % 2 == 0 ? number * 8 : number * 9
//     }
// console.log(simpleMultiplication(2))  // 2*8 = 16
// console.log(simpleMultiplication(1))   // 1*9 = 9
// console.log(simpleMultiplication(8))   // 8*8 =64

//#endregion

//#region MakeUpperCase
//Link ==> https://www.codewars.com/kata/57a0556c7cb1f31ab3000ad7/train/javascript
// function makeUpperCase(str) {
//         return str.toUpperCase()
//   }
//   console.log(makeUpperCase ("hello")) // HELLO
//#endregion

//#region Array plus array
// //Link ==> https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript
// function arrayPlusArray(arr1, arr2) {
//     return   [...arr1 , ...arr2].reduce( (acc , current) => acc + current , 0 )
//   }
//   console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])) // 21
//#endregion

//#region  Sum Mixed Array
// Link ==> https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript
// function sumMix(x){
//     return x.map( (nums) => +nums ).reduce ( (acc , current) => acc + current , 0 )
// }
// console.log(sumMix([9, 3, '7', '3'])) // 22
// console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7] )) // 42
//#endregion

//#region  The Feast of Many Beasts
// Link ==> https://www.codewars.com/kata/5aa736a455f906981800360d/train/javascript
// function feast(beast, dish) {
//     return beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length-1] ? true : false
// }
//     console.log(feast("great blue heron", "garlic naan")) // true
//     console.log(feast("chickadee", "chocolate cake")) // true
//     console.log(feast("brown bear", "bear claw")) // false
//#endregion

//#region  Thinkful Logic Drills Traffic light
// Link ==> https://www.codewars.com/kata/58649884a1659ed6cb000072/train/javascript
//     function updateLight(current) {
// //   return current === "green" ? "yellow" : current === "yellow" ? "red" : current === "red" ? "green" : ""
// // if (current === "green") return "yellow"
// // if (current === "yellow") return "red"
// // if (current === "red") return "green"

// }
//       console.log(updateLight("green")) // yellow
//       console.log(updateLight("yellow")) // red
//       console.log(updateLight("red")) // green
//#endregion

//#region  L1 Set Alarm
// Link ==> https://www.codewars.com/kata/568dcc3c7f12767a62000038/train/javascript
// function setAlarm(employed, vacation){
//     return employed && !vacation
// }
// console.log(setAlarm (true , true)) // false
// console.log(setAlarm (false , true)) // false
// console.log(setAlarm (true , false)) // trues
//#endregion

//#region  Quarter of the year
// Link ==> https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/train/javascript
// const quarterOf = (month) => {
//     // switch (month) {
//     //     case 1: case 2: case 3:
//     //         return 1;
//     //     case 4: case 5: case 6:
//     //         return 2;
//     //     case 7: case 8: case 9:
//     //         return 3;
//     //     case 10: case 11: case 12:
//     //         return 4;
//     //     default: return "invalid"
//     // }
//     "==========================================";
//     // return month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4
//     "==========================================";
//     // return Math.ceil(month / 3);

// };
// console.log(quarterOf(3)); // 1
// console.log(quarterOf(8)); //3
// console.log(quarterOf(11)); // 4
// console.log(quarterOf(0)); // invalid
//#endregion

//#region AddLength
// Link ==> https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript
// function addLength(str) {
//    return str.split(" ").map( (ele)=> `${ele} ${ele.length}` )
// }
// console.log(addLength("apple ban")) ;
// console.log(addLength("you will win")) ;

//#endregion

//#region How many light sabers do you own
// Link ==> https://www.codewars.com/kata/51f9d93b4095e0a7200001b8/train/javascript

// function howManyLightsabersDoYouOwn(name) {
//     return name === "Zach" ? 18 : 0
//   }
//   console.log(howManyLightsabersDoYouOwn())
//   console.log(howManyLightsabersDoYouOwn("Adam"))
//   console.log(howManyLightsabersDoYouOwn("Zach"))
//#endregion

//#region  Twice as old
// Link ==> https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   return Math.abs ( dadYearsOld - (sonYearsOld * 2) )
// }
//   console.log(twiceAsOld(36, 7)) // 22
//   console.log(twiceAsOld(55,30)) // 5
//#endregion

//#region  Keep up the hoop
// Link ==> https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145/train/javascript
// function hoopCount (n) {
//   return n >=10 ? "Great, now move on to tricks" : "Keep at it until you get it"
//  }
//  console.log( hoopCount (3)) ;
//  console.log( hoopCount (11)) ;
//#endregion

//#region Character Recognition
// Link ==> https://www.codewars.com/kata/577bd026df78c19bca0002c0/train/javascript
// function correct(string) {
//     return string.split("").map((ele) =>
//         ele === "0" ? "O" : ele === "1" ? "I" : ele === "5" ? "S" : ele
//     ).join("");
// }
// console.log(correct("L0ND0N")); // LONDON
// console.log(correct("DUBL1N")); // DUBLIN
// console.log(correct("51NGAP0RE")); // S1NGAP0RE
//#endregion

//#region How good are you really?
// Link ==> https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript
// function betterThanAverage(classPoints, yourPoints) {
//    const classPoint_avg = classPoints.reduce( (acc , current) => acc + current , 0) / classPoints.length
//    return yourPoints >  classPoint_avg
// }
// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)) // true
// console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9)) // false

//#endregion

//#region Reversed Words
// Link ==> https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript
//     function reverseWords(str) {
//         return str.split(" ").map( (word) => word.split("").reverse().join("") ).join(" ")
// }
//       console.log(reverseWords("This is an example!")) // "sihT si na !elpmaxe"
//       console.log(reverseWords("double  spaces" )) // "elbuod  secaps"
//#endregion

//#region Calculate BMI
// Link ==> https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript

//bmi = weight / height^2
// function bmi(weight, height) {
//     const result = weight / Math.pow(height , 2) ;
//     if (result <=18.5) return "Underweight"
//     if (result <=25.0) return "Normal"
//     if (result <=30.0) return "Overweight"
//     if (result >30) return "Obese"
//   }
//   console.log(bmi(50, 1.80) ) // "Underweight"
//   console.log(bmi(80, 1.80) ) // "Normal"
//   console.log(bmi(90, 1.80) ) // "Overweight"
//   console.log(bmi(100, 1.80) ) // "Obese"

//#endregion

//#region Find numbers which are divisible by given number
// Link ==> https://www.codewars.com/kata/55edaba99da3a9c84000003b/train/javascript
// function divisibleBy(numbers, divisor){
//     return numbers.filter ( (num) => num % divisor === 0 ) ;
// }
// console.log(divisibleBy([1,2,3,4,5,6], 2)) // [2,4,6]
// console.log(divisibleBy([1,2,3,4,5,6], 3)) // [3,6]

//#endregion

//#region  Powers of 2
// Link ==> https://www.codewars.com/kata/57a083a57cb1f31db7000028/train/javascript
// function powersOfTwo(n) {
//     // var result = [];
//     // for (var i = 0; i <= n; i++) {
//     //   result.push(Math.pow(2, i));
//     // }
//     // return result;
//     "=============================";
//     //  return Array.from({ length: n + 1 }, (_, i) => 2 ** i);

// }
// console.log(powersOfTwo(0));
// console.log(powersOfTwo(1));
// console.log(powersOfTwo(2));
//#endregion

//#region  Sum The Strings
// Link ==> https://www.codewars.com/kata/5966e33c4e686b508700002d/train/javascript
// function sumStr(a,b) {
//     return (Number (a)  + Number (b)).toString()
// }
// console.log(sumStr("4","5")) // 9
// console.log(sumStr("5","5")) // 10
// console.log(sumStr("2","")) // 5
//#endregion

// //#region  Sort and Star
//     // Link ==> https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript
//     function twoSort(s) {
//         return s.sort()[0].split("").join("***")
//     }
//     console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]))
//     // 'b***i***t***c***o***i***n'

// //#endregion

//#region  Expressions Matter
// Link ==> https://www.codewars.com/kata/5ae62fcf252e66d44d00008e/train/javascript
// function expressionMatter(a, b, c) {
//     return Math.max(
//         a + b + c ,
//         a * b * c ,
//         a * ( b + c) ,
//         c * ( a + b) ,
//     )
//   }
//   console.log(expressionMatter(2, 1, 1)) // 4
//   console.log(expressionMatter(2, 1, 2)) // 6
//   console.log(expressionMatter(5, 1, 3)) // 6
//#endregion

//#region  Is it even
// Link ==> https://www.codewars.com/kata/555a67db74814aa4ee0001b5/train/javascript
// function testEven(n) {
//     return n % 2 == 0
// }
// console.log(testEven(0)) // true
// console.log(testEven(0.5)) // false
// console.log(testEven(-4)) // false
//#endregion

//#region  Filter out the geese
// Link ==> https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/train/javascript
// function gooseFilter(birds) {
//     var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//     // const result = []
//     // for (let i = 0; i < birds.length; i++) {
//     //     if (!geese.includes(birds[i])) {
//     //         result.push(birds[i])
//     //     }

//     // }
//     // return result
//     "================================";
//     return birds.filter((ele) => !geese.includes(ele));
// };
// console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])); // ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
//#endregion

//#region  What is between?
// Link ==> https://www.codewars.com/kata/55ecd718f46fba02e5000029/train/javascript
// function between(a, b) {
//     // const result = [] ;
//     // for (let i = a; i <= b; i++) {
//     //     result.push(i)
//     // }
//     // return result ;
//     "============================" ;
//     return Array(b - a + 1).fill(a).map ( (num , index) => num + index )
//   }
//   console.log(between(1, 4)) ;
//   console.log(between(-2, 2)) ;
//#endregion

//#region  Grasshopper - Debug sayHello
// Link ==> https://www.codewars.com/kata/5625618b1fe21ab49f00001f/train/javascript
// function sayHello(name) {
//     return `Hello, ${name}`
//   }
//   console.log(sayHello("Mohamed"))
//#endregion

//#region   Grasshopper Terminal game move function
// Link ==> https://www.codewars.com/kata/563a631f7cbbc236cf0000c2/train/javascript
// function move(position, roll) {
//     return (roll * 2) + position;
// }
// console.log(move(0, 4)); // 8
// console.log(move(3, 6)); // 8

//#endregion

//#region
// Link ==>
//#endregion

//#region  Grasshopper Messi goals function
// Link ==> https://www.codewars.com/kata/55f73be6e12baaa5900000d4/train/javascript
// function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//     return laLigaGoals + copaDelReyGoals + championsLeagueGoals
// }
// console.log(goals(0, 0, 0)) // 0
// console.log(goals(43, 10, 5)) // 58
//#endregion

//#region Stringy Strings
// Link ==>  https://www.codewars.com/kata/563b74ddd19a3ad462000054/train/javascript
// function stringy(size) {
// //   let result = "";
// //   for (let i = 1; i <= size; i++) {
// //     if (i % 2 === 0) {
// //       result += "0";
// //     } else {
// //       result += "1";
// //     }
// //   }
// //   return result;
// "=====================================" ;
// return Array.from ( {length : size} , (_ , index) => (index + 1) % 2 === 0 ? "0" : "1" ).join("")
// }

// console.log(stringy("12"));

//#endregion

//#region Find Multiples of a Number
// Link ==> https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript
// function findMultiples(integer, limit) {
//   let result = [];
//   for (let i = 1; i <= limit; i++) {
//     let multiply = integer * i;
//     if (multiply > limit) {
//       break ;
//     } else {
//         result.push (multiply)
//     }
//   }
//   return result;
// }
// console.log(findMultiples(1, 2));
// console.log(findMultiples(5, 25));
//#endregion

//#region Remove duplicates from list
// Link ==> https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/train/javascript
// function distinct(a) {
//   //  return Array.from (new Set (a))
//   "==================================";
//   // return a.filter((ele, index, arr) => index == arr.indexOf(ele));
//   "==================================";
// //   const unique = [];
// //   for (let i = 0; i < a.length; i++) {
// //     if (!unique.includes(a[i])) {
// //       unique.push(a[i]);
// //     }
// //   }
// //   return unique;
// }
// console.log(distinct([1, 2, 1, 1, 3, 2])); //  [1, 2, 3]

//#endregion

//#region Sum of Multiples
// Link ==> https://www.codewars.com/kata/57241e0f440cd279b5000829/train/javascript
// function sumMul(n, m) {
//     if (m <= 0) return "INVALID";
//     let sum = 0;
//     for (let i = n; i < m; i++) {
//       if (i % n === 0) {
//         sum += i;
//       }
//     }
//     return sum;
//   }

// console.log(sumMul(2, 9)); // 2 + 4 + 6 + 8 = 20
// console.log(sumMul(3, 13)); // 3 + 6 + 9 + 12 = 30

//#endregion

//#region Name on billboard
// Link ==> https://www.codewars.com/kata/570e8ec4127ad143660001fd/train/javascript
// function billboard(name, price = 30) {
//   // return name.length * price;
//   "=============================";
//   // ==> don't use " * " ;
// //   let result = 0;
// //   for (let i = 0; i < name.length; i++) {
// //     result += price;
// //   }
// //   return result;
// "=============================";
// // return name.split("").reduce( (acc , _) => acc + price   , 0 )

// }
// console.log(billboard("Jeong-Ho Aristotelis")); // chars 20 * default Price 30 = 600
// console.log(billboard("Hadufuns John", 20)); // chars 13 * Price 20 =  260

//#endregion

//#region  Welcome to the city
// Link ==> https://www.codewars.com/kata/5302d846be2a9189af0001e4/train/javascript
// function sayHello(name, city, state) {
//     return `Hello, ${name.join(" ")}! Welcome to ${city} , ${state}!`
// }
// console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'))
// // Hello, John Smith! Welcome to Phoenix, Arizona!
// console.log(sayHello(['Wallace','Russel','Osbourne'],'Albany','New York'))

//#endregion

//#region Remove First and Last Character Part Two
// Link ==> https://www.codewars.com/kata/570597e258b58f6edc00230d/train/javascript
// function array(string) {
//  return string.split(",").length < 3 ? null: string.split(",").slice(1, -1).join(" ");
// }
// console.log(array(""));
// console.log(array("1,2,3,4"));
// console.log(array("A1,B2,C3,D4,E5"));

//#endregion

//#region Lario and Muigi Pipe Problem
// Link ==> https://www.codewars.com/kata/56b29582461215098d00000f/train/javascript
// function pipeFix(numbers) {
//   const result = [];
//   for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
//     result.push(i);
//   }
//   return result;
// }
// console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]));

//#endregion

//#region Parse nice int from char problem
// Link ==> https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1/train/javascript
// function getAge(inputString) {
// //   return parseInt(inputString);
// return +inputString.match(/\d/)[0]

// }
// console.log(getAge("4 years old")); // 4
// console.log(getAge("9 years old")); // 9
//#endregion

//#region  Grasshopper - Check for factor
// Link ==> https://www.codewars.com/kata/55cbc3586671f6aa070000fb/train/javascript
// function checkForFactor(base, factor) {
//   return base % factor === 0;
// }
// console.log(checkForFactor(9, 2)); // false
// console.log(checkForFactor(10, 2)); // true

//#endregion

//#region Will there be enough space?

// Link ==>  https://www.codewars.com/kata/5875b200d520904a04000003/train/javascript
// function enough(cap, on, wait) {
//   const diff = cap - on;
//   if (diff >= wait) {
//     return 0;
//   } else {
//     return Math.abs (diff - wait);
//   }
// }
// console.log(enough(10, 5, 5)); // 0
// console.log(enough(100, 60, 50)); // 10
//#endregion

//#region Grasshopper - Personalized Message
// Link ==> https://www.codewars.com/kata/5772da22b89313a4d50012f7/train/javascript
// function greet(name, owner) {
//  return name === owner ? "Hello boss" : "Hello guest"
// }
// console.log(greet("Daniel", "Daniel")); // 'Hello boss'
// console.log(greet("Greg", "Daniel")); //  'Hello guest'
//#endregion

//#region Area or Perimeter

// Link ==> https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/javascript
// const areaOrPerimeter = function (l, w) {
//   return l === w ? l * w : (l + w) * 2;
// };
// console.log(areaOrPerimeter(3, 3)); // 9 square (l * W)
// console.log(areaOrPerimeter(6, 10)); // 32 rectangle (l + w) * 2
//#endregion

//#region Well of Ideas Easy Version
// Link ==> https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript ;
// function well(x) {
//   const filterArr = x.filter((idea) => idea === "good");
//   if (filterArr == 0) {
//     return "Fail";
//   } else if (filterArr.length <= 2) {
//     return "Publish";
//   } else {
//     return "I smell a series!";
//   }
// }
// console.log(well(["bad", "bad", "bad"])); // 'Fail!'
// console.log(well(["good", "bad", "bad", "bad", "bad"])); // 'Publish!'
// console.log(
//   well(["good", "bad", "bad", "bad", "bad", "good", "bad", "bad", "good"])
// ); // 'I smell a series!'
//#endregion

//#region Name Shuffler

// Link ==> https://www.codewars.com/kata/559ac78160f0be07c200005a/train/javascript
// function nameShuffler(str) {
//   //   return [str.split(" ")[1], str.split(" ")[0]].join(" ");
//   return str.split(" ").reverse().join(" ");
// }
// console.log(nameShuffler("john McClane")); // 'McClane john'
// console.log(nameShuffler("Mary jeggins")); // 'jeggins Mary'
//#endregion
