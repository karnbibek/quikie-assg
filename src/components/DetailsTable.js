import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from './Button';
import server from '../apis/server';

const DetailsTable = ({ data, viewMode }) => {
    const history = useHistory();
    const saveHandler = async (d) => {
        const response = await server.post('/postStocks', {
            name: d.name,
            symbol: d.symbol,
            currency: d.currency,
            exchange: d.exchange
        });
        window.alert(response.data.message);
        history.push('/view');
    }

    const deleteHandler = async (d) => {
        const response = await server.post('/delete', {
            name: d.name,
            symbol: d.symbol,
            currency: d.currency,
            exchange: d.exchange
        });
        history.push('/');
        window.alert((response.data.message));
    }

    return (
        <>
            {data.length > 0 ?
                <table className="table table-data">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">COMPANY NAME</th>
                            <th scope="col" className="table-data-centered">SYMBOL</th>
                            <th scope="col" className="table-data-centered">CURRENCY</th>
                            <th scope="col"></th>
                            <th scope="col" className="table-data-centered">EXCHANGE</th>
                        </tr>
                    </thead>
                    <tbody style={{ borderBottom: "1px solid #eeeef1" }}>
                        {data.map((d) => {
                            return (<tr key={`${d.name} + ${d.exchange} + ${d.symbol} + Math.random()`}>
                                <th scope="row">{d.name}</th>
                                <td className="table-data-badge"><div className="badge badge-light">{d.symbol}</div></td>
                                <td className="table-data-centered">{d.currency}</td>
                                {!viewMode ?
                                    <td><Button d={d} saveHandler={saveHandler} /></td>
                                    :
                                    <td><button className="btn btn-danger table-data--button-link" onClick={() => deleteHandler(d)}>Delete</button></td>
                                }
                                <td className="table-data-centered">{d.exchange}</td>
                            </tr>)
                        })}
                    </tbody>
                </table>
                : null}
        </>
    );
}

export default DetailsTable;