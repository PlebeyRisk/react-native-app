export const getObjectByProperty = (array, propName, propValue) => {
  const findedObjects = array.filter((item) => item[propName] === propValue);

  if (!findedObjects.length) return {};

  return findedObjects[0];
}

export const getIndexByProperty = (array, propName, propValue) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i][propName] === propValue) {
      return i;
    }
  }

  return -1;
}