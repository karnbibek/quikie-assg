import React, { useEffect, useState } from 'react';
import stockApi from '../apis/stock-api';
import DetailsHeader from './DetailsHeader';
import DetailsTable from './DetailsTable';
import Pagination from './Pagination';

const Details = () => {

    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const datasPerPage = 5;
    // const [datasPerPage, setDatasPerPage] = useState(5);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const response = await stockApi.get('/');
        setDatas(response.data.data);
        setLoading(false);
    };

    const indexOfLastData = currentPage * datasPerPage;
    const indexOfFirstData = indexOfLastData - datasPerPage;
    const currentDatas = datas.slice(indexOfFirstData, indexOfLastData);

    // const paginate = pageNum => setCurrentPage(pageNum);

    const nextPage = () => setCurrentPage(currentPage + 1);

    const prevPage = () => setCurrentPage(currentPage - 1);

    const searchCompany = (term) =>{
        // console.log('submit', term);
        let filteredData;
        filteredData = datas.filter((d) => d.name.toLowerCase().includes(term.toLowerCase()));
        setDatas(filteredData);
    }

    return (
        <div className="container-details">
            <div className="card">
                {/* <> */}
                <DetailsHeader searchCompany={searchCompany} />
                {!loading ?
                    <>
                        <DetailsTable data={currentDatas} />
                        <Pagination datasPerPage={datasPerPage} currentPage={currentPage} totalDatas={datas.length} nextPage={nextPage} prevPage={prevPage} />
                        {/* <Pagination datasPerPage={datasPerPage} currentPage={currentPage} totalDatas={datas.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} /> */}
                    </>
                    : 'Loading'}
                {/* </> */}
            </div>
        </div>
    );
}

export default Details;