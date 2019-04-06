# Krav

_Krav = swedish for "requirement", "demand", "claim", "insistence", etc_

Home of the soon to be [assertion library based of off the assertion logic from Recordari](https://github.com/Olian04/Recordari/issues/39)

## Demo

```js
const { assert, R } = require('Krav');
// assert(someValue, ...constraints: R[])

const someVariable = ...
assert(someVariable,
  R.String.Either(['dev', 'prod'])
);
```
