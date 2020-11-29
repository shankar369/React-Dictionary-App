// const base_url = "https://safe-shelf-36413.herokuapp.com";
import axios from "axios";

const url = "https://safe-shelf-36413.herokuapp.com/api/dictionary";
// const url = "http://localhost:5000/api/dictionary";
const dictionaryApi = "https://api.dictionaryapi.dev/api/v2/entries/en";

export const searchWord = async (
  word,
  setWordNotFound,
  setData,
  setLoading,
  setShowSave
) => {
  setLoading(true);
  const response = await axios.get(`${url}/${word}`);
  console.log(response, "************");
  if (response.data[0]) {
    setWordNotFound(false);
    setData(response.data[0].data);
    setLoading(false);
  } else {
    axios
      .get(`${dictionaryApi}/${word}`)
      .then(function (response) {
        // handle success
        // console.log("----------------");
        // console.log(response.data);
        setShowSave(true);
        setWordNotFound(false);
        setData(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        // handle error
        setData([]);
        setWordNotFound(true);
        setLoading(false);
        // console.log("-*******", error);
      });
  }
};

export const getMeanings = async (setSavedMeanings, setLoading) => {
  // const params =  { sortBy: "word", limit: 8, sortOrder: -1 }
  setLoading(true);
  axios
    .get(url)
    .then(function (response) {
      // handle success
      setSavedMeanings(response.data);
      setLoading(false);
    })
    .catch(function (error) {
      console.log(error);
      setLoading(false);
    });
};

export const postMeaning = async (data, setLoading, setShowSave) => {
  setLoading(true);
  axios
    .post(url, data)
    .then(function (response) {
      // handle success
      console.log(response.data);
      setLoading(false);
      setShowSave(false);
    })
    .catch(function (error) {
      console.log("***", error);
      setLoading(false);
    });
};
