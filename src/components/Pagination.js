import React from 'react';

const Pagination = ({ datasPerPage, currentPage, totalDatas, nextPage, prevPage }) => {

    return (
        <nav className="page">
            <ul className="pagination justify-content-center">
                <li className="page-item page-number">
                    {currentPage === 1 ? <div>Page 1 - 5 of {totalDatas}</div> :
                        <div>Page {currentPage * 5 - 5} - {currentPage * 5} of {totalDatas}</div>
                    }
                </li>
                {currentPage !== 1 ?
                    <li className="page-item page-changer">
                        <div className='page-link' onClick={() => prevPage()}>Previous</div>
                    </li> :
                    <li className="page-item page-changer">
                        <div className='page-link'>Previous</div>
                    </li>
                }
                {datasPerPage * currentPage === totalDatas ?
                    <li className="page-item page-changer">
                        <div className="page-link">Next</div>
                    </li> :
                    <li className="page-item page-changer">
                        <div className="page-link" onClick={() => nextPage()}>Next</div>
                    </li>
                }
            </ul>
        </nav>
    );
}

export default Pagination;