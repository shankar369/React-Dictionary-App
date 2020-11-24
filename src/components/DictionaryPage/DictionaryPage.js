import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../FormikControl";

import { postMeaning } from "../../api";

import Card from "./Card/Card";

import "./DictionaryPage.css";
import SavedMeanings from "./SavedMeanings/SavedMeanings";

const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const axios = require("axios");

function DictionaryPage({ savedMeanings }) {
  const [data, setData] = useState([]);
  const [word, setWord] = useState("");

  const [wordNotFound, setWordNotFound] = useState(false);

  const initialValues = {
    word: "",
  };
  const validationSchema = Yup.object({
    word: Yup.string().required("Required"),
  });

  const searchWord = (word) => {
    axios
      .get(`${url}${word}`)
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

  const onSubmit = (values, onSubmitProps) => {
    console.log(values);
    setWordNotFound(false);
    setWord(values.word.trim());
    searchWord(values.word.trim());
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnBlur={false}
      >
        {(formik) => (
          <Form className="search-form">
            <FormikControl
              control="input"
              type="text"
              label="word"
              name="word"
            />
            <button type="submit" disabled={!formik.isValid}>
              Search
            </button>
          </Form>
        )}
      </Formik>
      {savedMeanings.length !== 0 && (
        <SavedMeanings savedMeanings={savedMeanings} />
      )}
      {data.map((example, i) => (
        <Card key={i} example={example} />
      ))}
      {data.length !== 0 && (
        <button className="save" onClick={() => postMeaning({ word, data })}>
          Save
        </button>
      )}
      {wordNotFound && <h1>No meanings found for the word '{word}'</h1>}
    </>
  );
}

export default DictionaryPage;
