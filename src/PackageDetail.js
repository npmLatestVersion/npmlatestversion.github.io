import React, { useState, useEffect } from 'react';
import Search from './Search'
import { Link } from "react-router-dom";

function PackageDetail({match}) {

    const [version, setVersion] = useState(0);

    useEffect(() => {
        fetch(`https://y8bpiklk4e.execute-api.us-east-1.amazonaws.com/dev/packages/${match.params.packageName}`)
            .then(function (res) {
                return res.json()
            })    
            .then(function(res) {
                document.title = `${match.params.packageName} package latest version on npm`;
                console.log(res)
                setVersion(res)
            })
    });
  
    return (
    <div>
      <Search />
     
      <div className="p-3 mt-4">
          <p className="font-bold text-xl mb-2"><a href="https://www.npmjs.com/package/{match.params.packageName}">{match.params.packageName}</a></p>
          <Link to={match.params.packageName}><p className="text-gray-700 text-base">Version: <span id="latest">{version}</span></p>
          <p className="mt-3"><code className="bg-gray-200 px-3 py-1">npm install {match.params.packageName}@latest</code></p> </Link>
      </div>
     
      </div>
 
    );
}

export default PackageDetail;