export default class MBISpecification {

    public static isSatisfiedBy(mbi: string){
        const regex = /^[1-9](?![SLOIBZ])[A-Z](?![SLOIBZ])[A-Z\d]\d(?![SLOIBZ])[A-Z](?![SLOIBZ])[A-Z\d]\d(?![SLOIBZ])[A-Z](?![SLOIBZ])[A-Z]\d\d$/
        const valid = regex.test(mbi)
        return valid
    }

}