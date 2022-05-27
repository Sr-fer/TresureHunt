class Model {

    /**
    * @type {Array} Array que guarda los objetos creados de la clase imagen
    * @type {Array} Array que guarda los objetos creado de la clase user
    * @type {Array} Array que guarda los objetos creado de la clase chrono
    */

    constructor() {
        this.image = []
        this.user = []
        this.chrono = []
    }

    /**
    * Crea un objeto de la clase ImageAdjust
    * @param {String} id Id con el que será creado el objeto de la clase ImageAdjust
    */
    addImg(id){
        this.image.push(new ImageAdjust(id))
    }

    /**
    * Devuelve el array con los objetos de las imagenes creadas
    * @return {Array} Array con los objetos de la clase Imagenes
    */
    getImg(id) {
        return this.image.find(_image => _image.id === id)
    }

    /**
    * Devuelve el array con los objetos de los chrono creados
    * @return {Array} Array con los objetos de la clase Chrono
    */
    getChrono(id) {
        return this.chrono.find(_chrono => _chrono.id === id)
    }

    /**
    * Crea un objeto de la clase Chrono
    * @param {String} id Id con el que será creado el objeto de la clase Chrono
    */
    addChrono(id){
        this.chrono.push(new Chrono(id))
    }

    /**
    * Devuelve el array con los objetos de los User creados
    * @returns {Array} Array con los objetos de la clase User
    */
    getUser(id) {
        return this.user.find(_user => _user.id === id)
    }

    /**
    * Crea un objeto de la clase User
    * @param {String} id Id con el que será creado el objeto de la clase User
    */
    addUser(id){
        this.user.push(new User(id))
    }

    /**
    * Crea un número aleatorio dependiendo de que tamaño le propociones
    * @param {Number} size Tamaño proporcionado en el que creeara el número aleatorio
    */
    getRandomNumber(size){
        return Math.floor(Math.random() * size)
    }

    /**
    * Determina donde pincha el usuario con el ratón
    * @param {String} e Función del evento
    * @param {String | Number} target Contiene las dimensiones aleatorias de la imagen
    * @returns {Number} Devuelve las cordenadas donde el usuario pincha con el ratón
    */
    getDistance(e, target) {
        var diffX = e.offsetX - target.x
        var diffY = e.offsetY - target.y
        return Math.sqrt((diffX * diffX) + (diffY * diffY))
    }
    

    /**
    * Pista proporcionada al usuario para saver si donde pincha esta cerca o lejos del punto laeatorio creado
    * @param {Number} distance Guarda la diferencia entre el punto aleatorio y donde pincha el usuario
    */
    distanceHint(distance) {
        if(distance < 20){
            alert("Found the Tresure in " + this.clicks + " clicks!")
            return ["You've found the tresure", true]
        }
        else if (distance < 40) {
            return ["Boiling Hot!", false]
        }
        else if (distance < 60) {
            return ["Really Hot", false]
        }
        else if (distance < 80) {
            return ["Hot", false] 
        }
        else if (distance < 160) {
            return ["Warm", false]  
        }
        else if (distance < 380) {
            return ["Cold", false]  
        }
        else if (distance < 760) {
            return ["Really Cold", false] 
        }
        else {
            return ["Freezing!", false]
        }
    }

    //Función que finaliza la partida si se termina el tiempo
    limitTime() {
        alert("Time has gone!")
        location.reload()
    }

    /**
    * Crea el evento del Cronometro
    * @param {String} auxChrono Objeto de la clase Chronometro de la cual se va ha crear el evento
    */
    chronoEvent(auxChrono) {
        auxChrono.chronoInterval = null
        auxChrono.chronoInterval = setInterval(this.startChrono, 10, auxChrono)
    }

    /**
    * Funcionalidad del cronometro
    * @param {String} auxChrono Objeto de la clase Chronometro de la cual se va ha crear el evento
    */
    startChrono(auxChrono) {
        auxChrono.chronoCounter++
    if (auxChrono.chronoCounter < 100) {
        auxChrono.chronoMiliseconds = auxChrono.chronoCounter
    }
    if (auxChrono.chronoCounter == 100) {
        auxChrono.chronoCounter = 0
        auxChrono.chronoSeconds++
    if (auxChrono.chronoSeconds == 60) {
        auxChrono.chronoSeconds = 0
        auxChrono.chronoMinutes++
    }
    }
    auxChrono.chronoText.innerHTML = auxChrono.chronoMinutes + ":" + auxChrono.chronoSeconds + ":" + auxChrono.chronoMiliseconds;
    }

    /**
    * Para el cronometro
    * @param {String} auxChrono Objeto de la clase Chronometro de la cual se va ha crear el evento
    */
    stopChronoInterval(auxChrono) {
        clearInterval(auxChrono.chronoInterval)
        auxChrono.chronoInterval = null
    }
}