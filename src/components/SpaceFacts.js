import axios from 'axios';
import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom'

const SpaceFacts = () => {
    const[allFacts, setAllFacts] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/allFacts")
        .then(response=>{
            console.log("FACT RESPONSE", response)
            setAllFacts(response.data.results)
        })
        .catch(err=>console.log("err",err))
    },[])

    return (
        <div>
            <h1 id="title">Space Facts</h1>
            <Link className="btn btn mb-3" to="/spaceFactForm">Create a new fact!</Link>
            <Link className="btn btn mb-3" to="/">Home</Link>
            {
                allFacts.map((fact, i)=>{
                    return(
                        <div id="factInfo">
                            <h4>UserName: {fact.name}</h4>
                            <p>Fact: {fact.fact}</p>
                        </div>
                    )
                })
            }
        </div>
    );
};


export default SpaceFacts;