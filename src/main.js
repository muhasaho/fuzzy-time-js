/* fuzzyTimeJS main */

// Base Object.
var fuzzyTimeJS = {
  vars : {
    // Define minute map
    minuteMap : {
      "0": "o'clock",
      "5": "five",
      "10": "ten",
      "15": "quarter",
      "20": "twenty",
      "30": "half"
    },
    
    // Define infix map
    infixMap : {
      "to": " to ",
      "past": " past ",
      "nothing": " "
    },
    
    // Define hour map
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
    
    // Define postfix map
    postfixMap : {
      "sharp": "o'clock",
      "nothing": ""
    }
  },
  
  helpers: {
    /**
     * returns the word corresponding to minute past or to
     */
    getMinuteWord: function(minutesPast){
      var minuteMap = fuzzyTimeJS.vars.minuteMap;
      
      // The minutesPast is "to"
      if (minutesPast > 33){
        minutesPast = 60 - minutesPast;
      }
      
      // return appropriate minute word
      if(minutesPast <= 3){
        return minuteMap["0"];
      }
      else if(minutesPast <= 7){
        return minuteMap["5"];
      }
      else if(minutesPast <= 12){
        return minuteMap["10"];
      }
      else if(minutesPast <= 17){
        return minuteMap["15"];
      }
      else if(minutesPast <= 26){
        return minuteMap["20"];
      }
      else{
        return minuteMap["30"];
      }
    }
  },
    
    convert: function(hour, minute){
      // Set default parameters
      hour = typeof hour !== 'undefined' ? hour : 0;
      minute = typeof minute !== 'undefined' ? minute : "0";
      
      
      return this.vars.hourMap[hour] + this.vars.infixMap.nothing + this.vars.minuteMap[minute] + this.vars.postfixMap.nothing;
    }
};

// Version.
fuzzyTimeJS.VERSION = '0.0.1';


// Export to the root, which is probably `window`.
window.fuzzyTimeJS = fuzzyTimeJS;
