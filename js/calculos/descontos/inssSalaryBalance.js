/////////////////////////////Inss sobre saldo de salário//////////////////////////////////
export function inssSalaryBalance(salary) {
    var salaryDescount = 0;

    if (salary <= 1100) {
        salaryDescount = salary * 0.075;
    } else if (salary <= 2203) {
        salaryDescount = salary * 0.09 - 15.67;
    } else if (salary <= 3305) {
        salaryDescount = salary * 0.12 - 82.60;
    } else {
        salaryDescount = salary * 0.14 - 148.70;
    }

    return salaryDescount;
}