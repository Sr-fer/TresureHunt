class User{

    /**
    * @type {Number} clicks del jugador
    * @type {Number} Tiempo del jugador
    * @type {String} Nombre del jugador
    * @param {String} id Id con el que es referenciada cada clase del objeto
    */

    constructor(id){
        this.clicks = 0
        this.time = 0
        this.userName;
        this.id = id
    }
}