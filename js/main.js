//import das funções auxiliares
import {spliceDate} from "./auxiliares/spliceDate.js";
import {saveObjectStorage} from "./auxiliares/saveObjectLocalStorage.js";

//import das funções de cálculo
import { salaryBalance } from "./calculos/salaryBalance.js";
import { expiredVacation } from "./calculos/expiredVacation.js";
import { proportionalVacation } from "./calculos/proportionalVacation.js";
import { earlyWarningVacation } from "./calculos/earlyWarningVacationPeriod.js";
import { thirteenthSalary } from "./calculos/thirteenthSalary.js";
import { thirteenthSalaryEarlyWarning } from "./calculos/thirteenthSalaryWarning.js";
import { paidEarlyWarning } from "./calculos/earlyWarning.js";

//Função principal
var btnCalculate = document.querySelector("#btnCalculate");

btnCalculate.addEventListener("click", function (event) {
    event.preventDefault(event);

    //seleciona o meu formulário
    var form = document.querySelector("#formCalc");

    //pega os dados do meu formulario
    var info = getInfoForm(form);

    //testa o tipo de demissao
    layoffOptions(info);

    //calcula os totais
    calcTotal(info)

    //salva no local storage convertido em string
        console.log(info);
    saveObjectStorage(info);

    //chama a página de resultado
    callResultPage()

    //limpa o formulario
    //form.reset(); 
});
///////////////////////////////////////// Pega as informações do formulário ////////////////////////////////////////////
function getInfoForm(form) {
    var info = {
        startDate: spliceDate(form.dateStart.value),
        endDate: spliceDate(form.dateEnd.value),
        lastPaycheck: form.lastPaycheck.value,
        reliantNumber: form.reliant.value,
        layoffReasonSelected: form.layoffReason.value,
        expiredVacation: form.optExpiredVacation.value,
        earlyWarning: form.optEarlyWarning.value,
        result: {},
        descounts: {},
        dates: {}

    }
    return info;
};

///////////////////////////////////////// Testa qual cálculo será realizado////////////////////////////////////////////
// switch case e chama as funções necessárias para o tipo de demissao
function layoffOptions(info) {
    switch (info.layoffReasonSelected) {
        case "pedidoDemissao":
            calcPedidoDemissao(info);
            break;
        case "demissaoJustaCausa":
            calcJustaCausa(info);
            break;
        case "demissaoComum":
            calcDemissaoComum(info);
    }
}

///////////////////////////////////////// Lógica dos cálculos////////////////////////////////////////////
function calcDemissaoComum(info) {

    salaryBalance(info)
    expiredVacation(info);
    proportionalVacation(info);
    earlyWarningVacation(info)
    thirteenthSalary(info);
    thirteenthSalaryEarlyWarning(info)
    paidEarlyWarning(info);

    return info;
}

function calcJustaCausa(info) {

    salaryBalance(info);
    expiredVacation(info);


    return info;
}

function calcPedidoDemissao(info) {


    salaryBalance(info)
    expiredVacation(info);
    proportionalVacation(info);
    earlyWarningVacation(info)
    thirteenthSalary(info);
    thirteenthSalaryEarlyWarning(info)


    return info;
    //console.log(info);
}

////////////////////////Calcula totais/////////////////////////
function calcTotal(info) {
    var total = 0;
    var descounts = 0;

    for (var prop in info.result) {
        total += Number(info.result[prop])
    }

    for (var prop in info.descounts) {
        descounts += Number(info.descounts[prop])
    }
    //subtrai os descontos
    var totalLiquido = total - descounts;

    info.descounts.totalDescount = descounts;
    info.result.total = totalLiquido

    return info
}

////////////////////////aqui posso chamar direto tbm////////////////
function callResultPage() {
    window.location.href = "./resultado.html";
}