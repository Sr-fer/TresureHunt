class Controller {
    
    /**
    * @param {String} model objeto de la clase Model
    * @param {String} view objeto de la clase View
    */

    constructor(model, view) {
        this.model = model
        this.view = view
    
        this.model.addImg("PlayerImg") //crea un objeto AdjustImage
        this.model.addChrono("PlayerChrono") //crea un objeto Chrono
        this.model.addUser("PlayerUser") //crea un objeto User

        /**
        * @param {Object} myImg Guardar el objeto en una variable
        */
        var myImg = this.model.getImg("PlayerImg")

        /**
        * @param {Object} myChrono Guardar el objeto en una variable
        */
        var myChrono = this.model.getChrono("PlayerChrono")

        myImg.setWidth(1000) //Definir el ancho de la imagen
        myImg.setHeigh(800) //Definir el alto de la imagen
        myChrono.setChronoText(view.hms) //Definir el texto del cronometro
        myChrono.setStart(view.start) //Definir el boton de empezar del cronometro
        this.view.eventStart(this.model.handlerStart) //handler para empezar el evento start
        this.view.eventMap(this.model.handlerMap) //handler para empezar el evento map
    }
}

    /**
    * @param {Object} app objeto controller para la funcionabilidad del programa
    */
    var app = new Controller(new Model, new View)