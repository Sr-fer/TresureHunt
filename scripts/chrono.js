class Chrono {

    /**
    * @type {Number} Contador del cronometro
    * @type {Number} Minutos del cronometro
    * @type {Number} Segundos del cronometro
    * @type {Number} Milisegundos del cronometro
    * @type {String} Texto que representa el tiempo del cronometro
    * @type {String} Botón para emepezar el cronometro
    * @type {String} Intervalo del cronometro
    * @param {String} id Id con el que es referenciada cada clase del objeto
    */

    constructor(id) {
      this.chronoCounter = 0
      this.chronoMinutes = 0
      this.chronoSeconds = 0
      this.chronoMiliseconds = 0
      this.chronoText;
      this.start;
      this.chronoInterval = null
      this.id = id
    }

    /**
    * Define el texto del cronometro
    * @param {String} chronoText
    */
    setChronoText(chronoText) {
        this.chronoText = chronoText
    }
      
    /**
    * Devluelve el texto del cronometro
    * @returns {String} 
    */
    getChronoText() {
        return this.chronoText
    }
      
    /**
    * Define el boton de inicio del cronometro
    * @param {String} start
    */
    setStart(start) {
        this.start = start
    }
      
    /**
    * Devuelve el botón de inicio del cronometro
    * @returns {String}
    */
    getStart() {
        return this.start
    }
      
    /**
    * Define el texto del contador
    * @param {Number} chronoCounter
    */
    setChronoCounter(chronoCounter) {
        this.chronoCounter = chronoCounter
    }
        
    /**
    * Devluelve el contador
    * @returns {Number} 
    */
    getChronoCounter() {
        return this.chronoText
    }
      
    /**
    * Define los minutos del contador
    * @param {Number} chronoMinutes 
    */
    setChronoMinutes(chronoMinutes) {
        this.chronoMinutes = chronoMinutes
    }
      
    /**
    * Devluelve los minutos del contador
    * @returns {Number} 
    */
    getChronoMinutes() {
        return this.chronoMinutes
    }
      
    /**
    * Define los segundos del contador
    * @param {Number} chronoSeconds
    */
    setChronoSeconds(chronoSeconds) {
        this.chronoSeconds = chronoSeconds
    }
        
    /**
    * Devluelve los segundos del contador
    * @returns {Number} 
    */
    getChronoSeconds() {
        return this.chronoSeconds
    }
      
    /**
    * Define los milisegundos del contador
    * @param {Number} chronoMiliseconds
    */
    setChronoMiliseconds(chronoMiliseconds) {
        this.chronoMiliseconds = chronoMiliseconds
    }
      
    /**
    * Devluelve los milisegundos del contador
    * @returns {Number} 
    */
    getChronoMiliseconds() {
        return this.chronoMiliseconds
    }   
}