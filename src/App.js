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
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(
    parseInt(sessionStorage.getItem("current_page")) || 0
  );
  const limit = 10;

  const [wordNotFound, setWordNotFound] = useState(false);
  useEffect(() => {
    getMeanings(
      limit,
      setSavedMeanings,
      setTotalPages,
      setLoading,
      currentPage
    );
  }, [currentPage]);

  const handleCapture = () => {
    setSelectedText(window.getSelection().toString());
  };

  return (
    <div
      className="App"
      onMouseUpCapture={handleCapture}
      onTouchEndCapture={handleCapture}
    >
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
        <WordNotFound
          wordNotFound={wordNotFound}
          setWordNotFound={setWordNotFound}
          word={word}
        />
        {loading && <Loading />}
      </div>

      {data.length === 0 && !wordNotFound && (
        <div>
          <Paginate
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pageCount={totalPages}
          />
        </div>
      )}
    </div>
  );
}

export default App;
