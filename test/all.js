/// <reference path="lib/qunit.js" />

test("the base function exists", function() {
  ok(fuzzyTimeJS);
});

test("default arguments", function(assert){
  assert.equal(fuzzyTimeJS(), "twelve o'clock");
});

//test("twelve", window.fuzzyTimeJS());