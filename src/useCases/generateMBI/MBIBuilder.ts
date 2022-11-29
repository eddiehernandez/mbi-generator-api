import Utils from '../../shared/Utils'


export default class MBIBuilder {

    private static _alphas = 'ACDEFGHJKMNPQRTUVWXY' // excluding SLOIBZ
    private static _numbers = '0123456789'
    private static _numbersNoZero = '123456789'
    private static _alphasAndNumbers = this._alphas.concat(this._numbers)

    public static build(): string {

        let mbi = ''
        for (let i = 1; i <= 11; i++){
            switch (i) {
                case 1: 
                    mbi += Utils.getRandomChar(this._numbersNoZero)
                    break
                case 2:
                case 5:
                case 8:
                case 9:
                    mbi += Utils.getRandomChar(this._alphas)
                    break
                case 3:
                case 6:
                    mbi += Utils.getRandomChar(this._alphasAndNumbers)
                    break
                case 4:
                case 7:
                case 10:
                case 11:
                    mbi += Utils.getRandomChar(this._numbers)
                    break

            }
        }
        return mbi
    }
}