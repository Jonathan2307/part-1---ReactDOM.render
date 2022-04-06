import React from "react"
import Card from "./components/Card.js"
import Hero from "./components/Hero.js"

import Navbar from "./components/Navbar.js"
import Data from "./data.js"



export default function App() {
    const cards = Data.map(item => {
        
        return (
            <Card 
            key={item.id}
            // item={item} 
            // dans Card, les props = props.item.location/...
            // alors qu'avec le spread, on retire le .item (plus lisible)
            {...item}
            />
            )
        }
        )
        return (
            <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
            {cards}
            </section>
        </div>
    )
}