const logger = store => next => action => {
  console.debug(action, action);
  const result = next(action);
  console.debug('store', store.getState());
  return result;
};

export default logger;
