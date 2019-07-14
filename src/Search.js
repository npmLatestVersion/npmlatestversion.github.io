import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router'


function Search() {
  const [packageName, setPackageName] = useState('');
  const enter = useKeyPress('Enter');
  if (enter){
    return (<Redirect to={packageName}/>)
  }
  return (
        <input
          value={packageName}
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="packageName"
          type="text"
          placeholder="Search packages"
          onChange={e => setPackageName(e.target.value)} />
  );
}

function useKeyPress(targetKey) {
    // State for keeping track of whether key is pressed
    const [keyPressed, setKeyPressed] = useState(false);
    console.log(keyPressed, targetKey)
    // If pressed key is our target key then set to true
    function downHandler({ key }) {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    }
  
  
    // Add event listeners
    useEffect(() => {
      window.addEventListener('keydown', downHandler);
      // Remove event listeners on cleanup
      return () => {
        window.removeEventListener('keydown', downHandler);
      };
    }, []); // Empty array ensures that effect is only run on mount and unmount
  
    return keyPressed;
  }

export default Search;
