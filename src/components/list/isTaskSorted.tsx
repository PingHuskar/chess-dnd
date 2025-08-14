export default (tasks: any[], ordFlg: string[]) => {
    let isSorted = true;
    for (let task of tasks) {
        if (ordFlg.length == 0) return false;
        if (task.status == ordFlg[0]) continue
        ordFlg.shift()
        if (task.status != ordFlg[0]) return false;
    }

    return isSorted
}