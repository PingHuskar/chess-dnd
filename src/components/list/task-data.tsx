import shuffle from "./shuffle";

export type TStatus = 'todo' | 'in-progress' | 'done';
export type TTask = {
    readonly id: string;
    readonly content: string;
    readonly status: TStatus
};

const taskDataKey = Symbol('task');

export type TTaskData = { [taskDataKey]: true; taskId: TTask['id'] };

export function getTaskData(task: TTask): TTaskData {
    return { [taskDataKey]: true, taskId: task.id };
}

export function isTaskData(data: Record<string | symbol, unknown>): data is TTaskData {
    return data[taskDataKey] === true;
}

const tasks: any[] = [
    {
        // text: "Controlling the center",
        text: "ยึดพื้นที่กลางกระดาน",
        phase: "op",
    },
    {
        // text: "Develop pieces",
        text: "พัฒนาหมาก",
        phase: "op",
    },
    {
        // text: "Securing the king",
        text: "คิงได้รับการปกป้อง ให้อยู่ในตาที่ปลอดภัย",
        phase: "op",
    },
    {
        // text: "Maintain a good pawn structure",
        text: "รักษาโครงสร้างเบี้ย",
        phase: "op",
    },
    {
        // text: "Avoid unnecessary moves",
        text: "หลีกเลี่ยงตาเดินที่ไม่จำเป็น",
        phase: "op",
    },
    {
        // text: "Finding a strategic plan",
        text: "หาแผนยุทธศาสตร์",
        phase: "md",
    },
    {
        // text: "Coordinating the pieces",
        text: "ตัวหมากประสานงานกัน",
        phase: "md",
    },
    {
        // text: "Exploiting Weaknesses",
        text: "หาจุดอ่อน เพื่อโจมตี",
        phase: "md",
    },
    {
        text: "การได้เปรียบ เสียเปรียบ ตัวหมาก (tactics)",
        phase: "md",
    },
    {
        // text: "Activating the king",
        text: "คิงสู่พื้นที่กลางกระดาน",
        phase: "en",
    },
    {
        // text: "Promoting a pawn",
        text: "การโปรโมทพอน",
        phase: "en",
    },
];

export function getTasks() {
    return shuffle(tasks.filter(z => z)).map((t, i) => ({
        id: `${i}`,
        content: t.text,
        status: t.phase
    }));
}
