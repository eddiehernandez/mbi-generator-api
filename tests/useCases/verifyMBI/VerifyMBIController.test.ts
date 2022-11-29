import VerifyMBIController from "../../../src/useCases/verifyMBI/VerifyMBIController"

test ('verify mbi controller returns value', () => {
    const response = VerifyMBIController.verify('123')
    expect(response).toBeDefined()
})