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
        this.view.eventStart(this.handlerStart) //handler para empezar el evento start
        this.view.eventMap(this.handlerMap) //handler para empezar el evento map
    }

    handlerStart = () => { //Función que declara la parte del model que hará el boton start

        /**
        * @param {String} auxUser objeto de la clase User
        * @param {String} auxImg objeto de la clase ImageAdjust
        * @param {String} auxChrono objeto de la clase Chrono
        */
        var auxUser = this.model.getUser("PlayerUser")
        var auxImg = this.model.getImg("PlayerImg")
        var auxChrono = this.model.getChrono("PlayerChrono")
        this.model.timerId = setTimeout(this.model.limitTime, 60000) //temporizador 1 minuto
        auxUser.setUserName(prompt("What's your name?")) //definir el nombre del jugador
        this.model.target = { //aleatorizar un punto segun el ancho y alto que hemos definido antes de la imagen
            x: this.model.getRandomNumber(auxImg.WIDTH),
            y: this.model.getRandomNumber(auxImg.HEIGH)
        }
        this.model.chronoEvent(auxChrono) //empezar el tiempo del cronometro
    }

    handlerMap = (e) => {  //Función que declara la parte del model que hará el evento del mapa
   
        /**
        * @param {String} auxUser objeto de la clase User
        * @param {String} auxChrono objeto de la clase Chrono
        */
        var auxUser = this.model.getUser("PlayerUser")
        var auxChrono = this.model.getChrono("PlayerChrono")

        this.model.clicks++ //aumentar el numero de clicks cada vez que se hace el evento
        this.model.distance = this.model.getDistance(e, this.model.target) //gurdar diferencia entre el punto aleatorio y el click del jugador //e
        this.model.distHint = this.model.distanceHint(this.model.distance) //guardar la pista del juego para saber que tan cerca está el jugador de encontrar el tesoro
        this.view.handlerHints(this.model.distHint[0]) //view
    
        if(this.model.distHint[1] == true) {
            clearTimeout(this.model.timerId) //limpiar el temporizador de derrota
            this.model.stopChronoInterval(auxChrono) //parar el cronometro
            this.model.timerSet = auxChrono.chronoMinutes + ":" + auxChrono.chronoSeconds + ":" +auxChrono.chronoMiliseconds //define la variable ttimerSet
            auxUser.setClicks(this.model.clicks) //definir los clikcs del jugador
            auxUser.setTime(this.model.timerSet) //definir el tiempo del jugador
            this.model.uploadRequest() //subida al php
            this.model.sendRequestTime() //llamada php Tiempo
            this.model.sendRequestClicks() //llamada php Clicks
                
            /**
            * @param {String} othGame Variable para jugar otra partida
            */

            var othGame = prompt("Whant to play another game? 1:yes 2:no")

            if(othGame == "1") { //Si
                this.model.clicks = 0 //definimos los clicks a 0 para una nueva partida
                auxChrono.setChronoMinutes(0) //definimos el tiempo a 0 para una nueva partida
                auxChrono.setChronoSeconds(0) //definimos el tiempo a 0 para una nueva partida
                auxChrono.setChronoMiliseconds(0) //definimos el tiempo a 0 para una nueva partida
                this.handlerStart() //volver ha empezar el juego
            }
            else { //No
                alert("End of the game") //avisa al jugador que se ha terminado la partida
                this.view.eventCheck = false //cancelamos el evento del mapa 
            }
        }
    }
}

    /**
    * @param {Object} app objeto controller para la funcionabilidad del programa
    */
    var app = new Controller(new Model, new View)