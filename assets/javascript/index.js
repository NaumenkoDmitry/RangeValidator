'use strict';

class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  get from() {
    return this._from;
  }

  set from(newFrom) {
    if (isNaN(newFrom) || typeof newFrom !== "number") {
      throw new TypeError("Invalid Type");
    }

    if (this.to < newFrom) {
      throw new RangeError("in to cannot be greater than in from");
    }

    this._from = newFrom;
  }

  get to() {
    return this._to;
  }

  set to(newTo) {
    if (isNaN(newTo) || typeof newTo !== "number") {
      throw new TypeError("Invalid Type");
    }

    if (this.from > newTo) {
      throw new RangeError("in from cannot be less than in to");
    }

    this._to = newTo;
  }

  get range() {
    return [this.from, this.to];
  }

  validate(num) {
    if (isNaN(num) || typeof num !== "number") {
      throw new TypeError("Invalid Type");
    }

    if (num > this.from && num < this.to) {
      return num;
    }
    throw new RangeError("Number is not in range");
  }
}

const arr = new RangeValidator(10,30);