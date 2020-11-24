import { useEffect, useState } from "react";
import "./App.css";
import DictionaryPage from "./components/DictionaryPage/DictionaryPage";
// import LoginForm from "./components/LoginForm/LoginForm";
import { getMeanings } from "./api";

function App() {
  const [savedMeanings, setSavedMeanings] = useState([]);
  useEffect(() => {
    getMeanings(setSavedMeanings);
  }, []);
  return (
    <div className="App">
      <DictionaryPage savedMeanings={savedMeanings} />
    </div>
  );
}

export default App;
