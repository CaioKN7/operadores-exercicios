

const primeiroNumero = +prompt ("Me envie um número qualquer, por favor")
const segundoNumero = +prompt ("Agora me envie outro número diferente do primeiro")

console.log("O primeiro número é maior que o segundo?", primeiroNumero > segundoNumero)
console.log("O primeiro número e segundo são iguais?", primeiroNumero === segundoNumero)
console.log("O primeiro numero é divisível pelo segundo?", primeiroNumero % segundoNumero === 0)
console.log("O segundo numero é divisível pelo primeiro?", segundoNumero % primeiroNumero === 0)