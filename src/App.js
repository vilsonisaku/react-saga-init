import React from "react";
import { Provider } from "react-redux";

import configureStore from "./store";
import rootSaga from "./sagas";

import Root from "./Root";
const store = configureStore();
store.runSaga(rootSaga);

class App extends React.Component {

    
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

export default App;
