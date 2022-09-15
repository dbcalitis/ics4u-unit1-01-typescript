/**
 * The program shows how to get input
 *   and deal with numbers
 * By:      Daria Bernice Calitis
 * Version: 1.0
 * Since:   2022-09-13
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()

const WEIGHT_CAPACITY = 1100
const LOG_DENSITY = 20

const logLength = prompt('Enter the length of the maple logs (m): ')
const logLengthInt = parseInt(logLength)

const numberOfLogs = WEIGHT_CAPACITY / LOG_DENSITY / logLengthInt

console.log(`${numberOfLogs} logs can fit into the truck`)

console.log('\nDone.')
