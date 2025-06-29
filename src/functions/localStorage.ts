const myLocalStorage = (type: string, name: string, data: object): void => {
  switch (type) {
    case 'get':
      if (!!localStorage.getItem(name)) {
        JSON.parse(<string>localStorage.getItem(name));
      } else {
        console.warn(`No data found in localStorage for key: ${name}`);
      }
      break;
    case 'set':
      if (Object.keys(data).length > 0) {
        localStorage.setItem(name, JSON.stringify(data));
      } else {
        console.warn(`No data found in localStorage for key: ${name}`);
      }
      break;
    case 'del':
      if (!!localStorage.getItem(name)) {
        localStorage.removeItem(name);
      } else {
        console.warn(`No data found in localStorage for key: ${name}`);
      }
      break;
    default:
      console.error('Invalid operation type for localStorage');
      break;
  }
}

export default myLocalStorage;
