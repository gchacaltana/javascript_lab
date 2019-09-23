/**
 * Ejemplo de trimStart and trimEnd
 * @author Gonzalo Chacaltana Buleje <gchacaltanab@outlook.com>
 * @class UserTwitter
 * @version 1.0
 */
var UserTwitter = {
    account: null,
    name: null,
    setAccount: function (str) {
        this.account = str.trimStart();
    },
    setName: function (str) {
        this.name = str.trimEnd();
    },
    printInput: function () {
 
    },
    printAccount: function () {
        console.log("Cuenta: " + this.account);
        console.log("Nombre: " + this.name);
    }
};
var usr = Object.create(UserTwitter);
usr.setAccount("     @zettadatos");
usr.setName("Publicaciones sobre datos....     ");
usr.printAccount();
