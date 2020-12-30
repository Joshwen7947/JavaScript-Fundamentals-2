let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

const BMImark = massMark / heightMark ** 2;
const BMIjohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMImark > BMIjohn;
console.log(markHigherBMI);

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMImark = massMark / heightMark ** 2;
const BMIjohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMImark > BMIjohn;

console.log(BMImark, BMIjohn, markHigherBMI);


const massJosh = 69;
const heightJosh = 1.93;
const massThao = 53;
const heightThao = 1.76;

const BMIjosh = massJosh / heightJosh ** 2;
const BMIthao = massThao / heightThao ** 2;
const joshHigherBMI = BMIjosh > BMIthao;

console.log(BMIjosh, BMIthao, joshHigherBMI);


const firstName = 'Josh';
const job = 'Teacher';
const birthYear = 1997;
const year = 2020;

const Josh = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';

console.log(Josh);

const joshNEW = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;

console.log(joshNEW);


const age = 15;

if (age >= 18) {
    console.log(`You can take the driver test now!`);
} else {
    const yearsLeft = 18 - age;
    console.log(`You are too young.  Please wait ${yearsLeft} years.`)
}

const birthYear = 1997;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);



const massJosh = 69;
const heightJosh = 1.93;
const massThao = 53;
const heightThao = 1.76;

const BMIjosh = massJosh / heightJosh ** 2;
const BMIthao = massThao / heightThao ** 2;


let answer;
if (BMIjosh > BMIthao) {
    answer = `Josh's BMI of (${BMIjosh}), is higher than Thao's BMI of (${BMIthao})`
} else {
    answer = `Thao's BMI of (${BMIthao}) is higher than Josh's BMI of (${BMIjosh})`
}

console.log(answer);


const inputYear = `1997`;
console.log(Number(inputYear));

console.log(Number(`josh`));
console.log(typeof NaN);

console.log(String(23));

//Coercion
console.log(`I am` + 23 + ` years old`);
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Josh'));

const money = 0;
if (money) {
    console.log(`Don't spend it all`);
} else {
    console.log(`you should get a job`);
}


const favorite = Number(prompt('What is your favorite number?'));
console.log(favorite);

if (favorite === 23) {
    console.log(`23 is an awesome number!`);
} else if (favorite === 7) {
    console.log(`7 is also a cool number`);
} else {
    console.log(`Your number sucks!`)
}

if (favorite !== 23) {
    console.log(`why not 23?`);
}

const hasDriverLicense = false; //A
const hasGoodVision = true; //B

console.log(hasDriverLicense && hasGoodVision); // and
console.log(hasGoodVision || hasDriverLicense); // or
console.log(!hasDriverLicense); //invert

const shouldDrive = hasDriverLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log(`I can drive the car`);
// } else if {
//     console.log(`Someone else should drive the car`);
// }

const isTired = false; // C
console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
    console.log(`I can drive`);
} else {
    console.log(`someone else should drive`);
}


const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log(`Dolphins win the Trophy!`);
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log(`Koalas win the Trophy!`)
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log(`Both win the trophy!`);
} else {
    console.log(`Nobody has won the trophy`);
}

