import React from "react";
import store from "./Store/Store";
import { Provider } from "react-redux";
import MainScreen from "./Components/Screens/MainScreen";

function App() {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
}

export default App;
