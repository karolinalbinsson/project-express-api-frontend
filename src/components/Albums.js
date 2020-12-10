import React, { useEffect, useState } from 'react';
import { Console } from './Console';
import data from '../data/data.json';

export const Albums = () => {

const [buttonPressed, setButtonPressed] = useState();
const [apiResults, setApiResults] = useState([]);
const dataAlbums = data.albumsendpoint;
const dataTopTen = data.top10endpoint;

useEffect(() => {
  if(buttonPressed !== "")
  {
    fetchFromApi(buttonPressed);
    setButtonPressed('');
  }
},[buttonPressed]);

const fetchFromApi = (type) => {
  if(type)
  {
    let url = '';
    if(type === 'year'){
      url = 'https://karolin-top-albums.herokuapp.com/api/albums?year=1967'
    }
    if(type ==='yearFrom'){
      url = 'https://karolin-top-albums.herokuapp.com/api/albums?yearFrom=1967'
    }
    if(type === 'yearTo'){
      url = 'https://karolin-top-albums.herokuapp.com/api/albums?yearTo=1967'
    }
    if(type === 'artist'){
      url = 'https://karolin-top-albums.herokuapp.com/api/albums?artist=The+Beatles'
    }
    if(type ==='genre'){
      url= 'https://karolin-top-albums.herokuapp.com/api/albums?genre=Funk'
    }
    if(type === 'page'){
      url= 'https://karolin-top-albums.herokuapp.com/api/albums?page=2'
    }
    if(type==='top10'){
      url= 'https://karolin-top-albums.herokuapp.com/api/albums/top10'
    }
    fetch(url)
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
}

  return(
    <div className="content-wrapper">
      <p>Try the different requests and check out the results in the console window below.</p>
      
      <h3>https://karolin-top-albums.herokuapp.com/api/albums/?[filtertype]=[filtervalue]</h3>
      <p>This endpoint returns a collection of albums. You can use query parameters to filter the results.</p>
      <div className="albums-wrapper">
          <span className="grid-header">Filter</span>
          <span className="grid-header">Type</span>
          <span className="grid-header">Description</span>
          <span className="grid-header">Example</span>
          <span className="grid-header">Try it</span>

             
              {dataAlbums.map((item,index) => (
                <React.Fragment key={index}>
                <span className="grid-item">{item.filter}</span>
                <span className="grid-item">{item.type}</span>
                <span className="grid-item">{item.description}</span>
                <span className="grid-item">{item.url}</span>
              <span className="grid-item"><button onClick={
                () => setButtonPressed(item.filter)
              }>Try it</button></span>
                </React.Fragment>
            ))}
        
        </div>

        <h3>https://karolin-top-albums.herokuapp.com/api/albums/top10</h3>
        <p>This endpoint returns a collection of the top 10 albums.</p>
        <div className="albums-top10-wrapper">
        <span className="grid-header">Description</span>
        <span className="grid-header">Example</span>
        <span className="grid-header">Try it</span>
        {
          dataTopTen.map((item,index) => (
            <React.Fragment key={index}>
            <span className="grid-item">{item.description}</span>
            <span className="grid-item">{item.url}</span>
            <span className="grid-item"><button onClick={
                () => setButtonPressed(item.type)
              }>Try it</button></span>
            </React.Fragment>
          ))
        }
        </div>
        <Console content={apiResults}/>
    </div>
 
  )
}