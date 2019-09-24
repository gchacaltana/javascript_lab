const serie = [1, 3, 5, 7, 9];
const power = (x) => [x * x];
console.log(serie.flatMap(power));
/**
 * Resultado:
 * [1, 9, 25, 49, 81]
 * */
