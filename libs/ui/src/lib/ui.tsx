import React from 'react';

import './ui.scss';
import { UiProps } from '@spa/methods'
/* eslint-disable-next-line */

export const Ui = (props: UiProps) => {
  const { name, num } = props
  return (
    <div>
      <h1>Welcome to ui!</h1>
      <div>name: {name}</div>
      <div>num: {num}</div>
    </div>
  );
};

export default Ui;
