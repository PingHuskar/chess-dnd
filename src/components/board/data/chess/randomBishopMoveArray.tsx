import { RandomTile, IsDiagonal } from "iswhitetile"
import unique from "../../../../lib/unique"

export default function randomBishopMoveArray(size = 16) {
    let arr = []
    while (true) {
        const [from, to] = [RandomTile(), RandomTile()]
        if (from.startsWith(to[0])) continue
        if (from[1] === to[1]) continue
        arr.push({
            name: `${from}-${to}`,
            group: "NA",
            group_correct: IsDiagonal(from, to) ? "IsDiagonal" : "IsNotDiagonal",
            url: `#`,
        },)
        if (unique(arr).filter(w => w.group_correct === "IsDiagonal").length >= size) break
    }
    const IsNotDiagonal = arr.filter((i) => i.group_correct == "IsNotDiagonal")
    arr = arr.filter((i) => i.group_correct == "IsDiagonal")
    arr = [...arr, ...IsNotDiagonal.slice(0, size)]
    return arr
}