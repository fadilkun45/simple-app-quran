import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import 'css/surahlist.css'
import FetchData from 'apis/fetchData'

const Surahlist = () => {
  let {data,loadingstat,error} = FetchData('https://api-alquranid.herokuapp.com/surah');
  let [search, setSearch] = useState("")


  const handleChange = e => {
    setSearch(e.target.value);
  }

  const filterData = data && data.filter(datas => datas.nama.toLowerCase().includes(search.toLowerCase()))

  
    return (
      <>
      <h2>Daftar Surah</h2>
        {/* saat data belom ke load maka searchbar tidak akan muncul */}
         {
           filterData ? <input type="text" className="search" onKeyUp={handleChange} placeholder="cari surah bedasarkan nama" /> : ""
         }
        <div className="surah-list">
       
          {
            loadingstat && <div>sedang memuat</div>
          }
           {
             
             data && filterData.map((datas) => (
               
               <Link to={'/surah/' + datas.nomor}>
              <div className="surah-card" id={datas}>
              <h3>Surah {datas.nama}</h3>
                <p>jumlah ayat : {datas.ayat}</p>
                <p>urutan : {datas.nomor}</p>
            </div>
            </Link>
             ))
            }
            {
              filterData == 0 ? <div>maaf surah tidak ditemukan mungkin typo</div> : ""
            }
        </div>
      </>
    )
}

export default Surahlist
