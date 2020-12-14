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
  word = word.toLowerCase();
  setLoading(true);
  const response = await axios.get(`${url}/${word}`);
  console.log(response, "************");
  if (response.data[0]) {
    setWordNotFound(false);
    setData(response.data[0].data);
    setLoading(false);
    setShowSave(false);
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

export const getMeanings = async (
  limit,
  setSavedMeanings,
  setTotalPages,
  setLoading,
  currentPage
) => {
  const params = { page: currentPage, limit };
  setLoading(true);
  axios
    .get(url, { params })
    .then(function (response) {
      // handle success
      console.log(response.data);
      setSavedMeanings(response.data.meanings);
      let PageCount = response.data.count / limit;
      if (Number(PageCount) !== PageCount) {
        PageCount = Math.floor(PageCount) + 1;
      }
      setTotalPages(PageCount);
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

export const deleteMeaning = async (word, setLoading, setDeleteWord) => {
  setLoading(true);
  const response = await axios.delete(`${url}/${word}`);
  console.log(response, "************");
  if (response.data[0]) {
    console.log("deleted");
    setLoading(false);
    setDeleteWord("");
  } else {
    console.log("not deleted");
  }
};
