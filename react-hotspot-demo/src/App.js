import React from 'react';

import Header from "./components/Header";
import ButtonArea from "./components/ButtonArea";
import Hotspots from "./components/Hotspots";

function App() {
  return (
    <React.Fragment>
      <Header />
      <ButtonArea />
      <Hotspots/>
    </React.Fragment>
  );
}

export default App;
