class Controller {
    
    /**
    * @param {Number} model objeto de la clase Model
    * @param {Number} view objeto de la clase View
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

        /**
        * @param {Object} myUser Guardar el objeto en una variable
        */
        var myUser = this.model.getUser("PlayerUser")

        myImg.setWidth(1000) //Definir el ancho de la imagen
        myImg.setHeigh(800) //Definir el alto de la imagen
        myChrono.setChronoText(view.hms) //Definir el texto del cronometro
        myChrono.setStart(view.start) //Definir el boton de empezar del cronometro
        this.view.eventStart(this.model.handlerStart) //handler para empezar el evento start
        

    view.map.addEventListener("click", function (e) { //evento para encontrar  --- View
        if(view.eventCheck == true) {
        model.clicks++ //aumentar el numero de clicks cada vez que se hace el evento
        model.distance = model.getDistance(e, model.target) //gurdar diferencia entre el punto aleatorio y el click del jugador
        model.distHint = model.distanceHint(model.distance) //guardar la pista del juego para saber que tan cerca está el jugador de encontrar el tesoro
        view.handlerHints(model.distHint[0]) //integrar el texto de las pistas en el html


        if(model.distHint[1] == true) {
            clearTimeout(model.timerId) //limpiar el temporizador de derrota
            model.timerSet = myChrono.chronoMinutes + ":" + myChrono.chronoSeconds + ":" + myChrono.chronoMiliseconds //define la variable ttimerSet
            model.stopChronoInterval(myChrono) //parar el cronometro
            myUser.setClicks(model.clicks) //definir los clikcs del jugador
            myUser.setTime(model.timerSet) //definir el tiempo del jugador
            console.log(myUser) //mostrar por pantalla al jugador
            model.sendRequest(myUser) //llamada php

            model.othGame = prompt("Whant to play another game? 1:yes 2:no")
            if(model.othGame == "1") { //Si
                location.reload() //recargar la página
            }
            else { //No
                alert("End of the game") //avisa al jugador que se ha terminado la partida
                view.eventCheck = false //cancelamos el evento del mapa
            }
        }
    }
    })
    }
}

    /**
    * @param {Object} app objeto controller para la funcionabilidad del programa
    */
    var app = new Controller(new Model, new View)