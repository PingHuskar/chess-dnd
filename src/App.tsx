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
import { TimeControlList } from './components/timecontrollist/list';
import { TimeZoneList } from './components/timezonelist/list';
import randomBishopMoveArray from './components/board/data/chess/randomBishopMoveArray';
import shuffle from './components/list/shuffle';

function App() {

  return (
    <>
      <h2>Vertical Sort</h2>
      <TimeZoneList />
      <br />
      <hr />
      <List />
      <br />
      <hr />
      <TimeControlList />
      <br />
      <hr />
      <br />
      <Board height={1200} initData={() => {
        const columnMap: ColumnMap = {
          null: getColumnItems(opening, "null"),
          beginner: getColumnItems(opening, "beginner"),
          intermediate: getColumnItems(opening, "intermediate"),
          advanced: getColumnItems(opening, "advanced"),
          trolled: getColumnItems(opening, "trolled"),
        };
        return {
          ...getBasicData(columnMap),
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
        return {
          ...getBasicData(columnMap),
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
        return {
          ...getBasicData(columnMap),
          lastOperation: null,
        };
      }} />
      <hr />
      <Board height={800} showMatrix={true} initData={() => {
        const bishopMoves = shuffle(randomBishopMoveArray());
        const columnMap: ColumnMap = {
          NA: getCoorItems(bishopMoves, "NA"),
          IsDiagonal: getCoorItems(bishopMoves, "IsDiagonal"),
          IsNotDiagonal: getCoorItems(bishopMoves, "IsNotDiagonal"),
        };
        return {
          ...getBasicData(columnMap),
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
        return {
          ...getBasicData(columnMap),
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
          return {
            ...getPeople(),
            lastOperation: null,
          };
        }}
      />
      <hr />
      <PeopleBoardRow
        initData={() => {
          return {
            ...getPeople(),
            lastOperation: null,
          };
        }}
      />
    </>
  )
}

export default App
