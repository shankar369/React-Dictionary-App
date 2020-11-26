// const base_url = "https://safe-shelf-36413.herokuapp.com";
import axios from "axios";

const url = "https://safe-shelf-36413.herokuapp.com/api/dictionary";
const dictionaryApi = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export const searchWord = (word, setWordNotFound, setData) => {
  axios
    .get(`${dictionaryApi}${word}`)
    .then(function (response) {
      // handle success
      // console.log("----------------");
      // console.log(response.data);
      setWordNotFound(false);
      setData(response.data);
    })
    .catch(function (error) {
      // handle error
      setData([]);
      setWordNotFound(true);
      // console.log("-*******", error);
    });
};

export const getMeanings = (setSavedMeanings) => {
  axios
    .get(url)
    .then(function (response) {
      // handle success
      console.log("----------------");
      setSavedMeanings(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const postMeaning = (data) => {
  axios
    .post(url, data)
    .then(function (response) {
      // handle success
      console.log("----------------");
      console.log(response.data);
    })
    .catch(function (error) {
      console.log("***", error);
    });
};
