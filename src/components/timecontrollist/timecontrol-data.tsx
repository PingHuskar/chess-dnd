import capitalizeFirstLetter from "./capitalizeFirstLetter";
import shuffle from "./shuffle";

export type TStatus = 'todo' | 'in-progress' | 'done';
export type TTask = {
    readonly id: string;
    readonly content: string;
    readonly status: TStatus
};

const timeControlDataKey = Symbol('timeControl');

export type TTaskData = { [timeControlDataKey]: true; taskId: TTask['id'] };

export function getTaskData(task: TTask): TTaskData {
    return { [timeControlDataKey]: true, taskId: task.id };
}

export function isTaskData(data: Record<string | symbol, unknown>): data is TTaskData {
    return data[timeControlDataKey] === true;
}

type tasksProps = {
    text: string;
    time: string;
}

const tasks: tasksProps[] = [
    {
        text: "bullet",
        time: "1",
    },
    {
        text: "blitz",
        time: "3",
    },
    {
        text: "rapid",
        time: "10",
    },
    {
        text: "classic",
        time: "40",
    },
    {
        text: "daily",
        time: "1440",
    },
];

export function getTimeControls() {
    return shuffle(tasks.filter(z => z)).map((t, i) => ({
        id: `${i}`,
        content: capitalizeFirstLetter(t.text),
        status: t.time
    }));
}
