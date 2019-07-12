import React, { useState, useEffect } from 'react';
import "./index.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import PackageDetail from './PackageDetail';

function App() {
  const [packageName, setPackageName] = useState('');
  return (
    <Router>
      <div className="container m-10 mx-auto max-w-2xl">
        <Link to="/"><h1 className="text-6xl">npm latest version</h1></Link>
        <input 
          value={packageName}
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="packageName"
          type="text"
          placeholder="Search packages"
          onChange={e => setPackageName(e.target.value)} />
        <Route path="/"  exact component={Home} />
        <Route path="/:packageName" component={PackageDetail} />
      </div>
    </Router>
  );
}

export default App;
