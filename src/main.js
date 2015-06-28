/* fuzzyTimeJS main */

// Base function.
var fuzzyTimeJS = {
  vars : {
    hourMap : [
      "twelve",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve"
    ],
    
    infixMap : {
      "to": " to ",
      "past": " past ",
      "nothing": " "
    },
    
    
    minuteMap : {
      "0": "o'clock",
      "5": "five",
      "10": "ten",
      "15": "quarter",
      "20": "twenty",
      "30": "half"
    },
    
    
    postfixMap : {
      "sharp": "o'clock",
      "nothing": ""
    }
  },
    
    convert: function(hour, minute){
      // Set default parameters
      hour = typeof hour !== 'undefined' ? hour : 0;
      minute = typeof minute !== 'undefined' ? minute : "0";
      
      return this.vars.hourMap[hour] + this.vars.infixMap.nothing + this.vars.minuteMap[minute] + this.vars.postfixMap.nothing;
    }
};
  // Define hour map

  
  // Define infix map

  
  // Define minute map

  
  // Define postfix map



// Version.
fuzzyTimeJS.VERSION = '0.0.1';


// Export to the root, which is probably `window`.
window.fuzzyTimeJS = fuzzyTimeJS;
