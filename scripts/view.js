class View {

    /**
    * @type {String} mapa del tesoro
    * @type {String} pistas para encontrar el tesoro
    * @type {String} boton de empezar 
    * @type {String} texto representativo del cronometro
    */

    constructor() {
        this.map = document.getElementById("TresImg")
        this.hint = document.getElementById("hint")
        this.start = document.getElementById("start")
        this.hms = document.getElementById("hms")
    }
}