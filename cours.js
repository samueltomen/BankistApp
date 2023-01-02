'use strict';

// // FOR OF METHOD
// for (const movement of movements) {
//     if (movement > 0) {
//         console.log(`Vous avez déposer ${movement}`);
//     } else {
//         // Math.abs prend la valeur absolue retire le signe (-)
//         console.log(`Vous avez retirer ${Math.abs(movement)}`);
//     }
// }

// // FOR EACH METHOD
// // BREAK & CONTINUE impossible dans le forEach()
// movements.forEach(function (transaction, i, arr) {
//     transaction > 0
//         ? console.log(`Transaction ${i + 1} : Vous avez déposer ${transaction}`)
//         : console.log(
//               `Transaction ${i + 1} : Vous avez retirer ${Math.abs(
//                   transaction
//               )}`
//           );
// });

// CES 2 METHODE AFFICHES
// 0: function(200)
// 1: function(450)
// ....

// // SLICE
// // ==> Affiche ['b', 'c', 'd', 'e']
// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(1));

// // ==> Affiche ['e']
// console.log(arr.slice(-1));

// // ==> Affiche ['b','c']
// console.log(arr.slice(1,-2));

// // SPLICE
// // ==> Affiche : ['c', 'd', 'e']
// console.log(arr.splice(2));

// // ==> Affiche : ['a','b]
// console.log(arr);

// // ==> Affiche ['a']
// arr.splice(-1)
// console.log(arr);

// // REVERSE

// //  Affiche ==> ['n', 'm', 'l', 'k', 'j']
// let arr2 = ['j', 'k', 'l', 'm', 'n'];
// console.log(arr2.reverse());

// // CONCAT
// // Fonctionne de la même facon que le spread operator
// const letters = arr.concat(arr2)
// console.log(letters);
// console.log([...arr,...arr2]); //SAME

// // JOIN
// // ==> Affiche a - n - m - l - k - j
// console.log(letters.join(' - '));

// Coding Challenge #1

let juliaArr = [3, 5, 2, 12, 7];
let juliaArr2 = [3, 5, 2, 12, 7];
let kateArr = [4, 1, 15, 8, 3];
juliaArr2 = juliaArr2.slice(1, 4);
console.log(juliaArr2);
let arrBoth = juliaArr2.concat(kateArr);
console.log(arrBoth);

function checkDogs(arrDogs) {
    arrDogs.forEach(function (dogs, i) {
        const dogsAge =
            dogs >= 3
                ? console.log(
                      `Dog ${i + 1} is an adult, and is ${dogs} years old`
                  )
                : console.log(`Dog number ${i + 1} is still a puppy`);
    });
}

checkDogs(arrBoth);
