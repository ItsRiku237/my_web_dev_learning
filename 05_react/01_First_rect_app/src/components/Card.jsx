import React from "react";
import './Card.css'

const Card = (props) => {
    return (
        <div className="card" style={{overflow: "hidden"}}>
            <img src="https://iimtu.edu.in/blog/wp-content/uploads/2023/11/CSE-aa.jpg" alt="" width={300} height={150} style={{}}/>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    )
}
export default Card