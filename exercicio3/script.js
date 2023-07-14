//parte 1

// const operacao1 = 5 > 20 && 5 < 2
//console.log(operacao1)

//const operacao2 = 5 === 5 || "5"
//console.log(operacao2)

//const operacao3 = 20 > 50
//console.log(!operacao3)

//const operacao4 = 20 > 50 || 50 > 60
//console.log(operacao4)


//parte2

let salarioFulano = 2000.00
let auxilioCreche = 45.50*2
let comissao = 0.1
let janeiro = 5784.50
let fevereiro = 3418.41
let marco = 4124.10
let abril = 1874.00
let maio = 7000.00
let junho = 9450.00
let descontoINSS = 0.05

//1 
console.log("O salário fixo mais o auxílio creche:", salarioFulano + auxilioCreche)

//2
console.log("Quanto Fulano de Silva receberá de comissão em janeiro:", janeiro*comissao)

//3
let janeiroMaisComissao = salarioFulano+(janeiro*comissao)
console.log("Quanto Fulano de Silva será descontado em janeiro pelo INSS:", janeiroMaisComissao*descontoINSS)
console.log(janeiroMaisComissao)

//4
let vendasMeses = janeiro+fevereiro+marco+abril+maio+junho
let salarioMeses = salarioFulano*6
let salarioMaisVendas = salarioMeses+vendasMeses
let comissaoSalarioTotal = salarioMaisVendas*comissao
let salarioTotalMaisComissao = comissaoSalarioTotal+salarioMeses
let descontoSalarioTotalInss = salarioTotalMaisComissao*descontoINSS
let salarioFinalMaisDesconto = salarioTotalMaisComissao-descontoSalarioTotalInss
let somaParaConsole = salarioFinalMaisDesconto+(auxilioCreche*6)
console.log("Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos:", somaParaConsole)

//5

console.log("a média salarial de Fulano da Silva é:", somaParaConsole/6)