///////////////////Retorna minha string do local storage e converte novamente para objeto/////////////////////////////////
export function retrieveObjectStorage() {
    var info = window.localStorage.getItem('info')
    var info = JSON.parse(info);

    return info;
}