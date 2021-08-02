//Salva meu objeto no local storage 
export function saveObjectStorage(info) {
    var infoJson = JSON.stringify(info);
    //coloca na local storage
    window.localStorage.setItem('info', infoJson);

}