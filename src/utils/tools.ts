export const isEmpty = (value: unknown) => {
  if (!value) {
    return true;
  }
  return false;
};

export const isNotEmpty = (value: unknown) => {
  return !isEmpty(value);
};
