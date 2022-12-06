import HandlersLib from "../../shared/HandlersLib"
import VerifyMBIController from "./VerifyMBIController"

module.exports.main = async (event: any) => {

    try {
        if (!event.body){
            return HandlersLib.handlerReponse(400, {
                message: `mbi is required for verification`
            })
        }

        const mbi = JSON.parse(event.body).mbi
        let valid = false

        if (!mbi) {
            return HandlersLib.handlerReponse(400, {
                message: `mbi is required for verification`
            })
        }

        valid = VerifyMBIController.verify(mbi)
        const response = {
            mbi: mbi,
            valid: valid.toString()
        }
        
        return HandlersLib.handlerReponse(200, response)
    }
    catch (e){
        console.log(e)
        return HandlersLib.handlerReponse(500, e.message)
    }

}