interface CodingTask {
    type: "coding";
    id: number;
    status: string;
    language: string;
    linesOfCode: number;
}
interface TeskingTask {
    type: "testing";
    id: number;
    status: string;
    framework: string;
    testCases: number;
}
interface DocumentationTask {
    type: "doc";
    id: number;
    status: string;
    format: string;
    pages: number;
}