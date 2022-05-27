class Controller {
    
    /**
    * @param {Number} model objeto de la clase Model
    * @param {Number} view objeto de la clase View
    */

    constructor(model, view) {
        this.model = model
        this.view = view
    }
}

    /**
    * @param {Object} app objeto controller para la funcionabilidad del programa
    */
    var app = new Controller(new Model, new View)