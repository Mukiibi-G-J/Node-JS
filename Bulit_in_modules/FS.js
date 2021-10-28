//------file system-------------------

const {readFileSync, writeFileSync} = require('fs')
 console.log('start')
                        // utf8 is responsable for the decoding
const first = readFileSync('../Content/first.txt', 'utf8')
const second = readFileSync('../Content/second.txt', 'utf8')

console.log(first, second)
const name= 'Joseph'
writeFileSync('../Content/result-sync.txt', `Here is the result ${name} `)

console.log('done with the task')
console.log('starting the next one');