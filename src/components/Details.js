import React, { useEffect, useState } from 'react';
import stockApi from '../apis/stock-api';
import DetailsHeader from './DetailsHeader';
import DetailsTable from './DetailsTable';
import Pagination from './Pagination';

const Details = () => {

    const [datas, setDatas] = useState([]);
    const [dataFull, setDataFull] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const datasPerPage = 5;

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const response = await stockApi.get('/');
        setDatas(response.data.data);
        setDataFull(response.data.data);
        setLoading(false);
    };
    const indexOfLastData = currentPage * datasPerPage;
    const indexOfFirstData = indexOfLastData - datasPerPage;
    const currentDatas = datas.slice(indexOfFirstData, indexOfLastData);

    const nextPage = () => setCurrentPage(currentPage + 1);

    const prevPage = () => setCurrentPage(currentPage - 1);

    const searchCompany = (term) => {
        let filteredData;
        filteredData = dataFull.filter((d) => d.name.toLowerCase().includes(term.toLowerCase()));
        setDatas(filteredData);
    }

    return (
        <div className="container-details">
            <div className="card">
                <DetailsHeader searchCompany={searchCompany} />
                {!loading ?
                    <>
                        <DetailsTable data={currentDatas} viewMode={false} />
                        <Pagination datasPerPage={datasPerPage} currentPage={currentPage} totalDatas={datas.length} nextPage={nextPage} prevPage={prevPage} />
                    </>
                    :
                    <h2 style={{ margin: "2rem", textAlign: "center" }}>Loading...</h2>}
            </div>
        </div>
    );
}

export default Details;