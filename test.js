'use strict'

const assert = require('assert')

const oldToNew = require('./old-to-new.json')
const newToOld = require('./new-to-old.json')



assert(Object.keys(oldToNew).length > 0, '0 stations')
assert(Object.keys(newToOld).length > 0, '0 stations')

for (let oldId in oldToNew) {
	assert.strictEqual(oldId.length, 7, `old id ${oldId} has invalid length of ${oldId.length}`)
	const newId = oldToNew[oldId]
	if (newId.length !== 12 && newId.length !== 7)
		assert.ifError(`new id ${newId} has invalid length of ${newId.length}`)
	assert.strictEqual(newToOld[newId], oldId, `pair ${oldId} -> ${newId} doesn't match`)
}
