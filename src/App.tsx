import "./App.css";
import { getBasicData as getPeople } from "./components/board/data/people";
import PeopleBoardColumn from "./components/PeopleBoardColumn";

function App() {
  return (
    <PeopleBoardColumn
      initData={() => {
        return {
          ...getPeople(),
          lastOperation: null,
        };
      }}
    />
  );
}

export default App;
