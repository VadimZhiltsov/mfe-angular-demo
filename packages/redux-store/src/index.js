const {
  applyMiddleware,
  createStore,
} = require('redux');

const { createLogger } = require ('redux-logger');

let store;

if (!window._myReduxStore) {
  const initialState = {
    value: 0
  }
  const rootReducer = (state = initialState, action) => {
    switch(action.type) {
      case "INC":
        return {
          value: state.value + 1
        }
      case "DEC":
        return {
          value: state.value - 1
        }
      default: 
        return initialState;
    }
  }

  store = new createStore(
    rootReducer,
    applyMiddleware(createLogger()),
  );

  window._myReduxStore = store
} else {
  store = window._myReduxStore
}

export default store
