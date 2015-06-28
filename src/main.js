/* fuzzyTimeJS main */

// Base function.
var fuzzyTimeJS = function(hour, minute) {
  
  // Set default parameters
  hour = typeof hour !== 'undefined' ? hour : 0;
  minute = typeof minute !== 'undefined' ? minute : "0";
  
  // Define hour map
  var hourMap = [
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
  ];
  
  // Define infix map
  var infixMap = {
    "to": " to ",
    "past": " past ",
    "nothing": " "
  };
  
  // Define minute map
  var minuteMap = {
    "0": "o'clock",
    "5": "five",
    "10": "ten",
    "15": "quarter",
    "20": "twenty",
    "30": "half"
  };
  
  // Define postfix map
  var postfixMap = {
    "sharp": "o'clock",
    "nothing": ""
  };
  
  return hourMap[hour] + infixMap.nothing + minuteMap[minute] + postfixMap.nothing;
};


// Version.
fuzzyTimeJS.VERSION = '0.0.1';


// Export to the root, which is probably `window`.
window.fuzzyTimeJS = fuzzyTimeJS;
