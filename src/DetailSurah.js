import { useEffect, useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useParams } from 'react-router-dom';
import './css/surahdetail.css'
import FetchData from './fetchData';
import React from 'react'
const DetailSurah = () => {
    let {id} = useParams()
    let [dataDetail, setDataDetail] = useState()
    let [stickyObj, setStickyObj] = useState(false)
    let {data,loadingstat,error} = FetchData('https://api-alquranid.herokuapp.com/surah/' + id);
    let { data: dataDetails } = FetchData('https://api-alquranid.herokuapp.com/surah/');


    useEffect(() => {
        dataDetails && setDataDetail(dataDetails[id - 1])
        console.log(dataDetails)
        console.log(dataDetail)
        console.log(id - 1)
    }, [loadingstat]) // only logging every after fetching from api


    let handleScroll = () => {
        if(window.scrollY >= 100){
            setStickyObj(true)
        }else{
            setStickyObj(false)
        }
    }

    window.addEventListener('scroll',handleScroll)




    return (
        <div className="detail-surah">
            {
                loadingstat && <p>sedang memuat</p>
            }
            {
                dataDetail && <div className={stickyObj ? 'info-surah sticky' : 'info-surah'}>
                    <h2>Surah {dataDetail.nama}</h2>
                    <p>Asma : {dataDetail.asma}</p>
                    <p>Jumlah Ayat : {dataDetail.ayat}</p>
                    <AudioPlayer
                        
                        src={dataDetail.audio}
                        // other props here
                    />
                </div>
            }
        
            {
                data && data.map((datas) => (
                   <div className="detail" key={datas.nomor}> {/* just some react things about mapping data */}
                        <p>{datas.nomor}</p>
                       <div className="details">
                        <p>{datas.ar}</p>
                        <div dangerouslySetInnerHTML={{__html:datas.tr}} />
                        <p>{datas.id}</p>
                        </div>
                   </div>
                ))
            }
        </div>
    )
}

export default DetailSurah
