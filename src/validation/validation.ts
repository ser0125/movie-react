export const validateAll = (fields, errors) => {
  for (const name in fields) {
    validateField(fields, name, errors);
  }
  return errors;
};

export const validateField = (fields, name, errors) => {
  const messages = [];

  if (!validRequired(fields[name])) {
    messages.push('This field is required');
  }

  if (!validEmail(fields[name])) {
    messages.push('Enter a valid email address');
  }

  if (!validAlphanumeric(fields[name])) {
    messages.push('Only letters, numbers are allowed');
  }

  const { validMin, minLength = null } = validMinLength(fields[name]);
  if (!validMin) {
    messages.push(`Enter a value with at least ${minLength} characters`);
  }

  if (messages.length) {
    errors[name] = messages;
  } else {
    delete errors[name];
  }

  return errors;
};

const validRequired = field => {
  if (!field.hasOwnProperty('vrequired')) {
    return true;
  }
  const { value } = field;
  if (value.length === 0) {
    return false;
  }
  return true;
};

const validEmail = field => {
  if (!field.hasOwnProperty('vemail')) {
    return true;
  }
  const { value } = field;
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (value.match(regex) || !value.length) {
    return true;
  }
  return false;
};

const validMinLength = field => {
  if (!field.hasOwnProperty('vminlength')) {
    return { validMin: true };
  }
  const minLength = field.vminlength;
  const { value } = field;
  if (value.length < minLength) {
    return { validMin: false, minLength };
  }
  return { validMin: true };
};

const validAlphanumeric = field => {
  if (!field.hasOwnProperty('valphanumeric')) {
    return true;
  }
  const { value } = field;
  const regex = /\W/g;
  if (value.match(regex)) {
    return false;
  }
  return true;
};
