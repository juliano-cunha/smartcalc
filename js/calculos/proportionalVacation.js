//////////////////////////////////// Férias proporcionais////////////////////////////
export function proportionalVacation(info) {
    //var diffMonth = transformYearMonth(info.endDate) - transformYearMonth(info.startDate);
    var workedDays = info.endDate.getDate()

    var month = info.endDate.getMonth();

    if (workedDays > 14) {
        month++;
    }else{
        month--;
    }

    info.result.proportionalVacation = (month / 12) * (Number(info.lastPaycheck) + Number(info.lastPaycheck * 0.3));


    return info;

}