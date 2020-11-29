import { useEffect, useState } from "react";
import "./App.css";
import DictionaryPage from "./components/DictionaryPage/DictionaryPage";
// import LoginForm from "./components/LoginForm/LoginForm";
import { getMeanings } from "./api";
import Loading from "./components/DictionaryPage/Loading/Loading";

function App() {
  const [savedMeanings, setSavedMeanings] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getMeanings(setSavedMeanings, setLoading);
  }, []);
  return (
    <div className="App">
      <DictionaryPage savedMeanings={savedMeanings} setLoading={setLoading} />
      {loading && <Loading />}
    </div>
  );
}

export default App;
