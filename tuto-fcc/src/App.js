import React from "react"
import Card from "./components/Card.js"
// import Hero from "./components/Hero.js"

import Navbar from "./components/Navbar.js"
// import Main from "./components/Main"



export default function App() {
    return (
            // <Hero />
        <div>
            <Navbar />
            <Card 
                img="katie-zaferes.png"
                rating= "5.0"
                reviewCount ={6}
                country= "France"
                title= "Life Lessons with Katie Zaferes"
                price= {136}
            />
        </div>
    )
}