# vbb-translate-ids

**Translate VBB ids old -> new & new -> old.**

[![npm version](https://img.shields.io/npm/v/vbb-translate-ids.svg)](https://www.npmjs.com/package/vbb-translate-ids)
[![build status](https://img.shields.io/travis/derhuerst/vbb-translate-ids.svg)](https://travis-ci.org/derhuerst/vbb-translate-ids)
[![dependency status](https://img.shields.io/david/derhuerst/vbb-translate-ids.svg)](https://david-dm.org/derhuerst/vbb-translate-ids)
[![dev dependency status](https://img.shields.io/david/dev/derhuerst/vbb-translate-ids.svg)](https://david-dm.org/derhuerst/vbb-translate-ids#info=devDependencies)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/vbb-translate-ids.svg)
[![gitter channel](https://badges.gitter.im/derhuerst/vbb-rest.svg)](https://gitter.im/derhuerst/vbb-rest)


## Installing

```shell
npm install vbb-translate-ids
```


## Usage

```js
const oldToNew = require('vbb-translate-ids/old-to-new.json')
const newToOld = require('vbb-translate-ids/new-to-old.json')

oldToNew['9042101'] // '900000042101'
newToOld['900000042101'] // '9042101'
```


## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/derhuerst/vbb-translate-ids/issues).
