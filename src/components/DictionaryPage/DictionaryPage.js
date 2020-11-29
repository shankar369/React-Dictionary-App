import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../FormikControl";

import SavedMeanings from "./SavedMeanings/SavedMeanings";

import "./DictionaryPage.css";
import SearchResult from "./SearchResult/SearchResult";

import { searchWord } from "../../api";

const DictionaryPage = ({ savedMeanings, setLoading }) => {
  const [data, setData] = useState([]);
  const [word, setWord] = useState("");
  const [showSave, setShowSave] = useState(false);

  const [wordNotFound, setWordNotFound] = useState(false);

  const initialValues = {
    word: "",
  };
  const validationSchema = Yup.object({
    word: Yup.string().required("Required"),
  });
  console.log(data, savedMeanings);

  const onSubmit = async (values, onSubmitProps) => {
    console.log(values);
    setWordNotFound(false);
    setWord(values.word.trim());
    searchWord(
      values.word.trim(),
      setWordNotFound,
      setData,
      setLoading,
      setShowSave
    );
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  };

  return (
    <div className="main-page">
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
              placeholder="search meaning"
              name="word"
            />
            <button type="submit" disabled={!formik.isValid}>
              Search
            </button>
          </Form>
        )}
      </Formik>

      {savedMeanings.length !== 0 && data.length === 0 && !wordNotFound && (
        <SavedMeanings savedMeanings={savedMeanings} />
      )}

      <SearchResult
        word={word}
        data={data}
        setData={setData}
        setLoading={setLoading}
        showSave={showSave}
        setShowSave={setShowSave}
      />

      {wordNotFound && (
        <div className="word-not-found">
          <div className="text">
            No meanings found for the word{" "}
            <span className="word">'{word}'</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DictionaryPage;
