import React, { useEffect, useState } from 'react';
import { Console } from './Console';

export const Albums = () => {

const [buttonPressed, setButtonPressed] = useState();
const [apiResults, setApiResults] = useState([]);

useEffect(() => {
  if(buttonPressed !== "")
  {
    fetchFromApi(buttonPressed);
    setButtonPressed('');
  }
},[buttonPressed]);

const fetchFromApi = (type) => {
  console.log(type);
  if(type)
  {
    let url = '';
    if(type === 'year'){
      url = 'https://karolin-top-albums.herokuapp.com/api/albums?year=1967'
    }
    if(type ==='fromYear'){
      url = 'https://karolin-top-albums.herokuapp.com/api/albums?yearFrom=1967'
    }
    if(type === 'toYear'){
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
    <div>
      <h3>https://karolin-top-albums.herokuapp.com/api/albums/?[filtertype]=[filtervalue]</h3>
      <p>This endpoint returns a collection of albums. You can use query parameters to filter the results.</p>
      <p>Try the different requests and check out the results in the console window below.</p>
      <div className="albums-wrapper">
        <table>
        <tbody className="albums-table">
          <tr>
          <th>
            Filter
          </th>
          <th>
            Type
          </th>
          <th>
            Description
          </th>
          <th>
            Example
          </th>
          <th>
            Try it
          </th>
          </tr>
          <tr>
            <td>
              year
            </td>
            <td>
              Number
            </td>
            <td>
              The exact release year of the album. <br/>Can not be used in combination with range-filters (yearTo, yearFrom)
            </td>
            <td className="example">
            https://karolin-top-albums.herokuapp.com/api/albums?year=1967
            </td>
            <td>
              <button 
                onClick={()=> setButtonPressed("year")}
              >Try it</button>
            </td>
          </tr>
          <tr>
            <td>
              yearFrom
            </td>
            <td>
              Number
            </td>
            <td>
              The miminum release year of the album. <br/>Will return all albums released during and after the specified year. Can be used in combination with yearTo.
            </td>
            <td className="example">
            https://karolin-top-albums.herokuapp.com/api/albums?yearFrom=1967
            </td>
            <td>
              <button
                onClick={()=> setButtonPressed("fromYear")}
              >Try it</button>
            </td>
          </tr>
          <tr>
            <td>
              yearTo
            </td>
            <td>
              Number
            </td>
            <td>
              The maximum release year of the album. <br/>Will return all albums released during and before the specified year. Can be used in combination with yearFrom.
            </td>
            <td className="example">
            https://karolin-top-albums.herokuapp.com/api/albums?yearTo=1967
            </td>
            <td>
              <button
                onClick={()=> setButtonPressed("toYear")}
              >Try it</button>
            </td>
          </tr>
          <tr>
            <td>
              artist
            </td>
            <td>
              string
            </td>
            <td>
              Returns all albums with specified artist.<br/> Can include collaborations between multiple artists.
            </td>
            <td className="example">
            https://karolin-top-albums.herokuapp.com/api/albums?artist=The+Beatles
            </td>
            <td>
              <button
                onClick={()=> setButtonPressed("artist")}
              >Try it</button>
            </td>
          </tr>
          <tr>
            <td>
              genre
            </td>
            <td>
              string
            </td>
            <td>
              Returns all albums with specified genre. <br/>An album can have multiple genres defined.
            </td>
            <td className="example">
              https://karolin-top-albums.herokuapp.com/api/albums?genre=Funk
            </td>
            <td>
              <button
                onClick={()=> setButtonPressed("genre")}
              >Try it</button>
            </td>
          </tr>
          <tr>
            <td>
              page
            </td>
            <td>
              number
            </td>
            <td>
              Used for pagination. The default number of items returned is the first 50 in the collection. <br/>To get next page, use the page parameter. Default is page 1.
            </td>
            <td className="example">
              https://karolin-top-albums.herokuapp.com/api/albums?page=2
            </td>
            <td>
              <button
                 onClick={()=> setButtonPressed("page")}
              >Try it</button>
            </td>
          </tr>
        </tbody>
      </table>
 
           
    </div>

    <h3>https://karolin-top-albums.herokuapp.com/api/albums/top10</h3>
<p>This endpoint returns a collection of the top 10 albums.</p>
<div className="albums-top10-wrapper">
  <table>
    <tbody className="albums-top10-table">
    <tr>
   
    <th>
      Description
    </th>
    <th>
      Example
    </th>
    <th>
      Try it
    </th>
    </tr>
    <tr>
      <td>
        Returns the top 10 albums in the list. 
      </td>
      <td className="example">
      https://karolin-top-albums.herokuapp.com/api/albums/top10
      </td>
      <td>
        <button 
          onClick={()=> setButtonPressed("top10")}
        >Try it</button>
      </td>
    </tr>
  </tbody></table>
  </div>
  <Console content={apiResults}/>
  </div>

    
  )
}