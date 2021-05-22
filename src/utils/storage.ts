export const saveItem = (key: string, value: string) => {
  sessionStorage.setItem(key, value);
};

export const loadItem = (key: string) => {
  return sessionStorage.getItem(key);
};
