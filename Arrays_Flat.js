let cities = [
                "San Francisco", "Brasilia",
                ["Lima", "Ica"],
                ["Bogota", "Cali"],
                ["Guadalajara", "México DF"]
            ];
console.log(cities.flat());

/**
 * output: ["San Francisco", "Brasilia", "Lima", "Ica", "Bogota", "Cali", "Guadalajara", "México DF"]
 *  */
 
 /**
* Ejemplo de método flat con nivel
* */
let breed = ["Mamíferos",
["perros", ["Bulldog", "Labrador", "Boxer"]],
["gatos", ["Ragdoll", "Sphynx", "Angora"]]
];
 
console.log(breed.flat());
/**
* Resultado:
* ["Mamíferos", "perros", ["Bulldog", "Labrador", "Boxer"], "gatos", ["Ragdoll", "Sphynx", "Angora]]
* */
 
console.log(breed.flat(2));
/***
* Resultado:
* ["Mamíferos", "perros", "Bulldog", "Labrador", "Boxer", "gatos", "Ragdoll", "Sphynx", "Angora"]
*/
