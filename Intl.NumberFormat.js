/**
 * Formato numérico americano
 * Resultado: 1,000,000,000
 * */
const numberFormatUS = new Intl.NumberFormat('en');
console.log(numberFormatUS.format(1000000000));
 
/**
 * Formato numérico de perú
 * Resultado: 1.000.000.000
 * */
const numberFormatPE = new Intl.NumberFormat('pe');
console.log(numberFormatPE.format(1000000000));
 
/**
 * Formato numérico de francia
 * Resultado: 1 000 000 000
 * */
const numberFormatFR = new Intl.NumberFormat('fr');
console.log(numberFormatFR.format(1000000000));
