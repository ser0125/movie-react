import * as React from "react";
import Input from "../../Input/Input";

const FormField = ({ name, type, label, errors, ...props }) => {
  return (
    <div className="form__field">
      <label className="font--medium-bold"> {label}: </label>
      <Input
        name={name}
        type={type}
        {...props}
        color={errors[name] ? "danger" : ""}
      />
      {errors[name] &&
        errors[name].map(error => (
          <div key={error} className="font--sm txt--danger">
            <span>😅</span>
            <span className="margin-left-5">{error}</span>
          </div>
        ))}
    </div>
  );
};

export default FormField;
