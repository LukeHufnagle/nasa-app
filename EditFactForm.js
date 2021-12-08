import React,{useState, useEffect} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import {useHistory} from 'react-router-dom'

const EditFactForm = () => {
    const history = useHistory()

    const [formInfo, setFormInfo] = useState({
        name: "",
        fact: ""
    })

    useEffect(()=>{
        axios.get()
    },[])

    const changeHandler = (e)=>{
        console.log("CHANGE")
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }
    
    const submitHandler = (e)=>{
        e.preventDefault();
        // axios.put("http://localhost:8000")
    }

    return (
        <div>
            <h1 id="title">Create a new Space Fact!</h1>
            <Link className="btn btn" to="/spaceFacts">Back to Space Facts</Link>
            <div>
                <form className="factForm" onSubmit={submitHandler}>
                    <div className="form-group">
                        <label id="factLabel">Name: </label>
                        <input onChange={changeHandler} id="factInput" type="text" name="name" className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label id="factLabel">Fact: </label>
                        <input onChange={changeHandler} id="factInput" type="text" name="fact" className="form-control"></input>
                    </div>
                    <input className="btn btn mt-3" type="submit" value="Post your fact!"></input>
                </form>
            </div>
        </div>
    );
};

export default EditFactForm;