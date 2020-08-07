import React from 'react';

import './app.scss';

import { getRandomNum,UiProps } from '@spa/methods'
import {Ui} from '@spa/ui'
export const App = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.scss file.
   */
  return (
    <div className="app">
      hello. SPA App 1 - {getRandomNum()}
	  <Ui name="spa1" num={11} />
    </div>
  );
};

export default App;
