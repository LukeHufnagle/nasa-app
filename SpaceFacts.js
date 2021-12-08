import axios from 'axios';
import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import background from "../images/double-bubble-dark.png"

const SpaceFacts = () => {
    const[allFacts, setAllFacts] = useState([])

    const [deleteToggle, setDeleteToggle] = useState(false)

    useEffect(()=>{
        axios.get("http://localhost:8000/api/allFacts")
        .then(response=>{
            console.log("FACT RESPONSE", response)
            setAllFacts(response.data.results)
        })
        .catch(err=>console.log("err",err))
    },[deleteToggle])

    const deleteFact = (e, idOfFact)=>{
        console.log("Deleting Fact!", idOfFact)
        axios.delete(`http://localhost:8000/api/delete/fact/${idOfFact}`)
            .then(response=>{
                console.log("RESPONSE AFTER DELETING", response)
                setDeleteToggle(!deleteToggle)
            })
            .catch(err=>console.log(err))
    }

    return (
        <div id="nasaImageBackground" style={{backgroundImage: `url(${background})`}}>
            <h1 id="title">Space Facts</h1>
            <Link className="btn btn mb-3" to="/spaceFactForm">Create a new fact!</Link>
            <Link id="factHomeBtn" className="btn btn mb-3" to="/">Home</Link>
            {
                allFacts.map((fact, i)=>{
                    return(
                        <div id="factInfo">
                            <h4>UserName: {fact.name}</h4>
                            <p>Fact: {fact.fact}</p>
                            <button onClick={(e)=>deleteFact(e, fact._id)} id="factDeleteBtn" className="btn btn-danger">Delete</button> 
                            {/* | <Link to={`/editFactForm/${fact._id}`} id="factEditBtn" className="btn btn-danger">Edit</Link> */}
                        </div>
                    )
                })
            }
        </div>
    );
};


export default SpaceFacts;