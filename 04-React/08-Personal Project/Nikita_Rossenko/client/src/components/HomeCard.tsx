import React, { FC, useEffect, useState } from 'react'

interface CardProps {
    head:string;
    number:number;
    description:string;
}

const HomeCard:FC<CardProps> = ({head, number, description}) => {
  const [color, setColor] = useState("black")

  useEffect(() => {
    setColor(randomNumberColors())
  }, [])

  function randomNumberColors(){
    const newColor = `#${Math.floor(Math.random()*16777215).toString(16)}`
    return newColor
    
  }

  return (
    <div className="card">
        <h1>{head}</h1>
        <p className="number" style={{color:color}}>{number}</p>
        <p>{description}</p>
    </div>
  )
}

export default HomeCard