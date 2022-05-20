function squareRoot(number) {
  'use strict';
  if (number < 0) {
    throw new RangeError("You can't find the square root of negative numbers");
  }
  return Math.sqrt(number);
}
