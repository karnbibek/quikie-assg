import React from 'react';
import google from '../Assests/GOOGL.png';
import fb from '../Assests/FB.png';
import amzn from '../Assests/amazon_PNG5.png';

const datas = [
    {
        "name": "GOOGL",
        "logo": google,
        "value": 1515
    },
    {
        "name": "FB",
        "logo": fb,
        "value": 266
    },
    {
        "name": "AMZN",
        "logo": amzn,
        "value": 3116
    }
]

const Cards = () => {
    return (
        <div className="container-cards">
            {datas.map((data) => {
                return (<div className="container-cards-cover" key={data.name}>
                    <div className="container-cards-cover--top">
                        <div className="container-cards-cover--top-name">
                            {data.name}
                        </div>
                        <div className="container-cards-cover--top-logo">
                            <img src={data.logo} alt={data.name} className="logo" />
                        </div>
                    </div>
                    <div className="container-cards-cover--bottom">
                        USD {data.value}
                    </div>
                </div>)
            })}
        </div>
    );
}

export default Cards;