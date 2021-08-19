import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import 'css/surahlist.css'
import FetchData from 'apis/fetchData'

const Surahlist = () => {
  let {data,loadingstat,error} = FetchData('https://api-alquranid.herokuapp.com/surah/');
  console.log(data)
  
    return (
      <>
      <h2>Daftar Surah</h2>
        <div className="surah-list">
          {
            loadingstat && <div>sedang memuat</div>
          }
           {
             data && data.map((datas, index) => (
              <Link to={'/surah/' + datas.nomor}>
              <div className="surah-card" id={datas}>
              <h3>Surah {datas.nama}</h3>
                <p>jumlah ayat : {datas.ayat}</p>
                <p>urutan : {datas.nomor}</p>
            </div>
            </Link>
             ))
           }
        </div>
      </>
    )
}

export default Surahlist
