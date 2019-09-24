/**
 * Sorteo de viajes - Atributos privados
 * @author Gonzalo Chacaltana @gchacaltanab
 * @class TravelRaffle
 *  **/
class TravelRaffle {
    #country = null;
 
    get value() {
        return this.#country;
    }
 
    selectCountry() {
        const countries = ['Perú', 'México', 'España', 'Colombia', 'Ecuador', 'Argentina', 'Chile'];
        const randomIndex = Math.floor(Math.random() * countries.length);
        this.#country = countries[randomIndex];
    }
    print() {
        console.log("Ganaste un viaje a ");
        console.log(this.#country);
    }
}
 
const travel = new TravelRaffle();
travel.selectCountry();
//travel.#country = "Perú"; Esto genera un error
travel.print();
