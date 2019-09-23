/**
Devuelve estructura de datos del Header del response de una URL.
                      
@function getHeaderResponse
@param {string} url - URL de un recurso.
@returns {array} 
*/
function getHeaderResponse(url) {
    fetch(url).then(response => {
        console.log(response.headers);
    }).catch(error => {
        console.log(error);
    }).finally(() => {
        console.log("Imprimir mensaje finally");
    });
}
 
var url = "https://jsonplaceholder.typicode.com/todos/1";
getHeaderResponse(url);
