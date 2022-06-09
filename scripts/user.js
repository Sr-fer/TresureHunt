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

    /**
        * Define la cantidad de clicks del jugador que ha realizado para encontrar el tesoro
        * @param {Number} clicks
        */
     setClicks(clicks) {
        this.clicks = clicks
    }

    /**
    * Devluelve la cantidad de clicks del jugador
    * @returns {Number} 
    */
    getClicks() {
        return this.numclicks 
    }   

    /**
    * Define la cantidad de tiempo que el jugador ha tardado en encontrar el tesoro
    * @param {Number | String} time
    */
    setTime(time) {
        this.time = time
    }

    /**
    * Devluelve el timepo que ha tardado el jugador
    * @returns {Number | String} 
    */
    getTime() {
        return this.time
    }

    /**
    * Define el nombre del jugador
    * @param {String} userName
    */
    setUserName(userName) {
        this.userName = userName
    }

    /**
    * Devluelve el nombre del jugador
    * @returns {String} 
    */
    getUserName() {
        return this.userName
    }
}