import { useEffect, useState } from "react";
import "./App.css";
import DictionaryPage from "./components/DictionaryPage/DictionaryPage";
// import { Helmet } from "react-helmet";
// import LoginForm from "./components/LoginForm/LoginForm";
import { getMeanings } from "./api";
import Loading from "./components/DictionaryPage/Loading/Loading";
import Paginate from "./components/DictionaryPage/Paginate/Paginate";
import SearchBox from "./components/DictionaryPage/SearchBox/SearchBox";
import WordNotFound from "./components/DictionaryPage/WordNotFound/WordNotFound";

// import { ImBook } from "react-icons/im";

function App() {
  const [savedMeanings, setSavedMeanings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedText, setSelectedText] = useState("");
  const [data, setData] = useState([]);
  const [word, setWord] = useState("");
  const [showSave, setShowSave] = useState(false);

  const [wordNotFound, setWordNotFound] = useState(false);

  useEffect(() => {
    getMeanings(setSavedMeanings, setLoading);
  }, []);
  const handleMouseUp = () => {
    setSelectedText(window.getSelection().toString());
  };
  return (
    <div className="App" onMouseUp={handleMouseUp}>
      {/* <Helmet>
        <title>Personal Dictionary</title>
      </Helmet> */}
      <div>
        <SearchBox
          selectedText={selectedText}
          setLoading={setLoading}
          setWordNotFound={setWordNotFound}
          setShowSave={setShowSave}
          setData={setData}
          setWord={setWord}
        />
      </div>
      <div className="dictionary-page">
        <DictionaryPage
          selectedText={selectedText}
          savedMeanings={savedMeanings}
          setLoading={setLoading}
          data={data}
          wordNotFound={wordNotFound}
          word={word}
          setData={setData}
          showSave={showSave}
          setShowSave={setShowSave}
        />
        <WordNotFound wordNotFound={wordNotFound} word={word} />
        {loading && <Loading />}
      </div>
      <div>
        <Paginate pageCount={10} />
      </div>
    </div>
  );
}

export default App;
