import React from 'react';
import Search from './Search'
import { Link } from "react-router-dom";


function Home() {
  return (
    <div>
      <Search />
   
    <div className="p-3 mt-4">
        <p className="font-bold text-xl mb-2"><a href="https://www.npmjs.com/package/npm">npm</a></p>
        <Link to="/npm">
        <p className="text-gray-700 text-base">Version: <span id="latest">6.9.0</span></p>
        <p className="mt-3"><code className="bg-gray-200 px-3 py-1">npm install -g npm</code></p>
        </Link>
    </div>

    </div>
  );
}

export default Home;
