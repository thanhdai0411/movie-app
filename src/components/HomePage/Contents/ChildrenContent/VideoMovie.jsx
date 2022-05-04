import { forwardRef } from 'react';
import requests from '../../../API';
import useFetch from '../../../CustomHooks/useFetch';



function VideoMovie({ id, handleToggleVideo, active }, ref) {
    const urlFetchVideo = requests.fetchVideo(id);
    const { data: dataVideo, isLoading } = useFetch(urlFetchVideo);
    let video = dataVideo.results;
  
    return (
        <>
            {video &&
                video.length > 0 &&
                video.slice(0, 1).map((item) => (
                    <div
                        className={`detail__video ${active ? 'active' : ''}`}
                        key={item.id}>
                        <div className="opacity-vid" onClick={handleToggleVideo}></div>
                        <iframe
                            ref={ref}
                            className="iframe-video"
                            src={`https://www.youtube.com/embed/${item.key}?version=3&enablejsapi=1`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    </div>
                ))}
        </>
    );
}

export default forwardRef(VideoMovie);
