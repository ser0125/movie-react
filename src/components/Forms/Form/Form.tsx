import React from "react";

import useForm from "./useForm";

import FormField from "../FormField/FormField";
import MovieButton from "../../MovieButton/MovieButton";

export interface FormField {
  label: string;
  name: string;
  type: string;
  validations?: object;
}

interface FormProps {
  formFields: Array<FormField>;
  btnSubmit: {
    color: string;
    label: string;
  };
  customClass?: string;
  onSubmitForm?: Function;
}

const Form: React.FC<FormProps> = props => {
  function formatInputsToFormHook(props) {
    const fieldsFormatted = {};
    props.formFields.forEach(field => {
      fieldsFormatted[field.name] = { ...field.validations, value: "" };
    });
    return fieldsFormatted;
  }

  const { handleSubmit, handleChange, values, isSubmitting, errors } = useForm(
    props.onSubmitForm,
    formatInputsToFormHook(props)
  );

  return (
    <form
      className={props.customClass ? props.customClass : ""}
      onSubmit={handleSubmit}
    >
      {props.formFields.map(formfield => {
        return (
          <FormField
            key={formfield.label}
            label={formfield.label}
            name={formfield.name}
            type={formfield.type}
            onChange={handleChange}
            value={values[formfield.name] || ""}
            {...formfield.validations}
            errors={errors}
          />
        );
      })}
      <div className="txt--right">
        <MovieButton
          bgColor={props.btnSubmit.color}
          disabled={isSubmitting || Object.keys(errors).length !== 0}
        >
          {props.btnSubmit.label}
        </MovieButton>
      </div>
    </form>
  );
};

export default Form;
