import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import server from '../apis/server';
import DetailsTable from './DetailsTable';

const SavedStocks = () => {
    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        saved();
    }, []);

    const saved = async () => {
        const response = await server.get('/getStocks');
        setDatas(response.data.stocks);
        setLoading(false);
    }

    return (
        <div className="container-details">
            <div className="card">
                {loading ? <h2 style={{margin:"2rem", textAlign: "center"}}>Loading...</h2> :
                    <>
                        {datas.length > 0 ? <DetailsTable data={datas} viewMode={true} /> : 
                        <h2 style={{margin:"2rem", textAlign: "center"}}>No saved datas to show</h2>}
                        <div className="table-data--button"><Link to="/" className="btn btn-primary mb-3 table-data--button-link">Back</Link></div>
                    </>
                }
            </div>
        </div>
    );
}

export default SavedStocks;