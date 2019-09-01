import React from 'react';
import { Provider } from 'react-redux';

import Header from "./components/Header";
import ButtonArea from "./components/ButtonArea";
import Hotspots from "./components/Hotspots";

import store from './store/reducers';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <ButtonArea />
      <Hotspots/>
    </Provider>
  );
}

export default App;
