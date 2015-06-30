/// <reference path="lib/qunit.js" />

test("the base object exists", function(){
  ok(fuzzyTimeJS);
});

test("no arguments return \"twelve o'clock\"", function(assert){
  assert.equal(fuzzyTimeJS.convert(), "twelve o'clock");
});

test("getMinuteWord", function(assert){
  assert.equal(fuzzyTimeJS.helpers.getMinuteWord(0), "o'clock");
  assert.equal(fuzzyTimeJS.helpers.getMinuteWord(3), "o'clock");
  assert.equal(fuzzyTimeJS.helpers.getMinuteWord(4), "five");
  assert.equal(fuzzyTimeJS.helpers.getMinuteWord(7), "five");
  assert.equal(fuzzyTimeJS.helpers.getMinuteWord(8), "ten");
  assert.equal(fuzzyTimeJS.helpers.getMinuteWord(12), "ten");
  assert.equal(fuzzyTimeJS.helpers.getMinuteWord(13), "quarter");
  assert.equal(fuzzyTimeJS.helpers.getMinuteWord(17), "quarter");
  assert.equal(fuzzyTimeJS.helpers.getMinuteWord(18), "twenty");
  assert.equal(fuzzyTimeJS.helpers.getMinuteWord(26), "twenty");
  assert.equal(fuzzyTimeJS.helpers.getMinuteWord(27), "half");
  assert.equal(fuzzyTimeJS.helpers.getMinuteWord(33), "half");
  assert.equal(fuzzyTimeJS.helpers.getMinuteWord(34), "twenty");
  assert.equal(fuzzyTimeJS.helpers.getMinuteWord(42), "twenty");
  assert.equal(fuzzyTimeJS.helpers.getMinuteWord(43), "quarter");
  assert.equal(fuzzyTimeJS.helpers.getMinuteWord(47), "quarter");
  assert.equal(fuzzyTimeJS.helpers.getMinuteWord(48), "ten");
  assert.equal(fuzzyTimeJS.helpers.getMinuteWord(52), "ten");
  assert.equal(fuzzyTimeJS.helpers.getMinuteWord(53), "five");
  assert.equal(fuzzyTimeJS.helpers.getMinuteWord(56), "five");
  assert.equal(fuzzyTimeJS.helpers.getMinuteWord(57), "o'clock");
  assert.equal(fuzzyTimeJS.helpers.getMinuteWord(59), "o'clock");
});

test("getHourWord", function(assert){
  assert.equal(fuzzyTimeJS.helpers.getHourWord(0), "twelve");
  assert.equal(fuzzyTimeJS.helpers.getHourWord(1), "one");
  assert.equal(fuzzyTimeJS.helpers.getHourWord(2), "two");
  assert.equal(fuzzyTimeJS.helpers.getHourWord(3), "three");
  assert.equal(fuzzyTimeJS.helpers.getHourWord(4), "four");
  assert.equal(fuzzyTimeJS.helpers.getHourWord(5), "five");
  assert.equal(fuzzyTimeJS.helpers.getHourWord(6), "six");
  assert.equal(fuzzyTimeJS.helpers.getHourWord(7), "seven");
  assert.equal(fuzzyTimeJS.helpers.getHourWord(8), "eight");
  assert.equal(fuzzyTimeJS.helpers.getHourWord(9), "nine");
  assert.equal(fuzzyTimeJS.helpers.getHourWord(10), "ten");
  assert.equal(fuzzyTimeJS.helpers.getHourWord(11), "eleven");
  assert.equal(fuzzyTimeJS.helpers.getHourWord(12), "twelve");
  assert.equal(fuzzyTimeJS.helpers.getHourWord(0, true), "one");
  assert.equal(fuzzyTimeJS.helpers.getHourWord(1, true), "two");
  assert.equal(fuzzyTimeJS.helpers.getHourWord(2, true), "three");
  assert.equal(fuzzyTimeJS.helpers.getHourWord(3, true), "four");
  assert.equal(fuzzyTimeJS.helpers.getHourWord(4, true), "five");
  assert.equal(fuzzyTimeJS.helpers.getHourWord(5, true), "six");
  assert.equal(fuzzyTimeJS.helpers.getHourWord(6, true), "seven");
  assert.equal(fuzzyTimeJS.helpers.getHourWord(7, true), "eight");
  assert.equal(fuzzyTimeJS.helpers.getHourWord(8, true), "nine");
  assert.equal(fuzzyTimeJS.helpers.getHourWord(9, true), "ten");
  assert.equal(fuzzyTimeJS.helpers.getHourWord(10, true), "eleven");
  assert.equal(fuzzyTimeJS.helpers.getHourWord(11, true), "twelve");
  assert.equal(fuzzyTimeJS.helpers.getHourWord(12, true), "one");
});

test("convert", function (assert) {
  assert.equal(fuzzyTimeJS.convert(0,0), "twelve o'clock");
  assert.equal(fuzzyTimeJS.convert(0, 3), "twelve o'clock");
  assert.equal(fuzzyTimeJS.convert(0, 4), "five past twelve");
  assert.equal(fuzzyTimeJS.convert(0, 7), "five past twelve");
  assert.equal(fuzzyTimeJS.convert(0, 8), "ten past twelve");
})

//test("twelve", window.fuzzyTimeJS());