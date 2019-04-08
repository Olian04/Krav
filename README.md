__WIP NOTICE:__ Krav is very much still a WIP and in no condition to be used by anyone!

![](https://img.shields.io/npm/v/krav/latest.svg)
![](https://img.shields.io/npm/v/krav/canary.svg)
![](https://img.shields.io/npm/dt/krav.svg)
![](https://img.shields.io/npm/l/krav.svg) <br>
![](https://img.shields.io/npm/types/krav.svg)
[![codecov](https://codecov.io/gh/Olian04/Krav/branch/master/graph/badge.svg?token=KVbr4USXq4)](https://codecov.io/gh/Olian04/Krav)
[![CI Status](https://wdp9fww0r9.execute-api.us-west-2.amazonaws.com/production/badge/Olian04/Krav?label=CI+Status)](https://wdp9fww0r9.execute-api.us-west-2.amazonaws.com/production/results/Olian04/Krav)

# Krav [`[kra:v]`](http://lexin.nada.kth.se/sound/v2/217164_1.mp3)

_Krav = swedish for "requirement" or "demand"_

```js
const { expect, assert, assume } = require('Krav');

expect(someValue).String.Length.Min(2);

expect(someValue).String.Either(['hi', 'hello']);

expect(someValue).String.Exact('blueberry');
```

## Docs

See https://github.com/Olian04/Recordari/blob/master/docs/constraints.md for future reference
