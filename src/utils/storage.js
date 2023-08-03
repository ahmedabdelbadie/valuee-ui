const storagePrefix = 'value_';

const storage = {
  getToken: () => {
    const token = window.localStorage.getItem(`${storagePrefix}token`);

    return !Object.is(window.localStorage.getItem(`${storagePrefix}token`), undefined)
      ? JSON.parse(token)
      : null;
  },
  setToken: (token) => {
    window.localStorage.setItem(`${storagePrefix}token`, JSON.stringify(token));
  },
  clearToken: () => {
    window.localStorage.removeItem(`${storagePrefix}token`);
  }
};

export default storage;
