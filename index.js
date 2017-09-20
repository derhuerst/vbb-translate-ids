'use strict'

const to12Digit = (nine) => {
	if ('string' !== typeof nine) throw new Error('ID must be a string.')
	if (nine.length !== 9) throw new Error('ID must have 9 digits.')

	return nine.slice(0, 1) + '000' + nine.slice(1)
}

const to9Digit = (twelve) => {
	if ('string' !== typeof twelve) throw new Error('ID must be a string.')
	if (twelve.length !== 12) throw new Error('ID must have 12 digits.')

	return twelve.slice(0, 1) + twelve.slice(4)
}

module.exports = {to12Digit, to9Digit}
