
// const Home = ()=>{
//     return(
//         <div>
//                 <h1>this is  home page</h1>
//                 <p>if you are having an account <a href="/signup" >signup</a></p>
//                 <p>if you are having an account <a href="/login" >login</a></p>
//         </div>
//     )
// }
// export default Home

import React from 'react';
import './index.css'; 
import { useState} from "react";
import{useNavigate} from "react-router-dom"
import Cookies from "js-cookie";
import { useEffect } from 'react';

const Home = () => {

const  navigate = useNavigate()
 const [Videos,setVideo] = useState([])
useEffect(()=>{
    const token = Cookies.get('jwt_token');
    if(token === undefined){
        navigate("/login")
     }
})


const goToAuth =()=>{
    Cookies.remove('jwt_token')
    navigate("/login")
}


const fetchVideo = async () => {
    try {
        const jwtToken = Cookies.get("jwt_token");

      const url = "http://localhost:4235/videos/Id/6551c2a418eb8d7addfac1a7";
      const options = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        method: 'GET',
      };

      const response = await fetch(url, options);

      if (response.ok) { 
        const data = await response.json();
        
        setVideo(data);
        console.log('Video data:', data);
      } else {
        
        const errorData = await response.json();
        console.error('Error fetching video:', errorData);
        setVideo("Error");
      }

    } catch (error) {
      console.error('Error fetching video:', error);
      setVideo("Error");
    }
  };
  fetchVideo()
  const fetchVideos = async () => {
    try {
        const jwtToken = Cookies.get("jwt_token");

      const url = "http://localhost:4235/videos";
      const options = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        method: 'GET',
      };

      const response = await fetch(url, options);

      if (response.ok) { 
        const data = await response.json();
        
        setVideo(data);
        console.log('Video data:', data);
      } else {
        
        const errorData = await response.json();
        console.error('Error fetching video:', errorData);
        setVideo("Error");
      }

    } catch (error) {
      console.error('Error fetching video:', error);
      setVideo("Error");
    }
  };

    const goToVideos = ()=>{
        navigate('/videos')
     }
     console.log(fetchVideo());
     console.log(fetchVideos());







    return (
        <div className="home-container">
            <h1>Welcome to Our Pfx-watch<button className='logout-button' onClick={goToAuth}>logout</button></h1>
            <h2>This is the Home Page</h2>

            <img className="logos"  src='au.jpeg' alt="logo" />

            {/* <p><a href="/signup">If you are having an account signup</a></p>
            <p><a href="/login">If you are having an account login</a></p> */}
        </div>
    );
};

export default Home;
