import React from 'react';
import './services.css'
import Card from './Card'
import data from './ServicesModule'


const Services = () => {
    return (
        <div className="services">
            
            <div className="s-name">
                <span>Our Services</span>
                <hr/>
                <span>We provide to you the best choiches for you.
                     Adjust it to your health needs and make sure
                      your undergo treatment with our highly
                       qualified doctors you can consult with us which 
                       type of service is suitable for your health
                </span>
            </div>

            <div className="s-grid">
                {data.map((val, index) =>{
                    return <Card key={index} image={val.image} title={val.title} desc={val.desc} />
                })}
            </div>
            
            <button className="button s-button">Learn more</button>
        </div>
    )
}

export default Services
