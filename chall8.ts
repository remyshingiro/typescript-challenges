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

type Task = CodingTask | TeskingTask | DocumentationTask;

const formatTaskSummary = (task: Task): string => {
    switch(task.type){
        case 'coding':
            return `Coding task #${task.id} in ${task.language}: <${task.status}>`;
        case 'testing':
            return `Testing task #${task.id} with ${task.framework}: ${task.testCases} test cases, status: ${task.status}`;
        case 'doc':
            return `Documentation task ${task.id} (${task.format}): ${task.pages} pages, status: ${task.status}`;
    }   
}

function filterTasksByStatus<T extends Task>(tasks: T[], status: string): T[] {
    return tasks.filter(task => task.status === status);
    
}