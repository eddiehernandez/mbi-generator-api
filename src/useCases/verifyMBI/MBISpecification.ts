export default class MBISpecification {

    public static isSatisfiedBy(mbi: string){
        return /^[1-9](?![SLOIBZ])[A-Z](?![SLOIBZ])[A-Z\d]\d(?![SLOIBZ])[A-Z](?![SLOIBZ])[A-Z\d]\d(?![SLOIBZ])[A-Z](?![SLOIBZ])[A-Z]\d\d$/.test(mbi)
    }

}