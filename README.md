# function-ts

function-ts is a JS,TS library for dealing with functions.

## Installation

Use the package manager [npm/yarn](https://www.npmjs.com/package/function-ts) to install function-ts.

```bash
npm install function-ts
```

```bash
yarn add function-ts
```

## Usage

```js
import { addArgs, addArray, addObj } from 'function-ts'

# returns 'summetion of multiple numbers'
console.log(addArgs(3, 5, 4, ...)) // 12

# returns 'summetion of array numbers with currency'
console.log(addArray([2, 3], "USD")); // $5.00

# returns 'summetion of array numbers'
console.log(addArray([2, 3])); // 5

# returns 'summetion of object numbers'
console.log(addObj({ a: 1, b: 2, c: 3 })); //6

```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
