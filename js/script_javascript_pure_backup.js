var btnCalculate = document.querySelector("#btnCalculate");

btnCalculate.addEventListener("click", function(event){
    event.preventDefault(event);
        //seleciona o meu formulário
    var form = document.querySelector("#formCalc");
        //pega os dados do meu formulario
    var info = getInfoForm(form);
        //testa o tipo de desligamento
    // terminationOptions(infoForm);

    //teste
    console.log(info)

    //limpa o formulario
    //form.reset(); 
});
                                    ///////////////////////////////////////// Pega as informações do formulário ////////////////////////////////////////////
function getInfoForm(form){
    var info = {
        startDate : spliceDate(form.dateStart.value),
        endDate : spliceDate(form.dateEnd.value),
        lastPaycheck : form.lastPaycheck.value,
        reliantNumber: form.reliant.value,
        layoffReasonSelected: form.layoffReason.value,
        expiredVaccation: form.optExpiredVacation.value,
        earlyWarning: form.optEarlyWarning.value,
    }
    //chamadas teste
    saldoSalario(info);
    expiredVacation(info);
    proportionalVacation(info);
    bonusSalary(info)
    paidEarlyWarning(info)

    return info;
};

function spliceDate(date) {
    var objData = new Date(
        date
        .split('-')
        // .map((item, indice) => item - indice % 2)
        );
        return objData;
}
//////////////////////////////////// Saldo de salário////////////////////////////
function saldoSalario(info) {
    //ou getUTCDate();
    var saldoSalario = Number((info.lastPaycheck / 30) * info.endDate.getDate());
    //falta transformar com o localeString e retornar para o objeto ou outro
    console.log(saldoSalario);
}
//////////////////////////////////// Férias vencidas (já com adicional)////////////////////////////
function expiredVacation(info) {
    var expiredVacation = Number(info.lastPaycheck) + Number((info.lastPaycheck * 0.3))
    console.log(expiredVacation);
    //console.log(typeof info.lastPaycheck);
    return expiredVacation;
}
//////////////////////////////////// Férias proporcionais////////////////////////////
function proportionalVacation(info) {
    //passar para funcao auxiliar
    // var initialMonth =  info.startDate.getFullYear() * 12 + info.startDate.getMonth();
    // var initialMonth = transformYearMonth(info.startDate);
    // var endMonth =  info.endDate.getFullYear() * 12 + info.endDate.getMonth();
    // var endMonth = transformYearMonth(info.endDate);
    var diffMonth = transformYearMonth(info.endDate) - transformYearMonth(info.startDate);
        //se sobrar tempo calcular com dias também
    var proportionalVacation = (diffMonth / 12) * expiredVacation(info) ;
    console.log(diffMonth);
    console.log(proportionalVacation);
     
}
//////////////////////////////////// 13ª///////////////////////////////////////////
function bonusSalary(info) {
    //testa se foi  superior a 14 dias(revisar)
    if(info.endDate.getDate() < 14){
        info.endDate.getMonth() - 1;
    }
    var bonus = (Number(info.lastPaycheck) / 12) * info.endDate.getMonth()
    console.log(bonus);
}
//////////////////////////////////Aviso-prévio proporcional indenizado/////////////////////////////////////
// function paidEarlyWarning(info) {
//     var days = 
//     var paidEarlyWarning = Number(info.lastPaycheck) * (/30)
// }

function transformYearMonth(data) {
    return data.getFullYear() * 12 + data.getMonth();
}
                                    ///////////////////////////////////////// Testa qual cálculo será realizado////////////////////////////////////////////
                                    // switch case e chama as funções necessárias para o tipo de demissao
// function terminationOptions(infoForm){
//    if(infoForm.contractTerminationReason == "Pedido de demissão"){
//         calcPedidoDemissao(infoForm);
//    }else if(infoForm.contractTerminationReason == "Dispensa sem justa causa"){
//         calcDispensaSemJustaCausa(infoForm);
//    }else{
//         calcDispensaJustaCausa(infoForm);
//    }
// }

                                   ///////////////////////////////////////// Lógica dos cálculos////////////////////////////////////////////
// function calcPedidoDemissao(infoForm){

// }

// function calcDispensaSemJustaCausa(infoForm){

// }

// function calcDispensaJustaCausa(infoForm){

// }

// let data = new Date(
//     ...this._inputData.value
//         .split('-')
//         .map((item, indice) => item - indice % 2)
// );