import dynboard from "../../pieces/chess/dynboard";

export type Person = {
  userId: string;
  name: string;
  role: string;
  imgSrc: string;
  url: string;
};

export type ColumnType = {
  title: string;
  columnId: string;
  items: Person[];
};
export type ColumnMap = { [columnId: string]: ColumnType };

export function getColumnItems(opening: any, columnName: string) {
  return {
    title:
      columnName == "null" ? "unset".toUpperCase() : columnName.toUpperCase(),
    columnId: columnName,
    items: opening
      .filter((d: any) => d.group == columnName)
      .map((d: any) => ({
        userId: `id:${d.name.replace(/\s/g, "_")}`,
        name: d.name,
        role: d.pgn,
        imgSrc: dynboard(d.fen),
      })),
  };
}

export function getCoorItems(coor: any, columnName: string) {
  return {
    title:
      columnName == "null" ? "unset".toUpperCase() : columnName.toUpperCase(),
    columnId: columnName,
    items: coor
      .filter((d: any) => d.group == columnName)
      .map((d: any) => ({
        userId: `id:${d.name}`,
        name: d.name,
        role: d.group_correct,
        imgSrc: '',
      })),
  };
}

export function getBasicData(columnMap: ColumnMap) {
  const orderedColumnIds = Object.keys(columnMap);

  return {
    columnMap,
    orderedColumnIds,
  };
}
