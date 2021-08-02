import { transformYearMonth } from "../auxiliares/transformYearToMonth.js";
//////////////////////////////////// Férias vencidas (já com adicional)////////////////////////////
export function expiredVacation(info) {
    var diffMonth = transformYearMonth(info.endDate) - transformYearMonth(info.startDate);
    var expired = (info.expiredVacation == "optExpiredVacationYes")


    if (diffMonth >= 12 && expired == true) {
        info.result.expiredVacation = Number(info.lastPaycheck) + Number((info.lastPaycheck * 0.3))

    } else {
        info.result.expiredVacation = 0;

    }
    return info;
}