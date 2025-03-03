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

//     // let countPositive = input.filter((ele) => ele > 0).length;
//     // let sumNegative = input.filter((ele) => ele < 0).reduce((acc, current) => acc + current, 0);
//     // const result = [countPositive, sumNegative];
//     // return result;

// }

// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));


//#endregion
