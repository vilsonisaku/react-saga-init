import {
    createStore,
    applyMiddleware,
    combineReducers,
  } from "redux";
  import createSagaMiddleware from "redux-saga";
  
  import { reducer as AuthReducer } from "./models/auth";
  import { reducer as CommonActions } from "./models/common";
  
  const rootReducer = combineReducers({
    auth: AuthReducer,
    common: CommonActions,
  });
  
  export default function configureStore() {
    const loggerMiddleware = (store) => (next) => (action) => {
      const returnValue = next(action);
  
      return returnValue;
    };
  
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware, loggerMiddleware];
  
    return {
      ...createStore(
        rootReducer,
        applyMiddleware(...middlewares)
      ),
      runSaga: sagaMiddleware.run,
    };
  }
  