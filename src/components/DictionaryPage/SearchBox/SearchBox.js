import React from "react";
import { Formik, Form } from "formik";
import FormikControl from "../../FormikControl";
import * as Yup from "yup";

import { searchWord } from "../../../api";

function SearchBox({
  selectedText,
  setLoading,
  setWordNotFound,
  setShowSave,
  setData,
  setWord,
}) {
  const initialValues = {
    word: selectedText,
  };
  const validationSchema = Yup.object({
    word: Yup.string().required("Required"),
  });

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
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnBlur={false}
        enableReinitialize
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
    </div>
  );
}

export default SearchBox;
