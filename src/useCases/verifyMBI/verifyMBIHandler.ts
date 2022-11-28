import HandlersLib from "../../utils/HandlersLib"

module.exports.main = async (event: any) => {

    const mbi = JSON.parse(event?.body)?.mbi
    let valid = false

    if (!mbi) 
        return HandlersLib.handlerReponse(400, {
            message: `mbi is required for verification`
    })

    const response = {
        validMBI: valid
    }
    
    return HandlersLib.handlerReponse(200, response)
}