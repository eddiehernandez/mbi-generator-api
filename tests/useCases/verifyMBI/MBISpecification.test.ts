import MBISpecification from "../../../src/useCases/verifyMBI/MBISpecification"

describe ('test mbi specification', () => {

    test('empty mbi invalid', () => {
        const valid = MBISpecification.isSatisfiedBy('')
        expect(valid).toBeFalsy()
    })

    test('good mbi is valid', () => {
        const valid = MBISpecification.isSatisfiedBy('4HW6FD5FR80')
        expect(valid).toBeTruthy()
    })

    test('invalid mbis return false', () => {
        let valid = MBISpecification.isSatisfiedBy('#HW6FD5FR80') // bad 1st digit
        expect(valid).toBeFalsy()

        valid = MBISpecification.isSatisfiedBy('47W6FD5FR80') //bad 2nd digit
        expect(valid).toBeFalsy()

        valid = MBISpecification.isSatisfiedBy('4aW6FD5FR80') //bad 2nd digit with lower case letter
        expect(valid).toBeFalsy()

        valid = MBISpecification.isSatisfiedBy('4YW6FD5FR80') //bad 2nd digit with lower case letter
        expect(valid).toBeTruthy()

        valid = MBISpecification.isSatisfiedBy('4H?6FD5FR80') //bad 3rd digit
        expect(valid).toBeFalsy()

        valid = MBISpecification.isSatisfiedBy('4HWdFD5FR80') //bad 4th digit
        expect(valid).toBeFalsy()

        valid = MBISpecification.isSatisfiedBy('4HW63D5FR80') //bad 5th digit
        expect(valid).toBeFalsy()

        valid = MBISpecification.isSatisfiedBy('4HW6Fr5FR80') //bad 6th digit
        expect(valid).toBeFalsy()

        valid = MBISpecification.isSatisfiedBy('4HW6FDEFR80') //bad 7th digit
        expect(valid).toBeFalsy()

        valid = MBISpecification.isSatisfiedBy('4HW6FD5BR80') //bad 8th digit
        expect(valid).toBeFalsy()

        valid = MBISpecification.isSatisfiedBy('4HW6FD5F280') //bad 9th digit
        expect(valid).toBeFalsy()

        valid = MBISpecification.isSatisfiedBy('4HW6FD5FRI0') //bad 10th digit
        expect(valid).toBeFalsy()

        valid = MBISpecification.isSatisfiedBy('4HW6FD5FR8Z') //bad 11th digit
        expect(valid).toBeFalsy()

    })


})


