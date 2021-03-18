console.log(process.argv);

// solo gli argomenti passati
console.log('Solo argomenti passati:');
const arguments = process.argv;
for(let i = 2; i < arguments.length; i++) {
    console.log(arguments[i]);
}


//somma degli argomenti
console.log('Somma degli argomenti:');
let sum = 0;
for(let i = 2; i < arguments.length; i++) {
    sum += Number(arguments[i]);
}
console.log(sum);

//solo argomenti pari
console.log('Argomenti pari:');
for(let i = 2; i < arguments.length; i++) {
    if(+arguments[i] % 2 === 0) {
        console.log(arguments[i]);
    }
}

// soluzione più elegante
console.log('SOLUZIONE PIU\' ELEGANTE');
// salvo in partenza la porzione dell'array che mi interessa, già convertiti in numer;
let arguments1 = process.argv.slice(2);
arguments1 = arguments1.map((arg) => {
    return Number(arg);
});

console.log('Solo gli argomenti passati:');
for (let arg of arguments1) {
    console.log(arg);
}

sum = arguments1.reduce((total, current) => {
    return total + current;
}, 0);
console.log('Somma degli argomenti: ', sum);

console.log('Solo argomenti pari:');
const evenArguments = arguments1.filter((arg) => arg % 2 === 0);
for (let arg of evenArguments) {
    console.log(arg);
}