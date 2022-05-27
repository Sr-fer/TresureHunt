class ImageAdjust {

    /**
    * @type {Number} Altura Imagen
    * @type {Number} Ancho Imagen
    * @param {String} id Id con el que es referenciada cada clase del objeto
    */

    constructor(id) {
        this.WIDTH = 0
        this.HEIGH = 0
        this.id = id
    }

    /**
    * Define la ancho de la imagen
    * @param {Number} WIDTH
    */
    setWidth(WIDTH) {
        this.WIDTH = WIDTH
    }
        
    /**
    * Devluelve la ancho de la imagen
    * @returns {Number} 
    */
    getWidth() {
        return this.WIDTH
    }
    
    /**
    * Define el alto de la imagen
    * @param {Number} HEIGH
    */
    setHeigh(HEIGH) {
        this.HEIGH = HEIGH
    }
        
    /**
    * Devluelve el alto de la imagen
    * @returns {Number} 
    */
    getHeigh() {
        return this.HEIGH
    }
    
}