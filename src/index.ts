/**
 * The program shows how to get input
 *   and deal with numbers
 * By:      Daria Bernice Calitis
 * Version: 1.0
 * Since:   2022-09-13
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()

const logLength = prompt('Enter the length of the maple logs (m): ')
const logLengthInt = Number(logLength)

const weightCapacity = 1100
const logDensity = 20

const numberOfLogs = weightCapacity / logDensity / logLengthInt

console.log(`${numberOfLogs} logs can fit into the truck`)

console.log('\nDone.')
