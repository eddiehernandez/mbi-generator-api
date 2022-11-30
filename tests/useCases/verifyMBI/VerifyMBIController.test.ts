import VerifyMBIController from "../../../src/useCases/verifyMBI/VerifyMBIController"

test ('verify mbi controller returns false', () => {
    const response = VerifyMBIController.verify('123')
    expect(response).toBeDefined()
    expect(response).toBe(false)
})

test ('verify mbi controller returns true', () => {
    const response = VerifyMBIController.verify('4HW6FD5FR80')
    expect(response).toBeDefined()
    expect(response).toBe(true)
})