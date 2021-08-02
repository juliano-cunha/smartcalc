//RETORNA OBJETO DATA
export function spliceDate(date) {
    var objData = new Date(
        date
        .split('-')
        // .map((item, indice) => item - indice % 2)
    );
    return objData;
}