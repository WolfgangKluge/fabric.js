(function(){
  
  var fabric = this.fabric || (this.fabric = { });
  
  if (fabric.util) {
    console.warn('fabric.util is already defined');
    return;
  }
  
  /**
   * @static
   * Removes value from an array. 
   * Presence of value (and its position in an array) is determined via `Array.prototype.indexOf`
   * @param {Array} array
   * @param {Any} value
   * @return {Array} original array
   */
  function removeFromArray(array, value) {
    var idx = array.indexOf(value);
    if (idx !== -1) {
      array.splice(idx, 1);
    }
    return array;
  };
  
  /**
   * @static
   * @method getRandomInt
   * @param {Number} min lower limit
   * @param {Number} max upper limit
   * @return {Number} random value (between min and max)
   */
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  /**
   * @static
   * Transforms degrees to radians
   * @param {Number} degrees value in degrees
   * @return {Number} value in radians
   */
  var PiBy180 = Math.PI / 180;
  function degreesToRadians(degrees) {
    return degrees * PiBy180;
  }
  
  /**
   * A wrapper around Number#toFixed, 
   * which contrary to native method returns number, not string
   * @param {Number | String} number number to operate on
   * @param {Number} fractionDigits number of fraction digits to "leave"
   * @return {Number}
   */
   function toFixed(number, fractionDigits) {
     return parseFloat(Number(number).toFixed(fractionDigits));
   }
  
  fabric.util = { 
    removeFromArray:        removeFromArray, 
    degreesToRadians:       degreesToRadians,
    toFixed:                toFixed,
    getRandomInt:           getRandomInt
  };
})();