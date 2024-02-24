import React from 'react'
import "./deals.styles.scss"

export default function DealCard({ cardItem }: {
  cardItem: any
}) {
  return (
    <div className="">
      <div className="img-section">
        <img src="/item-img.jpg" />
      </div>
      <div className="item-info">
        <div className="deals">
          <span>{cardItem.discount}% off</span>
          <span>Limited time</span>
        </div>
        <h4>{cardItem.title}</h4>
        <p>{cardItem.desc}</p>
        <div className="price">
          <div>${cardItem.actualPrice}</div>
          <s>${cardItem.originalPrice}</s>
          <span>({cardItem.discount} % off)</span>
        </div>
        <button>
          View Deal
        </button>
      </div>
    </div>
  )
}

