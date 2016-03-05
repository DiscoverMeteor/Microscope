import React from 'react';
import AppHeader from '../components/AppHeader.jsx';
import AppErrors from '../components/AppErrors.jsx';

export default App = ({ main }) => (
  <div className="container">
    <AppHeader />
    <AppErrors />

    <div id="main">
      {main()}
    </div>
  </div>
);
