export const saveItem = (key: string, value: string) => {
  sessionStorage.setItem(key, value);
};

export const loadItem = (key: string) => {
  return sessionStorage.getItem(key);
};

export const removeItem = (key: string) => {
  sessionStorage.removeItem(key);
};
