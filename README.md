[![npm](http://img.shields.io/npm/v/webpack-tiny-progress.svg?style=flat-square)](https://www.npmjs.com/package/webpack-tiny-progress)
[![npm](http://img.shields.io/npm/l/webpack-tiny-progress.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![Dependency Status](https://david-dm.org/aliaksandr-master/webpack-tiny-progress.svg?style=flat-square)](https://david-dm.org/aliaksandr-master/webpack-tiny-progress)
[![devDependency Status](https://david-dm.org/aliaksandr-master/webpack-tiny-progress/dev-status.svg?style=flat-square)](https://david-dm.org/aliaksandr-master/webpack-tiny-progress#info=devDependencies)
[![peerDependency Status](https://david-dm.org/aliaksandr-master/webpack-tiny-progress/peer-status.svg?style=flat-square)](https://david-dm.org/aliaksandr-master/webpack-tiny-progress?type=peer)

# webpack-tiny-progress

```shell
$ npm install webpack
$ npm install webpack-tiny-progress --save
```


## usage:
```
const webpackProgress = require('webpack--tiny-progress');


config.plugins.push(webpackProgress());

```

## example of output
```stdout
[webpack compiling] 0% compiling (0.01s)
[webpack compiling] 70% building modules (41.55s)
[webpack compiling] 71% sealing (0.42s)
[webpack compiling] 72% optimizing (0.04s)
[webpack compiling] 73% basic module optimization (0.00s)
[webpack compiling] 74% module optimization (0.00s)
[webpack compiling] 75% advanced module optimization (0.02s)
[webpack compiling] 76% basic chunk optimization (0.13s)
[webpack compiling] 77% chunk optimization (0.00s)
[webpack compiling] 78% advanced chunk optimization (0.00s)
[webpack compiling] 79% module and chunk tree optimization (0.00s)
[webpack compiling] 80% module reviving (0.00s)
[webpack compiling] 81% module order optimization (0.24s)
[webpack compiling] 82% module id optimization (0.01s)
[webpack compiling] 83% chunk reviving (0.00s)
[webpack compiling] 84% chunk order optimization (0.02s)
[webpack compiling] 85% chunk id optimization (0.15s)
[webpack compiling] 86% hashing (0.09s)
[webpack compiling] 87% module assets processing (0.00s)
[webpack compiling] 88% chunk assets processing (0.71s)
[webpack compiling] 89% additional chunk assets processing (0.02s)
[webpack compiling] 90% recording (0.00s)
[webpack compiling] 91% additional asset processing (0.00s)
[webpack compiling] 92% chunk asset optimization (0.00s)
[webpack compiling] 94% asset optimization (0.00s)
[webpack compiling] 95% emitting (1.25s)
[webpack compiling] 100% (44.68s)
```
