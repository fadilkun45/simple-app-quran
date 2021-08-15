import React from 'react'
import './css/home.css'
import Surahlist from './Surahlist'

const Home = () => {
    return (
        <main>
            <div className="text-info">
            <h2>Quran App</h2>
            <p>Aplikasi Al quran berbasis Web</p>
            </div>
            <Surahlist />
        </main>


    )
}

export default Home ;
