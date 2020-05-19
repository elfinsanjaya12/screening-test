import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import FrontPage from './pages/FrontPage';
import './assets/css/style.css';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Dashboard} />
        <DndProvider backend={Backend}>
          <Route path="/front-page" component={FrontPage} />
        </DndProvider>
      </Router>
    </div>
  );
}

export default App;