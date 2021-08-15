import { useState } from 'react';
import { useParams } from 'react-router-dom';
import FetchData from './fetchData';

const Search = () => {
    let id = 2
    
    let {data,loadingstat,error} = FetchData('https://api-alquranid.herokuapp.com/surah/');

    console.table(data[id - 1])

    return (
        <div>
            
        </div>
    )
}

export default Search
