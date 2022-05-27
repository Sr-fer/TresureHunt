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

    /**
        * Escribe la pista en el html
        * @param {String} response pista que tendrá que verse en el html
        */
     handlerHints(response) {
        this.hint.innerHTML = `<h1>${response}<h1>` //integrar el texto de las pistas en el html
    }
}