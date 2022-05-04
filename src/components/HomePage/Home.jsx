import React from 'react'
import './Home.scss'

import SwiperHome from './SwiperHome'
import Grand from './Grand'
import Content from './Contents/Content'


function Home() {
    return (
        <div className='home'>
            <SwiperHome/>
            <div className="container">
                <Grand/>
                <Content/>

            </div>
        </div>
    )
}

export default Home
