import React from "react";
import katieZaferes from "../images/katie-zaferes.png";
import starImage from "../images/star.png";

export default function Card() {
    return (
        <div className="card">
            <img src={katieZaferes} alt="katieZaferes" className="card--image"/>
        <div className="card--stats">
        <img src={starImage} alt="star Image" className="card--star"/>
            <span>5.0</span>
            <span className="gray">(6) • </span>
            <span className="gray">USA</span>
        </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className="bold">from $136</span> / person</p>
        </div> 
        )
}