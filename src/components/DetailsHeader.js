import React, { useState } from 'react';

const DetailsHeader = ({ searchCompany }) => {
    const [term, setTerm] = useState('');

    const searchCompanies = (e) => {
        e.preventDefault();
        setTerm(e.target.value)
        console.log(e.target.value);
        searchCompany(e.target.value);
    }

    return (
        <form onSubmit={() => searchCompany(term)} className="card-header">
            <div className="card-titles">Stock details Table</div>
            <div className="search">
                <input
                    value={term}
                    type="text"
                    onChange={(e) => searchCompanies(e)}
                    className="search__input"
                    placeholder="Search by Company Name"
                />
                <img className="search__icon" src="https://img.icons8.com/android/50/000000/search.png" alt='' />
            </div>
            {/* <form onSubmit={() => searchCompany(term)} className="search">
                <input
                    type="text"
                    onChange={(e) => searchCompany(e.target.value)}
                    className="search__input"
                    placeholder="Search by Company Name"
                />
                <img className="search__icon" src="https://img.icons8.com/android/50/000000/search.png" alt='' />
            </form> */}
        </form>
    );
}

export default DetailsHeader;