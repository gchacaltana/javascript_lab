/**
Devuelve cantidad de caracteres de la respuesta de una URL.
 
@function getResponseSize
@param {string} url - URL de un recurso.
@returns {numbers}
*/
async function getResponseSize (url) {
    const response = await fetch(url);
    const reader = response.body.getReader();
    let total = 0;
    while (true) {
        const { done, value } = await reader.read();
        if (done) return total;
        total += value.length;
    }
}
var url = "https://jsonplaceholder.typicode.com/todos/1";
console.log(url);
