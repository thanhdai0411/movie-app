import React, { useEffect, useState } from 'react';

import TopRate from './TopRate'
import Trending from './Trending'
import UpComing from './UpComing'

function Content() {

    return (
        <div className="content-movie">
            <TopRate/>
            <Trending/>
            <UpComing/>
        </div>
    );
}

export default Content;
