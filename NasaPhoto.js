import React,{useState, useEffect} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'


const NasaPhoto = () => {
    const API_KEY = "A9nZ4pDBj3kEpemJubp5rTZFhe9kl4Jf1PoOtAGX"
    const [picData, setPicData] = useState({})

    useEffect(()=>{
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
            .then(response=>{
                console.log("Response after getting APOD", response)
                setPicData(response.data)
            })
            .catch(err=>console.log("err",err))
    },[])  

    return (
        <>  
            <h1 id="picOfDayTitle">NASA Picture of the Day!</h1>
            <div id="container">
                <div id="picDiv">
                    <img width="600" height="600" src={picData.url}></img>
                </div>
                <div>
                    <h3 id="picTitle">Title: {picData.title}</h3>
                    <p id="picDate">Date: {picData.date}</p>
                    <p id="picExpl">{picData.explanation}</p>
                    <Link className="btn btn" to="/">Home</Link>
                </div>
            </div>
        </>
    );
};

export default NasaPhoto;