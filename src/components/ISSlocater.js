import axios from 'axios';
import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import cardPic3 from "../images/ISS.jpg"

const ISSlocater = () => {
    const [ISSinfo, setISSInfo] = useState({})
    const [formInfo, setFormInfo] = useState({
        latitude: "",
        longitude: ""
    })
    const [formResults, setFormResults] = useState([])

    useEffect(()=>{
        axios.get("https://api.wheretheiss.at/v1/satellites/25544")
            .then(response=>{
                console.log("RESPONSE", response)
                setISSInfo(response.data)
            })
            .catch(err=>console.log("err",err))
    },[])

    const changeHandler = (e) =>{
        console.log("CHANGE")
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        // console.log("SUBMIT")
        axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${formInfo.latitude}%2C+${formInfo.longitude}&key=96801d0af153492a80ff32504abaa8ed&pretty=1`)
            .then(response=>{
                console.log("FORM RESPONSE", response)
                setFormResults(response.data.results)
            })
            .catch(err=>console.log("err",err))
    }

    return (
        <>
            <h1 id="issTitle">Track the ISS in real time!</h1>
            <div id="container">
                <div id="picDiv">
                    <img src={cardPic3}></img>
                </div>
                <div>
                    <h2 id="issInfo">Latitude: {ISSinfo.latitude}</h2>
                    <h2 id="issInfo">Longitude: {ISSinfo.longitude}</h2>
                    <h3 id="issInfo">Velocity: {ISSinfo.velocity}</h3>
                </div>
                <form onSubmit={submitHandler} id="issForm">
                    <div className="form-group">
                        <label className="form-group">Latitude: </label>
                        <input onChange={changeHandler} id="issInput" type="text" name="latitude" className="form-control" placeholder="latitude"></input>
                    </div>
                    <div className="form-group">
                        <label className="form-group">
                            Longitude: 
                        </label>
                        <input onChange={changeHandler} id="issInput" type="text" name="longitude" className="form-control" placeholder="longitude"></input>
                    </div>
                    <input id="formbtn" type="submit" value="Show location" className="btn btn mt-2"></input>
                    <Link to="/" className="btn btn mt-2">Home</Link>
                </form>
                {
                    formResults.map((obj, i)=>{
                        return(
                            <div key={i} className="container">
                                <h3 id="issFormResult">Real World Location: </h3>
                                <h4 id="issFormResult">{obj.formatted}</h4>
                            </div>
                            )
                        })
                }
            </div>
        </>
    );
};

export default ISSlocater;