import React from 'react';

import './app.scss';

import {getRandomNum} from '@spa/methods'
import {Ui} from '@spa/ui'

export const App = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.scss file.
   */
  return (
    <div className="app">
      <Ui name="spa2" num={22}/>
      spa app 2 -{getRandomNum()}
    </div>
  );
};

export default App;
