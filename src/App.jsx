import React from 'react';
import './App.css';
import { Header } from './Components/Header/Header';
import { DayCard } from './Components/WeathwerCard/DayCard';

import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <main>
        <div className="app-container">
          <DayCard />
        </div>
      </main>
    </Provider>
  );
}

export default App;
