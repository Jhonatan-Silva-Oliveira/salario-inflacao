import ReadLine from "readline-sync";
//importando readline pra interação com usuário.

//adicionando tabelas utilizadas 
//contendo dados dos salários mínimos e da inflação entre 2010 e 2020
const salarioMinimo = [
  {salario: 510, ano: 2010},
  {salario: 545, ano: 2011},
  {salario: 622, ano: 2012},
  {salario: 678, ano: 2013},
  {salario: 724, ano: 2014},
  {salario: 788, ano: 2015},
  {salario: 880, ano: 2016},
  {salario: 937, ano: 2017},
  {salario: 954, ano: 2018},
  {salario: 998, ano: 2019},
  {salario: 1045, ano: 2020},
]

//inflacao (%)
const inflacaoIPCA = [
  {inflacao: 5.91, ano: 2010},
  {inflacao: 6.50, ano: 2011},
  {inflacao: 5.84, ano: 2012},
  {inflacao: 5.91, ano: 2013},
  {inflacao: 6.41, ano: 2014},
  {inflacao: 10.67, ano: 2015},
  {inflacao: 6.29, ano: 2016},
  {inflacao: 2.95, ano: 2017},
  {inflacao: 3.75, ano: 2018},
  {inflacao: 4.31, ano: 2019},
  {inflacao: 4.52, ano: 2020},
]

//mostrando opções de escolha da aplicação
console.log("\nEscolha uma das alternativas: \n\n");

console.log("1 - Listar os salários mínimo de 2010 à 2020\n");
console.log("2 - Listar o índice IPCA de 2010 à 2020\n");
console.log("3 - Comparando entre o percentual de aumento salarial e o IPCA\n\n")

let opcao = ReadLine.question("Digite o numero da sua escolha: ")

switch (opcao) {
  
  case 1: 
    console.log("opcao 1")
  break;
  case 2: 
  
  break;
  
  case 3: 
  
  break;
  
  default:
}