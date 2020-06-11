//aula sobre manipulação de variaveis
//var nome = "Nome do infeliz";
//var idade = 40;
//var idade2 = 10;
//var frase = "Frase de teste com origem"

//alert (idade+ idade2)

//alert ( "Nome:" + nome + " idade: " + idade + " idade2: " + idade2 + " = " + idade + idade2 );

//alert (`Nome:${nome}idade: ${idade}idade2:${idade2} = ${idade}${idade2}` );


//console.log(nome);
//console.log(idade);
//console.log(idade2);

//console.log(frase.replace("com","sem"));

//alert (frase.replace("origem","destino")+ ", mas sem origem");
//------------------------------------------------
//aula sobre array

//var lista = ["maça", "pera" , "laranja", "melancia", "limao"];
//console.log(lista);

//console.log(lista[0]);
//console.log(lista[1]);
//console.log(lista[2]);
//console.log(lista[3]);
//console.log(lista[4]);
//lista.pop();
//console.log(lista);
//lista.push("uva");
//console.log(lista);
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.sort());
//console.log(lista.shift());
//console.log(lista.toString());
//console.log(lista.join(" O\/O "))

//------------------------------
// Dicionário

//var fruta = { nome:"maçã",
//              cor:"vermelha" }

//console.log(fruta.cor,fruta.nome) 


//var frutas = [{ nome:"maçã", cor:"vermelha" }
//             ,{ nome:"laranja", cor:"laranja" }
//             ,{ nome:"limão", cor:"verde" }
//             ,{ nome:"uva", cor:"roxo" }
//             ,{ nome:"abacaxi", cor:"amarelo"}];

//console.log(frutas);

/*
// condicional
var idade = prompt("Qual sua idade?");

if (idade >= 18){
    console.log(idade);
    console.log("maior de idade");
} else {
    console.log(idade);
    console.log("menor de idade");
};
*/

/*
//lacos de repeticao
// while
var count = 0;

while (count <= 5){
    console.log(count);
    count = count +1;

};

//for

var contador;

for(contador=0;contador<=10;contador++) {

    console.log(contador);

};

*/

/*
var d = new Date();
console.log(d);
console.log(d.getDay());
console.log(d.getMonth());
console.log(d.getUTCFullYear());
console.log(d.getUTCHours());
console.log(d.getUTCMilliseconds());
console.log(d.getTime());
console.log(d.getTimezoneOffset());
console.log(d.getUTCDate());
console.log(d.);
*/
/*
function soma(n1,n2){
    return n1+n2

}
*/
/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
};

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    } else {
        validar = false
    }

    return validar;

}

alert(soma(5 , 10));
alert(setReplace("Vai Japao", "Japao", "Brasil"));

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
*/

function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!!!</b>"

//    alert("Clicou!");
}

function redirecionar(){
    window.open("https://google.com/"); 
    window.location.href = "https://gogle.com" ;
}

function trocar(elemento){
//    document.getElementById("mouseover").innerHTML = "<b>Obrigado por passar o mouse!!!</b>" 
    elemento.innerHTML = "Obrigado por passar o mouse!!!"
} 

function voltar(elemento){
//    document.getElementById("mouseover").innerHTML = "<b>Passe o mouse aqui!!!</b>" 
    elemento.innerHTML = "Passe o mouse aqui!!!!"
}