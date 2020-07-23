import React from 'react';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import Sidemenu from './layouts/Sidemenu';

function App() {
  return (
    <div className='App'>
      <Sidemenu />
      <Home />
    </div>
  );
}

export default App;
