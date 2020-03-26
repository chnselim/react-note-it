import Storage from '../../services/storage';

export default (moduleName, stateKey) => {
  return ({ getState }) => {
    return next => action => {
      const preState = getState()[moduleName][stateKey];
      const returnValue = next(action);

      if (preState !== getState()[moduleName][stateKey]) {
        Storage.setItem(stateKey, getState()[moduleName][stateKey]);
      }

      return returnValue;
    };
  };
};
