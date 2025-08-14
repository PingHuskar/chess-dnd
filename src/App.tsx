import './App.css'
import Board from './components/ChessBoard'
import PeopleBoardRow from './components/PeopleBoardRow'
import PeopleBoardColumn from './components/PeopleBoardColumn'
import { getBasicData, getColumnItems, type ColumnMap } from './components/board/data/chess';
import opening from './components/board/data/chess/opening';
import { getBasicData as getPeople } from './components/board/data/people';
import { List } from './components/list/list';

function App() {

  return (
    <>
      <List />
      <br />
      <hr />
      <br />
      <Board height={1200} initData={() => {
        const columnMap: ColumnMap = {
          null: getColumnItems(opening, "null"),
          beginner: getColumnItems(opening, "beginner"),
          intermediate: getColumnItems(opening, "intermediate"),
          advanced: getColumnItems(opening, "advanced"),
          blitz: getColumnItems(opening, "blitz"),
          bullet: getColumnItems(opening, "bullet"),
          tournament: getColumnItems(opening, "tournament"),
        };
        const base = getBasicData(columnMap);
        return {
          ...base,
          lastOperation: null,
        };
      }} />
      <Board height={400} initData={() => {
        const columnMap: ColumnMap = {
          // null: getColumnItems(opening, "null"),
          beginner: getColumnItems(opening, "beginner"),
          intermediate: getColumnItems(opening, "intermediate"),
          advanced: getColumnItems(opening, "advanced"),
        };
        const base = getBasicData(columnMap);
        return {
          ...base,
          lastOperation: null,
        };
      }} />
      <hr />
      <PeopleBoardColumn
        initData={() => {
          const base = getPeople();
          return {
            ...base,
            lastOperation: null,
          };
        }} />
      <PeopleBoardRow
        initData={() => {
          const base = getPeople();
          return {
            ...base,
            lastOperation: null,
          };
        }} />
    </>
  )
}

export default App
