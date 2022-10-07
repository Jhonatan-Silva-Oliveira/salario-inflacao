import ReadLine from "readline-sync";
//importando readline pra interação com usuário.

//adicionando tabelas utilizadas 
//contendo dados dos salários mínimos e da inflação entre 2010 e 2020
const dados_salario = [
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

//inflação (%)
const dados_inflacao = [
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

//coletando opção escolhida
let opcao = Number(ReadLine.question("Digite o numero da sua escolha: "))

//coletando dados da tabela e separando em variáveis
//let ano = dados_salario[i].ano

//let IPCA = dados_inflacao[i].inflacao

//iniciando verificação e direcionando para resultado
switch (opcao) {
  
  //resultado caso opcao 1
  case 1: 
    console.log("\nResultado de salários mínimos de 2010 a 2020\n")
    
    for (let i = 0; i < dados_salario.length; i++) {
      let ano = dados_salario[i].ano
      let salario = dados_salario[i].salario;
      let valor_salario_formatado = salario.toFixed(2).replace(".",",");
      
      console.log("Ano: ".padEnd(30, '.') + ano);
      console.log("Salario mínimo: ".padEnd(30,'.') + "R$ " + valor_salario_formatado + "\n");
    }
  break;
  
  //resultado caso opcao 2
  case 2: 
    console.log("\nResultado do índice IPCA de 2010 a 2020\n")
    
    for (let i = 0; i < dados_inflacao.length; i++) {
      let ano = dados_salario[i].ano
      let IPCA = dados_inflacao[i].inflacao
      let valor_IPCA_formatado = IPCA.toFixed(2).replace(".",",");
      
      console.log("Ano: ".padEnd(30, '.') + ano)
      console.log("Inflação IPCA: ".padEnd(30,'.') + valor_IPCA_formatado + "%\n")
    }
  
  break;
  
  //resultado caso opcao 3
  case 3: 
    console.log("Comparação entre o percentual de aumento salarial e o IPCA")
    
    for (let i = 0; i < dados_salario.length; i++) {
      let ano = dados_salario[i].ano
      let salario = dados_salario[i].salario
      let valor_salario_formatado = salario.toFixed(2).replace(".",",");
      let IPCA = dados_inflacao[i].inflacao
      let valor_IPCA_formatado = IPCA.toFixed(2).replace(".",",");
      
      let diferenca = salario - 
      
      console.log("Ano: ".padEnd(30, '.') + ano)
      console.log("Salario mínimo: ".padEnd(30,'.') + "R$ " + valor_salario_formatado);
      console.log("Crescimento Salarial: ".padEnd(30,'.') + "-")
      console.log("Inflação IPCA: ".padEnd(30,'.') + valor_IPCA_formatado + "%\n")
    }
  
  break;
  
  //resultado caso opcao invalido
  default:
  console.log("\nOpção invalida!")
}