import MBISpecification from "./MBISpecification";

export default class VerifyMBIController {

    public static verify (mbi: string): boolean {
        return MBISpecification.isSatisfiedBy(mbi)
    }

}