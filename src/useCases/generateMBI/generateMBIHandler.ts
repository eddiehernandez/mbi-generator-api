import HandlersLib from "../../shared/HandlersLib"
import GenerateMBIController from "./GenerateMBIController"

module.exports.main = async (event: any) => {
    try {
        const mbi = GenerateMBIController.generate()
        console.log(`mbi = ${mbi}`)
        const response = {
            mbi: mbi
        }
        return HandlersLib.handlerReponse(200, response)

    }
    catch (e){
        console.log(e)
        return HandlersLib.handlerReponse(500, e.message)
    }
}