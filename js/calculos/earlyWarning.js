import { inssEarlyWarning } from "./descontos/inssEarlyWarning.js";
/////////////////////////////////Aviso-prévio proporcional indenizado/////////////////////////////////////
export function paidEarlyWarning(info) {
    var earlyWarningWorked = (info.earlyWarning == "optEarlyWarningYes")
    var paidEarlyWarning = 0;
    var warningDescount = 0;
    var warningDays = 0;

    //Testa se foi trabalhado o aviso prévio
    if(earlyWarningWorked == true){

    }else{
        var diffYears = info.endDate.getFullYear() - info.startDate.getFullYear();
        var extraDays = 0;
        warningDays = 30;
        
        if (diffYears > 0) {
            extraDays = diffYears * 3
        }
    
        warningDays += extraDays;
        paidEarlyWarning = Number(info.lastPaycheck) * (warningDays / 30);
        warningDescount = inssEarlyWarning(paidEarlyWarning);
    }
   

    info.result.paidEarlyWarning = paidEarlyWarning;
    info.descounts.earlyWarningDescount = warningDescount;
    info.dates.refWarningDays = warningDays;

    return info
}