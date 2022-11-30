import GenerateMBIController from '../../../src/useCases/generateMBI/GenerateMBIController'



test ('generate mbi controller generate', () => {
    const mbi: string = GenerateMBIController.generate()
    expect(mbi).toBeDefined()
    expect(mbi.length).toBe(11)
})