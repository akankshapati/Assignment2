import React from 'react'
import Card from './Card'
import data from './CardData'
import './LatestArticle.css'

const LatestArticle = () => {
  return (
    <div className="latest-Article">
        <h2>Check out our latest article</h2>

        <div className="latest-card">
        {data.map((val, index) =>{
                    return <Card key={index} image={val.image} title={val.title} desc={val.desc} />
                })}
        </div>
         <button className="button l-button"><a href=""></a> View all</button>        
    </div>
  )
}

export default LatestArticle
