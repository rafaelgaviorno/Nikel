const nome = "Marcelo Eltz"
let nome2 = ""

let pessoaDefault = {
    Nome: "Marcelo Eltz",
    Idade: "33",
    Trabalho: "Programador"
}

let nomes = ["Marcelo Eltz","Maria Silva","Pedro Silva"];
let pessoas = [
    {   
        Nome: "Marcelo Eltz",
        Idade: "33",
        Trabalho: "Programador"

},
{
    Nome: "Maria Silva",
    Idade: "25",
    Trabalho: "UX/UI Designer"
}

];


function AlterarNome(){
    nome2 = "Maria Silva";
    console.log("Valor alterado:");
    console.log(nome2);
}
   

function RecebeEalteraNome(NovoNome){
    nome2 = NovoNome;
    console.log("Valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa){
    console.log(pessoa)

    console.log("Nome:");
    console.log(pessoa.Nome);
    
    console.log("Idade:");
    console.log(pessoa.Idade);
    
    console.log("Trabalho:");
    console.log(pessoa.Trabalho);
}

function adicionarPessoa(pessoa){
    pessoas.push(pessoa);

}

function imprimirPessoas(){
    console.log("--------IMPRIMIR PESSOAS-------");
    pessoas.forEach((item) => {
        console.log("Nome:");
    console.log(item.Nome);
    
    console.log("Idade:");
    console.log(item.Idade);
    
    console.log("Trabalho:");
    console.log(item.Trabalho);
    })
}

imprimirPessoas();


adicionarPessoa({
    Nome: "Pedro Silva",
    Idade: "28",
    Trabalho: "Porteiro"

});

imprimirPessoas();



//console.log(nomes);

//imprimirPessoa(pessoaDefault);

//imprimirPessoa({
  //  Nome: "Maria Silva",
    //Idade: "25",
    //Trabalho: "UX/UI"
//})

//RecebeEalteraNome("João Silva Pereira");
//RecebeEalteraNome("Maria Silva");
   









