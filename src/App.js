import React from "react";
import { Provider } from "react-redux";

import configureStore from "./redux-store/store";
import rootSaga from "./redux-store/sagas";

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
