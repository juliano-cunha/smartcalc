////////////////////////////////////////13º Salário sobre aviso prévio/////////////////////////////////////////
export function thirteenthSalaryEarlyWarning(info) {
    var thirteenthSalaryEarlyWarning = 0;
    var earlyWarningWasWorked = (info.earlyWarning == "optEarlyWarningYes")
    if (earlyWarningWasWorked == true) {
        info.result.thirteenthSalaryEarlyWarning = thirteenthSalaryEarlyWarning;
    } else {
        thirteenthSalaryEarlyWarning = (1 / 12) * Number(info.lastPaycheck);
        info.result.thirteenthSalaryEarlyWarning = thirteenthSalaryEarlyWarning;
    }
}