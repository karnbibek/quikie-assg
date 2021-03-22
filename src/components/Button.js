import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import server from '../apis/server';

const Button =  ({ d, saveHandler }) => {
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        checkStock();
    })

    const checkStock = async () => {
        const response = await server.post('/checkStocks', {
            name: d.name,
            symbol: d.symbol,
            currency: d.currency,
            exchange: d.exchange
        });
        // console.log(response.data);
        if (response.data) {
            setSaved(true);
        } else {
            setSaved(false);
        }
    }

    return (
        <>
            {saved ? <Link to="/view" className="btn btn-danger table-data--button-link">View</Link>
            :
            <button className="btn btn-primary table-data--button-link" onClick={() => saveHandler(d)}>Save</button>
            }
        </>
    );
}

export default Button;