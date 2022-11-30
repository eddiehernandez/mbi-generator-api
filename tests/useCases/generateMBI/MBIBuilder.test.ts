import MBIBuilder from "../../../src/useCases/generateMBI/MBIBuilder"

const alphas = 'ACDEFGHJKMNPQRTUVWXY' // excluding SLOIBZ
const numbers = '0123456789'
const numbersNoZero = '123456789'
const alphasAndNumbers = alphas.concat(numbers)

test ('generate valid mbi', () => {
    const mbi = MBIBuilder.build()
    expect(mbi).toBeDefined()
    expect(mbi.length).toBe(11)
    
    const regex = /^[1-9](?![SLOIBZ])[A-Z](?![SLOIBZ])[A-Z\d]\d(?![SLOIBZ])[A-Z](?![SLOIBZ])[A-Z\d]\d(?![SLOIBZ])[A-Z](?![SLOIBZ])[A-Z]\d\d$/
    expect(regex.test(mbi)).toBeTruthy()


    expect(numbersNoZero.includes(mbi[0])).toBeTruthy() //pos 1
    expect(alphas.includes(mbi[1])).toBeTruthy() //pos 2
    expect(alphasAndNumbers.includes(mbi[2])).toBeTruthy() //pos 3
    expect(numbers.includes(mbi[3])).toBeTruthy() //pos 4
    expect(alphas.includes(mbi[4])).toBeTruthy() //pos 5
    expect(alphasAndNumbers.includes(mbi[5])).toBeTruthy() //pos 6
    expect(numbers.includes(mbi[6])).toBeTruthy() //pos 7
    expect(alphas.includes(mbi[7])).toBeTruthy() //pos 8
    expect(alphas.includes(mbi[8])).toBeTruthy() //pos 9
    expect(numbers.includes(mbi[9])).toBeTruthy() //pos 10
    expect(numbers.includes(mbi[10])).toBeTruthy() //pos 11



})