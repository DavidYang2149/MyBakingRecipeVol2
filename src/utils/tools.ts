export const isEmpty = (value: unknown) => {
  if (!value) {
    return true;
  }
  return false;
};

export const isNotEmpty = (value: unknown) => {
  return !isEmpty(value);
};

export const isMatch = (left: unknown) => (right: unknown) => {
  if (left === right) {
    return true;
  }
  return false;
};

export const isNotMatch = (left: unknown) => (right: unknown) => {
  return !isMatch(left)(right);
};

export const splitReturnFirst = (value: string) => (keyword: string) => {
  return value.split(keyword)[0];
};
