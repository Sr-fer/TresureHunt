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
}