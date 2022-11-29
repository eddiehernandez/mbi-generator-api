import HandlersLib from "../../shared/HandlersLib"
import VerifyMBIController from "./VerifyMBIController"

module.exports.main = async (event: any) => {

    const mbi = JSON.parse(event?.body)?.mbi
    let valid = false

    if (!mbi) 
        return HandlersLib.handlerReponse(400, {
            message: `mbi is required for verification`
    })

    try {
        valid = VerifyMBIController.verify(mbi)
        const response = {
            mbi: mbi,
            valid: valid
        }
        
        return HandlersLib.handlerReponse(200, response)
    }
    catch (e){
        return HandlersLib.handlerReponse(500, e.message)
    }



}