import React, { useState } from 'react';
import { Album } from './Album'
import { Albums } from './Albums'

export const Main = () => {

  const [ showSingle, setShowSingle ] = useState(false);
  const [ showCollection, setShowCollection ] = useState(false);

  const setSelection = (selection) => {
    if(selection === "collection") {
      setShowCollection(true);
      setShowSingle(false);
    }
    else{
      setShowCollection(false);
      setShowSingle(true);
    }
  }

  return(
    <section className="main-wrapper">
     <h1 className="header-text">Welcome to the Rolling Stone Magazine Top 500 albums api documentation</h1>
     <div className="button-wrapper">
       <button 
       onClick={() => setSelection("collection")}
       className="albums-button"
       disabled={showCollection}
       >Collections</button>

       <button 
       onClick={() => setSelection("single")}
       className="album-button"
       disabled={showSingle}
       >Single items </button>
     </div>
     <>
        {showCollection && <Albums />}
        {showSingle && <Album />}
     </>
    </section>
  )
}