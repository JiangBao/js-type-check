/**
 * js-type-check <https://github.com/JiangBao/js-type-check>
 * Licensed under the MIT license.
 */

let typeCheck = {
  // check Number
  // @param  {}
  // @return {Boolean}
  isNumber: (input) => {
    return typeof input === 'number';
  },

  // check String
  // @param  {}
  // @return {Boolean}
  isString: (input) => {
    return typeof input === 'string';
  },

  // check Boolean
  // @param  {}
  // @return {Boolean}
  isBoolean: (input) => {
    return typeof input === 'boolean'
  },

  // check Array
  // @param  {}
  // @return {Boolean}
  isArray: (input) => {
    if (Array.isArray) {
      return Array.isArray(input);
    } else {
      return Object.prototype.toString.call(input) === "[object array]";
    }
  },

  // check Undefined
  // @param  {}
  // @return {Boolean}
  isUndefined: (input) => {
    return typeof input === 'undefined';
  },

  // check Null
  // @param  {}
  // @return {Boolean}
  isNull: (input) => {
    return input === null;
  },

  // get type name
  // @param  {}
  // @return {String}
  getType: (input) => {
    if (typeCheck.isNull(input)) {
      return 'null';
    }

    const type = typeof input;
    if (type === 'object') {
      if (typeCheck.isArray(input)) {
        return 'array';
      } else {
        return 'object';
      }
    } else {
      return type;
    }
  }
};

module.exports = typeCheck;
