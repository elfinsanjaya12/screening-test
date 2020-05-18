import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import FrontPage from './pages/FrontPage';
import './assets/css/style.css';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Dashboard} />
        <Route path="/front-page" component={FrontPage} />
      </Router>
    </div>
  );
}

export default App;
