import { useState, useEffect } from "react";

import { validateField, validateAll } from "../../../validation/validation";

const useForm = (callbackSubmit, initialState) => {
  const [fields, setFields] = useState(initialState);
  const [values, setValues] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        callbackSubmit(values);
        setIsSubmitting(false);
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const handleSubmit = event => {
    if (event) event.preventDefault();
    setIsSubmitting(true);
    const errorsFields = validateAll(fields, errors);
    setErrors({ ...errorsFields });
  };

  const handleChange = event => {
    event.persist();
    const { name, value } = event.target;
    fields[name].value = value;
    setFields({ ...fields });
    setValues(prevState => ({ ...prevState, [name]: value }));
    const errorsField = validateField(fields, name, errors);
    setErrors({ ...errorsField });
  };

  return {
    handleChange,
    handleSubmit,
    values,
    isSubmitting,
    errors
  };
};

export default useForm;
