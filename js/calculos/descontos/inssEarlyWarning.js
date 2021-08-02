//////////////////////////////// INSS sobre aviso prévio ////////////////////////
export function inssEarlyWarning(warning) {
    var earlyWarningDescount = 0;

    earlyWarningDescount = warning * 0.12 - 78, 36;

    return earlyWarningDescount;

}