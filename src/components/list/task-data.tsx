import shuffle from "./shuffle";

export type TStatus = 'todo' | 'in-progress' | 'done';
export type TTask = { id: string; content: string; status: TStatus };

const taskDataKey = Symbol('task');

export type TTaskData = { [taskDataKey]: true; taskId: TTask['id'] };

export function getTaskData(task: TTask): TTaskData {
    return { [taskDataKey]: true, taskId: task.id };
}

export function isTaskData(data: Record<string | symbol, unknown>): data is TTaskData {
    return data[taskDataKey] === true;
}

// const tasks: TTask[] = [
//     { id: 'task-0', content: 'Organize a team-building event', status: 'todo' },
//     { id: 'task-1', content: 'Create and maintain office inventory', status: 'in-progress' },
//     { id: 'task-2', content: 'Update company website content', status: 'done' },
//     { id: 'task-3', content: 'Plan and execute marketing campaigns', status: 'todo' },
//     { id: 'task-4', content: 'Coordinate employee training sessions', status: 'done' },
//     { id: 'task-5', content: 'Manage facility maintenance', status: 'done' },
//     { id: 'task-6', content: 'Organize customer feedback surveys', status: 'todo' },
//     { id: 'task-7', content: 'Coordinate travel arrangements', status: 'in-progress' },
// ];

const tasks_str: any[] = [
    { text: "Controlling the center", phase: "op" },
    { text: "Develop pieces", phase: "op" },
    { text: "Securing the king", phase: "op" },
    { text: "Maintain a good pedestrian structure", phase: "op" },
    { text: "Avoid unnecessary moves", phase: "op" },
    { text: "Finding a strategic plan", phase: "md" },
    { text: "Coordinating the pieces", phase: "md" },
    { text: "Exploiting Weaknesses", phase: "md" },
    { text: "Executing tactics", phase: "md" },
    { text: "Activating the king", phase: "en" },
    { text: "Promoting a pawn", phase: "en" },
];

export function getTasks() {
    return shuffle(tasks_str.filter(z => z)).map((t, i) => ({
        id: `${i}`,
        content: t.text,
        status: t.phase
    }));
}
