import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../FormikControl";

import Card from "./Card/Card";

import "./DictionaryPage.css";

const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const axios = require("axios");

function DictionaryPage() {
  const [data, setData] = useState([]);

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
        console.log("----------------");
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const onSubmit = (values, onSubmitProps) => {
    console.log(values);
    searchWord(values.word);
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
          <Form>
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
      {data.slice(0, 3).map((example, i) => (
        <Card key={i} example={example} />
      ))}
    </>
  );
}

export default DictionaryPage;
