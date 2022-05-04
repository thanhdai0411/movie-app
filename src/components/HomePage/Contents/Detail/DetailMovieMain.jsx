import React, { useRef, useState, memo, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import VideoMovie from '../ChildrenContent/VideoMovie';
import DetailMovie from '../ChildrenContent/DetailMove';

function DetailMovieMain() {
    const { id } = useParams();
    const [active, setActive] = useState(false);

    const refVideo = useRef();

    const handleToggleVideo = () => {
        setActive(!active);
        var frame = refVideo.current;
        frame.contentWindow.postMessage(
            '{"event":"command","func":"pauseVideo","args":""}',
            '*'
        );
    };

    return (
        <div className="detail">
            <DetailMovie id={id} handleToggleVideo={handleToggleVideo} />
            <VideoMovie
                id={id}
                ref={refVideo}
                handleToggleVideo={handleToggleVideo}
                active={active}
            />
        </div>
    );
}

export default DetailMovieMain;
