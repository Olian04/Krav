# Krav [`[kra:v]`](http://lexin.nada.kth.se/sound/v2/217164_1.mp3)

_Krav = swedish for "requirement" or "demand"_

Home of the soon to be [assertion library based of off the assertion logic from Recordari](https://github.com/Olian04/Recordari/issues/39)

## Demo

```js
const { assert, K } = require('Krav');
// assert(someValue, ...constraints)

assert('dev',
  K.String.Either(['dev', 'prod'])
); // true

assert('prod',
  K.String.Either(['dev', 'prod'])
); // true

assert('staging',
  K.String.Either(['dev', 'prod'])
); // false
```

## Possible Improvements

1. Add dummy constraits (much like chai does) to increase readability of constraits
```js
const { assert, K } = require('Krav');

// The following two asserts should either both fail or both succeed.

const someValue = ...
assert(someValue,
  K.should.be.a.String.and.Either(['dev', 'prod'])
);

assert(someValue,
  K.String.Either(['dev', 'prod'])
);
```

2. Make sure Krav works with libraries such as Mocha and Jest. Maybe look into how Chai does it? <br>
This might be it https://github.com/chaijs/assertion-error

3. Shift around the API to look more like chai `expect`.
```js
const { expect } = require('Krav');

expect('dev')
  .String
  .Either(['dev', 'prod'])
```
Requires major restructuring of the implementation. <br>
Currently `R.String.Exact('dev')` constructs something like an AST that the assertion method later will run. <br>
For this API change to happen, `expect().String.Exact('dev')` would have to emidiatly evaluate `String` and then if that succeeds emidiatly evaluate `Exact('dev')`. <br>
If we do rewrite it like this, then the assert API from above would look like this:
```js
const { assert } = require('Krav');

assert('dev', K =>
  K.String.Either(['dev', 'prod'])
);
```
Note: `assert` and `expect` could be aliases of eachother, and both could implement both APIs with 2 different overloads each.<br>
Ex: 
```js
const { expect, assert, assume } = require('Krav');

expect('dev').String
expect('dev', R => R.String)

assert('dev').String
assert('dev', R => R.String)

assume('dev').String
assume('dev', R => R.String)
```
