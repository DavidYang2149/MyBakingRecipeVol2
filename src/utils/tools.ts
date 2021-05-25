export const isEmpty = (value: unknown) => {
  if (!value) {
    return true;
  }
  return false;
};

export const isNotEmpty = (value: unknown) => {
  return !isEmpty(value);
};

export const splitReturnFirst = (value: string) => (keyword: string) => {
  return value.split(keyword)[0];
};
