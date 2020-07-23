import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LocationRedirect from './utils/LocationRedirect';
import Sidemenu from './layouts/Sidemenu';
import Loader from './layouts/Loader';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [hide, setHide] = useState(true);
  const [newLocation, setNewLocation] = useState(null);

  return (
    <Router>
      <div className='App'>
        <Loader hide={hide} />
        <Sidemenu setNewLocation={setNewLocation} />
        <Switch>
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route component={Home} />
        </Switch>
        <LocationRedirect setHide={setHide} newLocation={newLocation} />
      </div>
    </Router>
  );
}

export default App;
