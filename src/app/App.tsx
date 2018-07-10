import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Hello } from './components/Hello';
import MyForm from './components/BasicForm';
import './../style/test.css';

declare let module: any

const imaginaryUser = {
  email: '',
  username: '',
  imaginaryThingId: '',
};

ReactDOM.render(
  <div>
    <Hello
      compiler="Typescript"
      framework="React"
      bundler="Webpack"
    />
    <MyForm />
  </div>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}