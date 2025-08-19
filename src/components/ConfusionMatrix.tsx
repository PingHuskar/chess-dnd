function WhiteBlack({ data }: { readonly data: any }) {
    const [
        TPs,
        FPs,
        FNs,
        TNs,
    ] = [
            data.columnMap.white.items.filter((i: any) => i.role === "white").length,
            data.columnMap.white.items.filter((i: any) => i.role === "black").length,
            data.columnMap.black.items.filter((i: any) => i.role === "white").length,
            data.columnMap.black.items.filter((i: any) => i.role === "black").length
        ]
    return <div className={`flex w-full justify-center `}>
        <table className={`border-2`}>
            <thead className={`border-2`}>
                <tr>
                    <th>{((TPs + TNs) / (TPs + TNs + FPs + FNs) * 100).toFixed(2)}%</th>
                    <th className={`border-2`}>Actual White</th>
                    <th className={`border-2`}>Actual Black</th>
                </tr>
            </thead>
            <tbody>
                <tr className={`border-2`}>
                    <td>Answer White</td>
                    <td className={`border-2`}>{TPs}</td>
                    <td className={`border-2`}>{FPs}</td>
                </tr>
                <tr className={`border-2`}>
                    <td>Answer Black</td>
                    <td className={`border-2`}>{FNs}</td>
                    <td className={`border-2`}>{TNs}</td>
                </tr>
            </tbody>
        </table>
    </div>
}

function BishopMove({ data }: { readonly data: any }) {
    const [
        TPs,
        FPs,
        FNs,
        TNs,
    ] = [
            data.columnMap.IsDiagonal.items.filter((i: any) => i.role === "IsDiagonal").length,
            data.columnMap.IsDiagonal.items.filter((i: any) => i.role === "IsNotDiagonal").length,
            data.columnMap.IsNotDiagonal.items.filter((i: any) => i.role === "IsDiagonal").length,
            data.columnMap.IsNotDiagonal.items.filter((i: any) => i.role === "IsNotDiagonal").length
        ]
    return <div className={`flex w-full justify-center `}>
        <table className={`border-2`}>
            <thead className={`border-2`}>
                <tr>
                    <th>{((TPs + TNs) / (TPs + TNs + FPs + FNs) * 100).toFixed(2)}%</th>
                    <th className={`border-2`}>Actual IsDiagonal</th>
                    <th className={`border-2`}>Actual IsNotDiagonal</th>
                </tr>
            </thead>
            <tbody>
                <tr className={`border-2`}>
                    <td>Answer IsDiagonal</td>
                    <td className={`border-2`}>{TPs}</td>
                    <td className={`border-2`}>{FPs}</td>
                </tr>
                <tr className={`border-2`}>
                    <td>Answer IsNotDiagonal</td>
                    <td className={`border-2`}>{FNs}</td>
                    <td className={`border-2`}>{TNs}</td>
                </tr>
            </tbody>
        </table>
    </div>
}


function KnightLegal({ data }: { data: any }) {
    const [
        countCorrect,
        countIncorrect,
    ] = [
            data.columnMap.N2.items.filter((i: any) => i.role === "N2").length +
            data.columnMap.N3.items.filter((i: any) => i.role === "N3").length +
            data.columnMap.N4.items.filter((i: any) => i.role === "N4").length +
            data.columnMap.N6.items.filter((i: any) => i.role === "N6").length +
            data.columnMap.N8.items.filter((i: any) => i.role === "N8").length,
            data.columnMap.N2.items.filter((i: any) => i.role !== "N2").length +
            data.columnMap.N3.items.filter((i: any) => i.role !== "N3").length +
            data.columnMap.N4.items.filter((i: any) => i.role !== "N4").length +
            data.columnMap.N6.items.filter((i: any) => i.role !== "N6").length +
            data.columnMap.N8.items.filter((i: any) => i.role !== "N8").length,
        ]
    return <div className={`flex w-full justify-center`}>
        <table className={`border-2`}>
            <thead className={`border-2`}>
                <tr>
                    <th></th>
                    <th className={`border-2`}>Correct</th>
                    <th className={`border-2`}>Incorrect</th>
                </tr>
            </thead>
            <tbody>
                <tr className={`border-2`}>
                    <td>Results</td>
                    <td className={`border-2`}>{countCorrect}</td>
                    <td className={`border-2`}>{countIncorrect}</td>
                </tr>
            </tbody>
        </table>
    </div>
}

type ConfusionMatrixProps = {
    readonly matrix: string,
    readonly data: any,
}
export default function ConfusionMatrix({ matrix, data }: ConfusionMatrixProps) {
    switch (matrix) {
        case `WhiteBlack`:
            return <WhiteBlack data={data} />;
        case `KnightLegal`:
            return <KnightLegal data={data} />;
        case `BishopMove`:
            return <BishopMove data={data} />;

        default:
            break;
    }
}