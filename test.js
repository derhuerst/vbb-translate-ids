'use strict'

const assert = require('assert')

const {to12Digit, to9Digit} = require('.')

// Berlin Hauptbahnhof
assert.strictEqual(to12Digit('900003201'), '900000003201')
assert.strictEqual(to9Digit('900000003201'), '900003201')
assert.strictEqual(to9Digit('9003201'), '900003201')
assert.strictEqual(to12Digit('9003201'), '900000003201')

assert.strictEqual(to12Digit('123'), '123')
assert.strictEqual(to9Digit('123'), '123')
