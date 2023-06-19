import React, { FC } from 'react'

interface CardProps {
    head:string;
    number:number;
    description:string;
}

const HomeCard:FC<CardProps> = ({head, number, description}) => {

  function randomNumberColors(){
    const numbers:any = document.querySelectorAll(".number")

    for (let i = 0 ; i < numbers.length ; i++){
        numbers[i].style.color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    }
}

randomNumberColors();

  return (
    <div className="card">
        <h1>{head}</h1>
        <p className="number">{number}</p>
        <p>{description}</p>
    </div>
  )
}

export default HomeCard