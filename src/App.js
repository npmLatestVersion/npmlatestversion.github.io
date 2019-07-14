import React from 'react';
import "./index.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import PackageDetail from './PackageDetail';


function App() {
  return (
    <Router>
      <div className="container m-10 mx-auto max-w-2xl">
        <Link to="/"><h1 className="text-6xl">npm latest version</h1></Link>
        <Route path="/"  exact component={Home} />
        <Route path="/:packageName" component={PackageDetail} />
      </div>
    </Router>
  );
}

export default App;
