# type-check 
> check the type of js

## Usage
```js
npm install js-type-check --save

const typeCheck = require('js-type-check');
```

## Test
```
npm run test
```

## Example
```js
const typeCheck = require('js-type-check');

typeCheck.isNumber(1);
// => true

typeCheck.isString('test');
// => true

typeCheck.isNull('null');
// => false

typeCheck.getType([1, 2, 3])
// => array
```

## API
* isNumber
* isString
* isBoolean
* isArray
* isUndefined
* isNull
* getType