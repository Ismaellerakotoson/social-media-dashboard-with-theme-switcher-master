import React from 'react'
import dataCard from '../data/dataCard'

function OverViewCard() {

  return (
    <div>
      {
        dataCard.map((card, index)=>(
            <div key={index}>
                <h3>{card.platform}</h3>
                <p>{card.username}</p>
                <p>{card.followers}</p>
                <p>{card.label}</p>
            </div>
        ))
      }
    </div>
  )
}

export default OverViewCard
