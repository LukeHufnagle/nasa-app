import React,{useState} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import cardPic1 from "../images/cardImage1.jpg"
import cardPic2 from "../images/NASA_LOGO.jpg"
import cardPic3 from "../images/ISS.jpg"
import cardPic4 from "../images/rocket3.jpg"

const Dashboard = () => {
    const [marsWeather, setMarsWeather] = useState([])
    
    const getMarsWeather = () =>{
        axios.get("https://api.maas2.apollorion.com/")
            .then(response=>{
                console.log("MARS WEATHER RESPONSE", response)
                setMarsWeather(response.data)
            })
            .catch(err=>console.log("err",err))
    }
    return (
        <>
            <div>
                <h1 id="dashboardTitle">Cosmos</h1>
                <h3 id="dashboardTitle2">Enjoy your time exploring space!</h3>
            </div>
            <div id="links">
                <div id="picOfDayCard">
                    <img id="cardPic" src={cardPic1}></img>
                    <p id="cardDesc">See NASA's APOD! (Astronomy Picture of the Day)</p>
                    <Link id="cardbtn1" className="btn btn" to="/nasapic">NASA photo of the day!</Link>
                </div>
                <div id="picOfDayCard">
                    <img id="cardPic" src={cardPic2}></img>
                    <p id="cardDesc">Search through NASA's vast collection of images.</p>
                    <Link id="cardbtn2" className="btn btn" to="nasaimages">NASA image archive</Link>
                </div>
                <div id="picOfDayCard">
                    <img id="cardPic" src={cardPic3}></img>
                    <p id="cardDesc">Check the location of the ISS in real time!</p>
                    <Link id="cardbtn3" className="btn btn" to="/issLocation">International Space Station</Link>
                </div>
                <div id="picOfDayCard">
                    <img id="cardPic" src={cardPic4}></img>
                    <p id="cardDesc">Post a fun space fact to the webiste for others to read!</p>
                    <Link id="cardbtn4" className="btn btn" to="/spaceFacts">User Posted Space Facts</Link>
                </div>
                {/* <Link className="btn btn" to="">PlaceHolder</Link>
                <Link className="btn btn" to="">PlaceHolder</Link>
                <Link className="btn btn" to="">PlaceHolder</Link> */}
            </div>
            <div id="weatherReport">
                <h3 id="weatherCap">Weather on Mars reported by NASA's Curiosity Rover: </h3>
                <button className="btn btn" onClick={getMarsWeather}>Check Weather!</button>
                <h4 id="weatherInfo">Weather: {marsWeather.atmo_opacity}</h4>
                <h4 id="weatherInfo">Minimum Temperature: {marsWeather.min_temp}C</h4>
                <h4 id="weatherInfo">Maximum Temperature: {marsWeather.max_temp}C</h4>
            </div>
        </>
    );
};

export default Dashboard;