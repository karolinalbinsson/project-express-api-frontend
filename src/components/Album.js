import React, {useState,useEffect} from 'react';
import { Console } from './Console';

export const Album = () => {

  const[getTitle,setGetTitle] = useState(false);
  const[getPlacement, setGetPlacement] = useState(false);
  const[apiResults,setApiResults] = useState([]);

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
    console.log("useEffect in console!");
    if(getTitle){
      fetchByTitle();
      setGetTitle(false);
    }
  },[getTitle]);
  
  useEffect(() => {
    console.log("useEffect in console!");
    if(getPlacement){
      fetchByPlacement();
      setGetPlacement(false);
    }
  },[getPlacement]);
  
const handleButtonClick = (caller) => {
  if(caller === 'title'){
    
  }

  if(caller==='placement'){

  }
}
  return(
    <div>
       <h2>Single items</h2>
       <p>These endpoints return a single album item based on the album title or placement.</p>
       <p>Try the different requests and check out the results in the console window below.</p>
       <div className="album-wrapper"> 
  <h3>https://karolin-top-albums.herokuapp.com/api/albums/[type]/[parameter]</h3>
          <table className="album-table"><tbody>
            <tr>
              <th>
                Parameter
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
                title
              </td>
              <td>
                string
              </td>
              <td>
                the album title. 
              </td>
              <td className="example">
                https://karolin-top-albums.herokuapp.com/api/albums/title/Rubber+Soul
              </td>
              <td>
                <button
                onClick={() => setGetTitle(true)}
                >Try it!</button>
              </td>
            </tr></tbody>
          </table>
       </div>

       <div className="album-title-wrapper"> 
        <table><tbody>
            <tr>
              <th>
                Parameter
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
                placement
              </td>
              <td>
                Number
              </td>
              <td>
               The placement in the top-500 list.
              </td>
              <td className="example">
              https://karolin-top-albums.herokuapp.com/api/albums/placement/1
              </td>
              <td>
                <button
                onClick={() => setGetPlacement(true)}
                >Try it!</button>
              </td>
            </tr></tbody>
          </table>

         
            <Console content={apiResults}/>
          

       </div>
    </div>
  )
}