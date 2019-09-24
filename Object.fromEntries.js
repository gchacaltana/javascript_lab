let twitter = {
    name: "Gonzalo Chacaltana",
    location: "Perú",
    account: "@gchacaltanab"
};
console.log(Object.entries(twitter));
/* Expected Output
 [
 ["name", "Gonzalo Chacaltana"],
 ["location", "Perú"],
 ["account", "@gchacaltanab"]
 ]
 */
const objUserTwiter = new Map([
    ["name", "Gonzalo Chacaltana"],
    ["location", "Perú"],
    ["account", "@gchacaltanab"]
]);
console.log(Object.fromEntries(objUserTwiter));
/**
 * Resultado:
 * {name: "Gonzalo Chacaltana", location: "Perú", account: "@gchacaltanab"}
 * */
