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
  Parameters:  
    * <> input
    
  Return: 
    * <Boolean> result

* isString  
  Parameters:  
    * <> input

  Return:  
    * <Boolean> result

* isBoolean  
  Parameters:  
    * <> input

  Return:  
    * <Boolean> result

* isArray  
  Parameters:  
    * <> input

  Return:  
    * <Boolean> result

* isUndefined  
  Parameters:  
    * <> input

  Return:  
    * <Boolean> result

* isNull  
  Parameters:  
    * <> input

  Reutrn:  
    * <Boolean> result

* getType  
  Parameters:  
    * <> input

  Return:  
    * <String> type