export default (tasks: any[]) => {
    let cursor = -99;
    for (let task of tasks) {
        if (Number(task.status) < cursor) {
            return false
        }
        cursor = Number(task.status)
    }

    return true
}