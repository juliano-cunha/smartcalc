import { inssDescountThirteenthSalary } from "./descontos/inssThirteenthSalary.js";
//////////////////////////////////// 13ª Salário///////////////////////////////////////////
export function thirteenthSalary(info) {
    //testa se foi  superior a 14 dias(revisar)
    var workedDays = info.endDate.getDate()
    var workedMonthsInLastYear = info.endDate.getMonth();

    if (workedDays > 14) {
        workedMonthsInLastYear += 1;
    } else {

    }

    var thirteenthSalary = (Number(info.lastPaycheck) / 12) * workedMonthsInLastYear;
    var descountInssThirteenthSalary = inssDescountThirteenthSalary(thirteenthSalary);

    info.dates.refWorkedMonthsLastYear = workedMonthsInLastYear;
    info.result.thirteenthSalary = thirteenthSalary;
    info.descounts.descountInssThirteenthSalary = descountInssThirteenthSalary;


    return info;
}