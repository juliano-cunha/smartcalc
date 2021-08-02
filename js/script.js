var btnCalculate = document.querySelector("#btnCalculate");

// btnCalculate.addEventListener("click", function(event){
//     event.preventDefault(event);
//         //seleciona o meu formulário
//     var form = document.querySelector("#formCalc");
//         //pega os dados do meu formulario
//     var infoForm = getInfoForm(form);
//         //testa o tipo de desligamento
//     terminationOptions(infoForm);

//     //teste
//     console.log(infoForm)

//     //limpa o formulario
//     form.reset(); 
// });
                                    ///////////////////////////////////////// Pega as informações do formulário ////////////////////////////////////////////
// function getInfoForm(form){
//     var infoForm = {
//         startDate : form.startDate.value,
//         endDate : form.endDate.value,
//         lastPaycheck : form.lastPaycheck.value,
//         dependentNumber: form.dependentNumber.value,
//         contractTerminationReason: form.terminationReasonSelect.value,
//         expiredVaccation: form.expiredVaccationOpt.value,
//         earlyWarning: form.earlyWarningOpt.value 
//     }
//     return infoForm;
// };
                                    ///////////////////////////////////////// Testa qual cálculo será realizado////////////////////////////////////////////
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