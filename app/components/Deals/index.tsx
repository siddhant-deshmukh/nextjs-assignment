import React from 'react'
import DealCard from './DealCard'

const cardItem = {
  discount: 20,
  tag: "Limited time",
  title: "Webbuilder 1",
  desc: "Computer  Modern clasic with wix support",
  actualPrice: 39.96,
  originalPrice: 49.96,
}

export default function Deals() {
  return (
    <section id="related-deals">
      <h2>Related deals you might like for</h2>
      <div id="card-list">
        <DealCard cardItem={cardItem}/>
        <DealCard cardItem={cardItem}/>
        <DealCard cardItem={cardItem}/>
      </div>
    </section>
  )
}
