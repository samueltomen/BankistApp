'use strict';

// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

////////////////////////////////////////////////

// FOR OF METHOD
for (const movement of movements) {
    if (movement > 0) {
        console.log(`Vous avez déposer ${movement}`);
    } else {
        // Math.abs prend la valeur absolue retire le signe (-)
        console.log(`Vous avez retirer ${Math.abs(movement)}`);
    }
}

// FOR EACH METHOD
movements.forEach(function (transaction, i, arr) {
    transaction > 0
        ? console.log(`Transaction ${i + 1} : Vous avez déposer ${transaction}`)
        : console.log(
              `Transaction ${i + 1} : Vous avez retirer ${Math.abs(
                  transaction
              )}`
          );
});



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
