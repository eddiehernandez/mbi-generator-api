import Utils from '../../src/shared/Utils'

const chars = 'ABCabcxyzXYZ'

describe('get random char tests', () => {

    test ('get valid random character', () => {

        const char = Utils.getRandomChar(chars)
        expect(chars.includes(char)).toBeTruthy()
    })
    test ('get empty char', () => {

        const char = Utils.getRandomChar('')
        expect(char).toBe('')
    })



})


