import { inssSalaryBalance } from "./descontos/inssSalaryBalance.js";
//////////////////////////////////// Saldo de salário////////////////////////////
export function salaryBalance(info) {
    //ou getUTCDate();
    var daysWorked = info.endDate.getDate();
    var salaryBalance = Number((info.lastPaycheck / 30) * daysWorked);
    var inssDescount = inssSalaryBalance(salaryBalance);
    //devolve o objeto
    // var saldoSalario = [];
    // saldo.push(saldoSalario,inssDescount,info.endDate.getDate())
    // info.result.saldoSalario = saldo;
    info.result.salaryBalance = salaryBalance;
    info.descounts.inssDescountSalary = inssDescount;
    info.dates.refDaysWorked = daysWorked;

    return info

}