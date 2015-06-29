/// <reference path="lib/qunit.js" />

test("the base object exists", function() {
  ok(fuzzyTimeJS);
});

test("no arguments return \"twelve o'clock\"", function(assert){
  assert.equal(fuzzyTimeJS.convert(), "twelve o'clock");
});

test("getMinuteWord", function(assert) {
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

//test("twelve", window.fuzzyTimeJS());