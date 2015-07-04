(function(window, undefined) {

  "use strict";


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
      "to": "to",
      "past": "past",
      "nothing": ""
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
      "eleven"
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
    },
    
    /**
     * returns the hour word. retruns hour word + 1 if isTo is true
     */
    getHourWord: function(hour, isTo){
      var hourMap = fuzzyTimeJS.vars.hourMap;
      if(isTo){
        return hourMap[(hour + 1) % 12];
      }
      else{
        return hourMap[hour % 12];
      }
    }
  },
  
  /**
   * returns fuzzy time. If no args, returns "twelve o'clock"
   */
  convert: function(hour, minute){
    // Set default parameters
    hour = typeof hour !== 'undefined' ? hour : 0;
    minute = typeof minute !== 'undefined' ? minute : 0;
    var infix, postfix, minuteWord, hourWord;
    
    minuteWord = fuzzyTimeJS.helpers.getMinuteWord(minute);
    postfix = fuzzyTimeJS.vars.postfixMap.nothing;
    
    // it's o'clock
    if (minuteWord === fuzzyTimeJS.vars.minuteMap["0"]){
      if (minute > 33){
        return fuzzyTimeJS.helpers.getHourWord(hour, true) + " " + minuteWord;
      }
      else{
        return fuzzyTimeJS.helpers.getHourWord(hour) + " " + minuteWord;
      }

    }
    
    // it is 'to'
    if (minute > 33){
      infix = fuzzyTimeJS.vars.infixMap.to;
      hourWord = fuzzyTimeJS.helpers.getHourWord(hour, true);
      return minuteWord + " " + infix + " " + hourWord;
    }
    // it is 'past'
    else{
      infix = fuzzyTimeJS.vars.infixMap.past;
      hourWord = fuzzyTimeJS.helpers.getHourWord(hour);
      return minuteWord + " " + infix + " " + hourWord;
    }
  }
};

// Version.
fuzzyTimeJS.VERSION = '0.0.1';


// Export to the root, which is probably `window`.
window.fuzzyTimeJS = fuzzyTimeJS;


}(this));
