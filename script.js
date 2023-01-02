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

const displayMovements = function (movements) {
    // innerHTML est utilisé comme Setter il remplace tous le contenu par une chaine de charactere vide
    containerMovements.innerHTML = '';
    // .textContent = 0

    // For Each est le GETTER
    movements.forEach(function (mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal';
        const html = `<div class="movements__row">
        <div class="movements__type movements__type--${type}">${
            i + 1
        } ${type}</div>
        <div class="movements__value">${mov}</div>
      </div>
      `;
        // Ajoute le contenu html de la variable 'html' à chaque nouvelle entrée dans le tableau
        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
};

displayMovements(account1.movements);

const createUsernames = function (accs) {
    accs.forEach(function (acc) {
        acc.username = acc.owner
            .toLowerCase()
            .split(' ')
            .map((name) => name[0])
            .join('');
        console.log(acc.username);
    });
};
// createUsernames(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

// Déclare un tableau contenant différents mouvements d'argent
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Déclare un taux de conversion de l'euro en dollar
const eurToUsd = 1.07;

// Convertit chaque montant dans le tableau "movements" en dollar en utilisant la fonction "map"
const movementUSD1 = movements.map(function (mov) {
    return mov * eurToUsd;
});

// Convertit chaque montant dans le tableau "movements" en dollar en utilisant l'expression de fonction fléchée et la variable "eurToUsd"
const movementUSD2 = movements.map((mov) => mov * eurToUsd);

// Crée un tableau de chaînes de caractères décrivant chaque mouvement en utilisant la fonction "map" et en testant si le mouvement est positif ou négatif
const movementsDescriptions = movements.map((mov, i) => {
    if (mov > 0) {
        return `Mouvement ${i + 1}: Vous avez déposer ${mov}`;
    } else {
        return `Mouvement ${i + 1}: Vous avez retirer ${Math.abs(mov)}`;
    }
});

// Crée un tableau contenant uniquement les mouvements positifs du tableau "movements" en utilisant la fonction "filter"
const deposits = movements.filter(function (mov) {
    return mov > 0;
});

// Crée un tableau contenant uniquement les mouvements négatifs ou nuls du tableau "movements" en utilisant la fonction "filter"
const withdrawals = movements.filter(function (mov) {
    return mov <= 0;
});

// REDUCE METHOD //



