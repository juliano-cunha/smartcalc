// Transforma os anos em meses para utlizar no cálculo
export function transformYearMonth(data) {
    return data.getFullYear() * 12 + data.getMonth();
}