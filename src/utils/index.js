export const getObjectByProperty = (array, propName, propValue) =>
  (array.filter((item) => item[propName] === propValue)[0]);