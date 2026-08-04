// 1. Importar a bibliotecapara ler dados do terminal
const entrada = require('readline-sync');

console.log("----------------------");
console.log("  CALCULADORA DE IMC  ");
console.log("----------------------\n");

// 2. coletar dados (entrada)
const nome = entrada.question("Qual o seu nome? ");
const peso = entrada.question("Qual o seu peso? (ex: 70.5) ");
const altura = entrada.question("Qual  sua altura? (ex: 1.75) ");

// 3. cálculo do IMC (processamento)
// a fórmula é: peso dividido por (altura vezes altura)
const imc = peso / (altura * altura);

// 4. Exibição do resultado (saida)
console.log("\n---------------------------");
console.log(`Olá, ${nome}!`);
console.log(`Seu peso: ${peso} kg`);
console.log(`sua altura: ${altura} m`);

// 5. O .toFixed(2) faz aparecer apenas 2 números após o ponto
console.log(`Seu IMC calculado é: ${imc.toFixed(2)}`);
console.log("------------------------------")