import React from 'react';
import Router from "./Router";
import ScreenDesign from "./Assets/screens.png"
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import reducers from './reducers';
import "./App.css"

const store = createStore(reducers(),applyMiddleware(thunk));

function App() {
  return (
      <Provider store={store}>
          <img className="design" src={ScreenDesign}/>
          <Router/>
      </Provider>
  );
}

export default App;
