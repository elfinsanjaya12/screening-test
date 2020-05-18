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
// import React, { Component } from 'react';

// class App extends Component {
// state = {
//     data: null
//   };

//   componentDidMount() {
//       // Call our fetch function below once the component mounts
//     this.callBackendAPI()
//       .then(res => this.setState({ data: res.express }))
//       .catch(err => console.log(err));
//   }
//     // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
//   callBackendAPI = async () => {
//     const response = await fetch('/dashboard');
//     console.log(response)
//     const body = await response.json();

//     if (response.status !== 200) {
//       throw Error(body.message)
//     }
//     return body;
//   };

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">

//           <h1 className="App-title">Welcome to React</h1>
//         </header>

//         <p className="App-intro">{this.state.data}</p>
//       </div>
//     );
//   }
// }

// export default App;
