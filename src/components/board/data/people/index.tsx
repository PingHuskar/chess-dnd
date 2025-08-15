/**
 * These imports are written out explicitly because they
 * need to be statically analyzable to be uploaded to CodeSandbox correctly.
 */

import BennyWatts from "./images/chesscom/BennyWatts.png"
import BethHarmon from "./images/chesscom/BethHarmon.png"
import Botez from "./images/chesscom/Botez.png"
import Caissa from "./images/chesscom/Caissa.png"
import VasilyBorgov from "./images/chesscom/VasilyBorgov.png"
import Ping from "./images/chesscom/Ping.png"

export type Person = {
    userId: string;
    name: string;
    role: string;
    avatarUrl: string;
};

const avatarMap: Record<string, string> = {
    Caissa,
    BennyWatts,
    BethHarmon,
    Botez,
    VasilyBorgov,
    Ping,
};

const names: string[] = Object.keys(avatarMap);

// const roles: string[] = [
//     "Engineer",
//     "Senior Engineer",
//     "Principal Engineer",
//     "Engineering Manager",
//     "Designer",
//     "Senior Designer",
//     "Lead Designer",
//     "Design Manager",
//     "Content Designer",
//     "Product Manager",
//     "Program Manager",
// ];

let sharedLookupIndex: number = -1;

/**
 * Note: this does not use randomness so that it is stable for VR tests
 */
export function getPerson(): Person {
    sharedLookupIndex++;
    return getPersonFromPosition({ position: sharedLookupIndex });
}

export function getPersonFromPosition({
    position,
}: {
    position: number;
}): Person {
    // use the next name
    const name = names[position % names.length];
    // use the next role
    // const role = roles[position % roles.length];
    return {
        userId: `id:${position}`,
        name,
        role: "",
        avatarUrl: avatarMap[name],
    };
}

export function getPeopleFromPosition({
    amount,
    startIndex,
}: {
    amount: number;
    startIndex: number;
}): Person[] {
    return Array.from({ length: amount }, () =>
        getPersonFromPosition({ position: startIndex++ })
    );
}

export function getPeople({ amount }: { amount: number }): Person[] {
    return Array.from({ length: amount }, () => getPerson());
}

export type ColumnType = {
    title: string;
    columnId: string;
    items: Person[];
};
export type ColumnMap = { [columnId: string]: ColumnType };

export function getData({
    columnCount,
    itemsPerColumn,
}: {
    columnCount: number;
    itemsPerColumn: number;
}) {
    const columnMap: ColumnMap = {};

    for (let i = 0; i < columnCount; i++) {
        const column: ColumnType = {
            title: `Column ${i}`,
            columnId: `column-${i}`,
            items: getPeople({ amount: itemsPerColumn }),
        };
        columnMap[column.columnId] = column;
    }
    const orderedColumnIds = Object.keys(columnMap);

    return {
        columnMap,
        orderedColumnIds,
        lastOperation: null,
    };
}

export function getBasicData() {
    let columnMap: ColumnMap = {
        g1: {
            title: "g1",
            columnId: "g1",
            items: getPeople({ amount: 1 }),
        },
        g2: {
            title: "g2",
            columnId: "g2",
            items: getPeople({ amount: names.length - 2 }),
        },
        g3: {
            title: "g3",
            columnId: "g3",
            items: getPeople({ amount: 1 }),
        },
    };

    const orderedColumnIds = Object.keys(columnMap);

    return {
        columnMap,
        orderedColumnIds,
    };
}