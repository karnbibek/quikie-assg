import React from 'react';

const DetailsTable = ({ data }) => {
    return (
        <>
        {data.length > 0 ? 
            <table className="table table-data">
            <thead className="thead-light">
                <tr>
                    <th scope="col">COMPANY NAME</th>
                    <th scope="col">SYMBOL</th>
                    <th scope="col">CURRENCY</th>
                    <th scope="col"></th>
                    <th scope="col">EXCHANGE</th>
                </tr>
            </thead>
            <tbody style={{borderBottom:"1px solid #eeeef1"}}>
                {data.map((d) => {
                    return (<tr key={`${d.name} + ${d.exchange} + ${d.symbol}`}>
                        <th scope="row">{d.name}</th>
                        <td className="table-data-badge"><div className="badge badge-light">{d.symbol}</div></td>
                        <td>{d.currency}</td>
                        <td><button className="btn btn-primary">View Data</button></td>
                        <td>{d.exchange}</td>
                    </tr>)

                })}
            </tbody>
        </table>
    : null}
    </>
    );
}

export default DetailsTable;