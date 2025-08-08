import dynboard from "../../pieces/board/dynboard";
import opening from "./opening";

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

export function getBasicData() {
  const filter_data = opening.filter((d) => d.fen);
  const columnMap: ColumnMap = {
    null: getColumnItems(filter_data, "null"),
    beginner: getColumnItems(filter_data, "beginner"),
    intermediate: getColumnItems(filter_data, "intermediate"),
    advanced: getColumnItems(filter_data, "advanced"),
    blitz: getColumnItems(filter_data, "blitz"),
    bullet: getColumnItems(filter_data, "bullet"),
    tournament: getColumnItems(filter_data, "tournament"),
  };

  const orderedColumnIds = Object.keys(columnMap);

  return {
    columnMap,
    orderedColumnIds,
  };
}
