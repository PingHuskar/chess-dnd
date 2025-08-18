import './App.css'
import Board from './components/ChessBoard'
import PeopleBoardRow from './components/PeopleBoardRow'
import PeopleBoardColumn from './components/PeopleBoardColumn'
import { getBasicData, getColumnItems, getCoorItems, type ColumnMap } from './components/board/data/chess';
import opening from './components/board/data/chess/opening';
import { getBasicData as getPeople } from './components/board/data/people';
import { List } from './components/list/list';
import tiles from './components/board/data/chess/tiles';
import knights from './components/board/data/chess/knights';
import knightMovesGrid from "./knightMovesGrid";

function App() {

  return (
    <>
      <h2>Vertical Sort</h2>
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
      <Board height={800} showMatrix={true} initData={() => {
        const columnMap: ColumnMap = {
          NA: getCoorItems(tiles, "NA"),
          white: getCoorItems(tiles, "white"),
          black: getCoorItems(tiles, "black"),
        };
        const base = getBasicData(columnMap);
        return {
          ...base,
          lastOperation: null,
        };
      }} />
      <hr />
      <Board height={800} showMatrix={true} initData={() => {
        const columnMap: ColumnMap = {
          NA: getCoorItems(knights, "NA"),
          N2: getCoorItems(knights, "N2"),
          N3: getCoorItems(knights, "N3"),
          N4: getCoorItems(knights, "N4"),
          N6: getCoorItems(knights, "N6"),
          N8: getCoorItems(knights, "N8"),
        };
        const base = getBasicData(columnMap);
        return {
          ...base,
          lastOperation: null,
        };
      }} />
      <table>
        {knightMovesGrid.map((r: number[], i: number) => {
          return <tr key={`${i}${r}`}>
            {r.map((c: number, ii: number) => {
              return <td key={`${ii}${c}`}>{c}</td>
            })}
          </tr>
        })}
      </table>
      <hr />
      <PeopleBoardColumn
        initData={() => {
          const base = getPeople();
          return {
            ...base,
            lastOperation: null,
          };
        }}
      />
      <hr />
      <PeopleBoardRow
        initData={() => {
          const base = getPeople();
          return {
            ...base,
            lastOperation: null,
          };
        }}
      />
    </>
  )
}

export default App
