let preçoComida = null;
let preçoSobremesa = null;
let preçoBebida = null;
let selecionadoComida;
let selecionadoBebida;
let selecionadoSobremesa;
let nomeComida = "";
let nomeBebida = "";
let nomeSobremesa = "";
let valorTotal = null;
let escrito = "";


//let numero = prompt("Qual o seu número do whatsaap? (Não coloque o 0 na frente do DDD; ex: 48123451234");
//let nome = promp("Qual o seu nome?");


function escolherPrato (comida){
    selecionadoComida= document.querySelector(".selecionado-comida");

 
    if(selecionadoComida !== null){
      selecionadoComida.classList.remove("selecionado-comida");
        
    }
    comida.classList.add("selecionado-comida");
    preçoC = document
    .querySelector(".selecionado-comida")
    .querySelector("span").innerHTML;
    preçoComida = Number(preçoC);
    nomeComida = document
    .querySelector(".selecionado-comida")
    .querySelector("p3").innerHTML;
    console.log(preçoComida);
    console.log(nomeComida);
    botaoVerde();
    
}

function escolherBebida (bebida){
    
    selecionadoBebida = document.querySelector(".selecionado-bebida");
    


    if(selecionadoBebida !== null){
        selecionadoBebida.classList.remove("selecionado-bebida");
        
    }
    bebida.classList.add("selecionado-bebida");
    preçoB = document
    .querySelector(".selecionado-bebida")
    .querySelector("span").innerHTML;
    nomeBebida = document
    .querySelector(".selecionado-bebida")
    .querySelector("p3").innerHTML;
    preçoBebida = Number(preçoB);
    botaoVerde();
    

} 

function escolherSobremesa (sobremesa){
    
    selecionadoSobremesa = document.querySelector(".selecionado-sobremesa");
    


    if(selecionadoSobremesa !== null){
        selecionadoSobremesa.classList.remove("selecionado-sobremesa");
        
    }
    sobremesa.classList.add("selecionado-sobremesa");
    preçoSobremesa = Number(document
    .querySelector(".selecionado-sobremesa")
    .querySelector("span").innerHTML);
    nomeSobremesa = document
    .querySelector(".selecionado-sobremesa")
    .querySelector("p3").innerHTML;
    botaoVerde();
}
    

function botaoVerde () {

if((preçoComida !== null) && (preçoBebida !== null) && (preçoSobremesa !== null)){
    let botao = document.querySelector("button");
    
    botao.classList.add("selecionado-tudo");
    
}
}
function escolher (){
    if((preçoComida !== null) && (preçoBebida !== null) && (preçoSobremesa !== null)) {
        const nome = prompt("Qual o seu nome?");
        const endereço = prompt("Qual o seu endereço?");

        valorTotal = preçoComida + preçoBebida + preçoSobremesa;

    document.querySelector(".nomeComida").innerHTML = nomeComida;
    document.querySelector(".preçoComida").innerHTML = preçoComida;
    document.querySelector(".nomeBebida").innerHTML = nomeBebida;
    document.querySelector(".preçoBebida").innerHTML = preçoBebida;
    document.querySelector(".nomeSobremesa").innerHTML = nomeSobremesa;
    document.querySelector(".preçoSobremesa").innerHTML = preçoSobremesa;
    document.querySelector(".valor-total").innerHTML = valorTotal;
    

        
 
        

        document.querySelector(".tudo").classList.add("escondido");
        document.querySelector(".confirmaçao-final").classList.remove("escondido");
        
    
        

       

    }
    else {
        alert("voce deve marcar todas as opçoes");
    }

}

function prosseguir() {
    
    const descricao = 'Olá, meu nome é ${nome} e gostaria de fazer o pedido:\n- Prato: ${nomePrato}\n- Bebida: ${nomeBebida}\n- Sobremesa: ${nomeSobremesa}\nTotal: R$ ${valorTotal}, para ser entregue no endereço: ${endereço}';

    
    const url = `https://wa.me/5565996508397?text=${encodeURIComponent(descricao)}`;
    window.open(url);
}

function cancelar (){
    document.querySelector(".tudo").classList.remove("escondido");
    document.querySelector(".confirmaçao-final").classList.add("escondido");
}