'use strict'

const xlsx = require('xlsx-rows')
const path = require('path')
const fs = require('fs')

const data = xlsx(path.join(__dirname, 'data/old-to-new.xlsx'))
	.slice(1)
	.map((row) => ({old: row[0], new: row[1]}))



const oldToNew = {}
const newToOld = {}

for (let row of data) {
	oldToNew[row.old] = row.new
	newToOld[row.new] = row.old
}

fs.writeFileSync(path.join(__dirname, 'old-to-new.json'), JSON.stringify(oldToNew))
fs.writeFileSync(path.join(__dirname, 'new-to-old.json'), JSON.stringify(newToOld))
