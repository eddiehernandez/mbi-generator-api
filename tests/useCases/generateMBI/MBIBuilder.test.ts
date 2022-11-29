import MBIBuilder from "../../../src/useCases/generateMBI/MBIBuilder"

test ('generate valid mbi', () => {
    const mbi = MBIBuilder.build()
    expect(mbi).toBeDefined()
    expect(mbi.length).toBe(11)
    
    const regex = /^[1-9](?![SLOIBZ])[A-Z](?![SLOIBZ])[A-Z\d]\d(?![SLOIBZ])[A-Z](?![SLOIBZ])[A-Z\d]\d(?![SLOIBZ])[A-Z](?![SLOIBZ])[A-Z]\d\d$/
    expect(regex.test(mbi)).toBeTruthy()
})