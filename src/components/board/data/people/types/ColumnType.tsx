import type { Person } from "./Person";

export type ColumnType = {
  title: string;
  columnId: string;
  items: Person[];
};
