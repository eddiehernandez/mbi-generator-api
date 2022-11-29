export default class Utils {

    public static getRandomChar(chars: string) {
        return (chars.length > 0) ? chars.charAt(Math.floor(Math.random() * chars.length)) : ''
    }


}