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
