import React from 'react';
import './App.css';
import { Header } from './Components/Header/Header';
import { DayCard } from './Components/WeathwerCard/DayCard';

import { Provider } from 'react-redux';
import { store } from './redux/store';


function App() {
  return (
    <Provider store={store}>
      <div className='page-container'>
        <Header />
        <main>
          <div className="app-container">
            <DayCard />
            
          </div>
        </main>
      </div>
    </Provider>
  );
}

export default App;
