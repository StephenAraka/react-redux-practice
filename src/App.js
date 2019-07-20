import React from 'react';
import { Provider } from 'react-redux';

import Posts from './components/Posts';
import Postsform from './components/Postsform';
import store from './store';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Postsform />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
