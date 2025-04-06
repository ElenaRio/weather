import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/components/Home';
import Header from './shared/Header/Header';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
