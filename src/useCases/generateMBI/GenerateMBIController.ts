import MBIBuilder from "./MBIBuilder";

export default class GenerateMBIController {

    public static generate(): string {
        return MBIBuilder.build()
    }
} 