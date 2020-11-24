// const base_url = "https://safe-shelf-36413.herokuapp.com";
import axios from "axios";

const url = "https://safe-shelf-36413.herokuapp.com/api/dictionary";

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
