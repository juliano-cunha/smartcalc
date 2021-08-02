//Férias sobre aviso prévio
export function earlyWarningVacation(info) {
    var earlyWarningVacation = 0;
    var earlyWarningWasWorked = (info.earlyWarning == "optEarlyWarningYes")
    if (earlyWarningWasWorked == true) {
        info.result.earlyWarningVacation = earlyWarningVacation;
    } else {
        earlyWarningVacation = (1 / 12) * info.result.expiredVacation;
        info.result.earlyWarningVacation = earlyWarningVacation;
    }
}