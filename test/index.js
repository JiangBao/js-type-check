const assert = require('assert');
const typeCheck = require('../index');

describe('check type', () => {
  // check number
  describe('check number', () => {
    it('should return true isNumber(1)', () => {
      assert.equal(true, typeCheck.isNumber(1))
    })
    it('should return false isNumber(test)', () => {
      assert.equal(false, typeCheck.isNumber('test'))
    })
  })

  // check string
  describe('check string', () => {
    it('should return true isString(test)', () => {
      assert.equal(true, typeCheck.isString('test'))
    })
    it('should return false isString(undefined)', () => {
      assert.equal(false, typeCheck.isString())
    })
    it('should return false isString(null)', () => {
      assert.equal(false, typeCheck.isString(null))
    })
  })

  // check boolean
  describe('check boolean', () => {
    it('should return true isBoolean(true)', () => {
      assert.equal(true, typeCheck.isBoolean(true))
    })
    it('should return false isBoolean(null)', () => {
      assert.equal(false, typeCheck.isBoolean(null))
    })
    it('should return false isBoolean(`true`)', () => {
      assert.equal(false, typeCheck.isBoolean('true'))
    })
  })

  // check array
  describe('check array', () => {
    it('should return true isArray([1, 2, 3])', () => {
      assert.equal(true, typeCheck.isArray([1, 2, 3]))
    })
    it('should return false isArray(`[1, 2, 3]`)', () => {
      assert.equal(false, typeCheck.isArray('[1, 2, 3]'))
    })
    it('should return false isArray({key: value})', () => {
      assert.equal(false, typeCheck.isArray({key: 'value'}))
    })
  })

  // check undefined
  describe('check undefined', () => {
    it('should return true idUndefined()', () => {
      assert.equal(true, typeCheck.isUndefined())
    })
    it('should return false isUndefined(null)', () => {
      assert.equal(false, typeCheck.isUndefined(null))
    })
  })

  // check null
  describe('check null', () => {
    it('should return true isNull(null)', () => {
      assert.equal(true, typeCheck.isNull(null))
    })
    it('should return false isNull(`null`)', () => {
      assert.equal(false, typeCheck.isNull('null'))
    })
    it('should return false isNull([])', () => {
      assert.equal(false, typeCheck.isNull([]))
    })
  })
})

describe('get type', () => {
  it('should return number getType(1)', () => {
    assert.equal('number', typeCheck.getType(1))
  })
  it('should return string getType(`test`)', () => {
    assert.equal('string', typeCheck.getType('test'))
  })
  it('should return boolean getType(true)', () => {
    assert.equal('boolean', typeCheck.getType(true))
  })
  it('should return array getType([1, 2, 3])', () => {
    assert.equal('array', typeCheck.getType([1, 2, 3]))
  })
  it('should return undefined getType()', () => {
    assert.equal('undefined', typeCheck.getType())
  })
  it('should return null getType(null)', () => {
    assert.equal('null', typeCheck.getType(null))
  })
  it('should return object getType({key: value})', () => {
    assert.equal('object', typeCheck.getType({key: 'value'}))
  })
})