import React,{useState, useEffect}  from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import background from "../images/double-bubble-dark.png"

const NASAimages = () => {
    const [formInfo, setFormInfo] = useState([])

    const [searchOption, setSearchOption] = useState({
        searchOption: ""
    })


    // useEffect(()=>{
    //     axios.get("https://images-api.nasa.gov")   
    //         .then(response=>{
    //             console.log(response)
    //         })
    //         .catch(err=>console.log(err))
    // },[])

    //CHANGE HANDLER
    const changeHandler = (e)=>{
        // console.log("CHANGE")
        setSearchOption({
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        // console.log("SUBMIT")
        axios.get(`https://images-api.nasa.gov/search?q=${searchOption.searchOption}&media_type=image`)
            .then(response=>{
                console.log("RESPONSE", response)
                setFormInfo(response.data.collection.items)
            })
            .catch(err=>console.log("err",err))

    }
    console.log(formInfo)
    return (
        <div id="nasaImageBackground" style={{backgroundImage: `url(${background})`}}>
            <h1 id="title">Welcome to NASA's Image Archives</h1>
            <form onSubmit={submitHandler} id="form">
                <div className="form-group">
                    <label className="form-group">Search NASA's image archives:</label>
                    <input name="searchOption" onChange={changeHandler} id="formInput" className="form-control" type="text" placeholder="Search the cosmos..."></input>
                </div>
                
                <input id="formbtn" type="submit" className="btn btn"></input>
                <Link id="formbtn" className="btn btn" to="/">Home</Link>
            </form>
            {/* <Link id="btn" className="btn btn" to="/">Home</Link> */}
            <Link id="btn2" to="/nasapic" className="btn btn">Astronomy Picture of the Day!</Link>
            {
                formInfo.map((obj, i)=>{
                    return(
                        <div key={i} className="gridContainer" style={{backgroundImage: `url(${background})`}}>
                            <div>
                                <img id="nasaImage" width="200" height="200" src={obj.links[0].href}></img>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default NASAimages;