import React,{useState} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import {useHistory} from 'react-router-dom'

const SpaceFactForm = () => {
    const history = useHistory()

    const [formInfo, setFormInfo] = useState({
        name: "",
        fact: ""
    })

    const [formErrors, setFormErrors] = useState({
        name: "",
        fact: ""
    })

    const changeHandler = (e)=>{
        console.log("CHANGE")
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }
    
    const submitHandler = (e)=>{
        e.preventDefault();
        console.log("SUBMIT")
        axios.post("http://localhost:8000/api/newFact", formInfo)
            .then(response=>{
                console.log("FORM RESPONSE", response)
                // history.push("/spaceFacts")

                if(response.data.err){
                    setFormErrors(response.data.err.errors)
                }else{
                    history.push("/spaceFacts")
                }
            })
            .catch(err=>console.log("err",err))
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
                        <p className="text-danger">{formErrors.name?.message}</p>
                    </div>
                    <div className="form-group">
                        <label id="factLabel">Fact: </label>
                        <input onChange={changeHandler} id="factInput" type="text" name="fact" className="form-control"></input>
                        <p className="text-danger">{formErrors.fact?.message}</p>
                    </div>
                    <input className="btn btn mt-3" type="submit" value="Post your fact!"></input>
                </form>
            </div>
        </div>
    );
};

export default SpaceFactForm;