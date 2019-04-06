# Krav [`[kra:v]`](http://lexin.nada.kth.se/sound/v2/217164_1.mp3)

_Krav = swedish for "requirement"_

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
