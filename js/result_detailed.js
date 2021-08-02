//Imports dos auxiliares
import { retrieveObjectStorage } from "./auxiliares/retrieveObjectFromStorage.js";

//Função Principal
document.addEventListener('DOMContentLoaded', function() {

    //pega minha string e transfortma em objeto novamente
    var info = retrieveObjectStorage();

    console.log(info);

    //preenche o resultado principal
    pinResults(info);
    

}, false);

//Função Principal, utilizando jquery para escrever os resultados.
function pinResults(info) {
    $("#salaryRefMonths").text(info.dates.refDaysWorked);
    $("#saldo_salario").text(info.result.salaryBalance.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));

    //li aviso prévio
    $("#earlyWarningRef").text(info.dates.refWarningDays);
    if(info.result.paidEarlyWarning == undefined){
        $("#earlyWarningSalary").text("-");
    }else{
        $("#earlyWarningSalary").text(info.result.paidEarlyWarning.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
    }

    //li 13º Salário
    if(info.dates.refWorkedMonthsLastYear == undefined){
        $("#bonusSalaryRef").text("0/12");
    }else{
        $("#bonusSalaryRef").text(info.dates.refWorkedMonthsLastYear +  "/12");
    }  
    if(info.result.thirteenthSalary == undefined){
        $("#bonusSalary").text("-");
    }else{
        $("#bonusSalary").text(info.result.thirteenthSalary.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
    }

    //li 13º Salário aviso prévio
    
    if(info.result.thirteenthSalaryEarlyWarning == undefined || info.result.thirteenthSalaryEarlyWarning == 0){
        $("#thirteenthSalaryEarlyWarningRef").text("-");
        $("#thirteenthSalaryEarlyWarning").text("-");
    }else{
        $("#thirteenthSalaryEarlyWarningRef").text("1/12");
        $("#thirteenthSalaryEarlyWarning").text(info.result.thirteenthSalaryEarlyWarning.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
    }

    //li Férias proporcionais
    
    if(info.result.expiredVacation == undefined || info.result.expiredVacation == 0){
        $("#expiredVacation").text("-");
        $("#expiredVacationRef").text("0");
    }else{
        $("#expiredVacationRef").text("1");
        $("#expiredVacation").text(info.result.expiredVacation.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
    }

    //li Férias proporcionais
    if(info.dates.refWorkedMonthsLastYear == undefined){
        $("#proportionalVacationRef").text("0/12");
    }else{
        $("#proportionalVacationRef").text(info.dates.refWorkedMonthsLastYear + "/12");
    }
    if(info.result.proportionalVacation == undefined){
        $("#proportionalVacation").text("-");
    }else{
        $("#proportionalVacation").text(info.result.proportionalVacation.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
    }

    //li férias sobre o aviso prévio
    if(info.result.earlyWarningVacation == undefined || info.result.earlyWarningVacation == 0){
        $("#vacationEarlyWarningRef").text("0/12");
        $("#vacationEarlyWarning").text("-");
    }else{
        $("#vacationEarlyWarningRef").text("1/12")
        $("#vacationEarlyWarning").text(info.result.earlyWarningVacation.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
    }

    //DESCONTO INSS sobre saldo salário
    if(info.descounts.inssDescountSalary == undefined){
        $("#inssDescount").text("-");
    }else{
        $("#inssDescount").text(info.descounts.inssDescountSalary.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
    }

    //DESCONTO INSS sobre aviso prévio
     if(info.descounts.earlyWarningDescount == undefined){
        $("#inssEarlyWarning").text("-");
    }else{
        $("#inssEarlyWarning").text(info.descounts.earlyWarningDescount.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
    }

     //DESCONTO INSS 13º Salário
    if(info.descounts.descountInssThirteenthSalary == undefined){
        $("#inssBonusDescount").text("-");
    }else{
        $("#inssBonusDescount").text(info.descounts.descountInssThirteenthSalary.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
    }

       //TOTAIS
    if(info.result.total == undefined){
        $("#totalLiquido").text("-");
    }else{
        $("#totalLiquido").text(info.result.total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
    }

    //DESCONTO TOTAL
    if(info.descounts.totalDescount == undefined){
        $("#totalDescontos").text("-");
    }else{
        $("#totalDescontos").text(info.descounts.totalDescount.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
    }

   
}
