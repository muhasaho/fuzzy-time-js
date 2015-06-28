/// <reference path="lib/qunit.js" />

test("the base function exists", function() {
  ok(fuzzyTimeJS);
});

test("no arguments return \"twelve o'clock\"", function(assert){
  assert.equal(fuzzyTimeJS(), "twelve o'clock");
});

//test("twelve", window.fuzzyTimeJS());