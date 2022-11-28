import HandlersLib from "../../utils/HandlersLib"

module.exports.main = async (event: any) => {

    const mbi = '123-456-7890'
    
    return HandlersLib.handlerReponse(200, mbi)
}