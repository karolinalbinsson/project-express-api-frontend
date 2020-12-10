import React, {useState,useEffect} from 'react';
import { Console } from './Console';
import data from '../data/data.json';

export const Album = () => {

  const[getFromAPI,setGetFromAPI] = useState();
  const[apiResults,setApiResults] = useState([]);
  const dataAlbum = data.albumendpoint;

  const fetchByTitle = () =>{
    fetch(`https://karolin-top-albums.herokuapp.com/api/albums/title/Rubber+Soul`)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('404');
      }
    })
   .then((json) => {
     setApiResults(json);
   });
  }

  const fetchByPlacement = () =>{
    fetch(`https://karolin-top-albums.herokuapp.com/api/albums/placement/1`)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('404');
      }
    })
   .then((json) => {
     setApiResults(json);
   });
  }
  
  useEffect(() => {
    if(getFromAPI ==='title'){
      fetchByTitle();
    }
    if(getFromAPI ==='placement'){
      fetchByPlacement();
    }
  },[getFromAPI]);
  
  return(
    <div className="content-wrapper">
       <h2>Single items</h2>
       <p>These endpoints return a single album item based on the album title or placement.</p>
       <p>Try the different requests and check out the results in the console window below.</p>
       
       <h3>https://karolin-top-albums.herokuapp.com/api/albums/[type]/[parameter]</h3>
       <div className="album-wrapper"> 
        <span className="grid-header">Parameter</span>
        <span className="grid-header">Type</span>
        <span className="grid-header">Description</span>
        <span className="grid-header">Example</span>
        <span className="grid-header">Try it</span>
        {
          dataAlbum.map((item,index) => (
              <React.Fragment key={index}>
                <span className="grid-item">{item.parameter}</span>
                <span className="grid-item">{item.type}</span>
                <span className="grid-item">{item.description}</span>
                <span className="grid-item">{item.url}</span>
                <span className="grid-item">
                  <button onClick={() => setGetFromAPI(item.parameter)
                    
                  }>
                 Try it</button></span>
              </React.Fragment>
          ))
        }
       </div>

       <Console content={apiResults}/>
    </div>
  )
}