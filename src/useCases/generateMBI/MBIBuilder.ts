import Utils from '../../shared/Utils'


export default class MBIBuilder {

    private static _alphas = 'ACDEFGHJKMNPQRTUVWXY' // excluding SLOIBZ
    private static _numbers = '0123456789'
    private static _numbersNoZero = '123456789'
    private static _alphasAndNumbers = this._alphas.concat(this._numbers)

    public static build(): string {

        let mbi = Utils.getRandomChar(this._numbersNoZero) // pos 1 (1-9)
            mbi += Utils.getRandomChar(this._alphas) //pos 2 (A-Z) excluding SLOIBZ
            mbi += Utils.getRandomChar(this._alphasAndNumbers) //pos 3  (0-9) (A-Z) excluding SLOIBZ
            mbi += Utils.getRandomChar(this._numbers) //pos 4 (0-9)
            mbi += Utils.getRandomChar(this._alphas) //pos 5 (A-Z) excluding SLOIBZ
            mbi += Utils.getRandomChar(this._alphasAndNumbers) //pos 6
            mbi += Utils.getRandomChar(this._numbers) //pos 7 (0-9)
            mbi += Utils.getRandomChar(this._alphas) //pos 8 (A-Z) excluding SLOIBZ
            mbi += Utils.getRandomChar(this._alphas) //pos 9 (A-Z) excluding SLOIBZ
            mbi += Utils.getRandomChar(this._numbers) //pos 10 (0-9)
            mbi += Utils.getRandomChar(this._numbers) //pos 11 (0-9)

        return mbi
    }
}