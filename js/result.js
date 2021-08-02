import { retrieveObjectStorage } from "./auxiliares/retrieveObjectFromStorage.js";

//chama ao carregar a página, similar ao $(ready) do jquery
var resultText = document.querySelector("#totalResult");
var btnDetail = document.querySelector(".result__btn");

document.addEventListener('DOMContentLoaded', function() {

    //pega minha string e transfortma em objeto novamente
    var info = retrieveObjectStorage();

    console.log(info);
    
    //preenche o resultado principal
    pinResult(info);

}, false);


//escreve o resultado na tela
function pinResult(info) {
    var resultado = info.result.total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});;
    resultText.textContent = resultado
}

//seleciona a próxima página
btnDetail.addEventListener("click",function(){
    window.location.href = "./resultado-detalhado.html";
})
