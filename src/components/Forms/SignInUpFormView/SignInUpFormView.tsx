import * as React from "react";
import "./SignInUpFormView.scss";

import Form, { FormField } from "../Form/Form";
import CommonLink from "../../CommonLink/CommonLink";

import BoxRadius from "../../BoxRadius/BoxRadius";
import Alert from "../../Alert/Alert";

interface MainFormProps {
  title: string;
  formFields: Array<FormField>;
  btnSubmit: {
    color: string;
    label: string;
  };
  redirect: {
    label?: string;
    linkLabel: string;
    path: string;
  };
  isLogin?: boolean;
  onSubmitForm?: Function;
}

const SignInUpFormView: React.FC<MainFormProps> = props => {
  const { message, colorMessage } = {message: 'hola', colorMessage: 'green'};
  let isLogin = null;
  if (props.isLogin) {
    isLogin = (
      <CommonLink color="first" to="/" bold={true}>
        Forgot your pass?
      </CommonLink>
    );
  }

  return (
    <BoxRadius>
      <img
        className="logo-globant-sm"
        src="../../../../assets/globant-logo-dark.svg"
      />
      <h2 className="margin-top-15 txt--center"> {props.title}</h2>
      {message && (
        <Alert color={colorMessage} className="font--sm">
          {message}
        </Alert>
      )}
      <Form
        customClass="form form--large"
        formFields={props.formFields}
        btnSubmit={props.btnSubmit}
        onSubmitForm={props.onSubmitForm}
      />
      <div className="margin-top-25 flex--between font--sm">
        {isLogin}
        {props.redirect.label}
        <CommonLink to={props.redirect.path} bold={true}>
          {props.redirect.linkLabel}
        </CommonLink>
      </div>
    </BoxRadius>
  );
};

export default SignInUpFormView;
