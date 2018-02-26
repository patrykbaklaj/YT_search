import React from 'react';

const VideoDetails = ({ video }) => {
    
    if(!video) {
        return <div>Loading</div>
    }
    
    const videoId = video.id.videoId;
    const url = `https://youtube.com/embed/${videoId}`;
    
    return (
    
        <div className='vide-detail col-md-8 height-auto'>
            <div className='embed-responisive embed-responsive-16by9'>
                <iframe className='embed-responsive-item' src={ url } title={ video.snippet.title }></iframe>
            </div>
            <div className="details">
                <div className="h3">
                    { video.snippet.title }
                </div>
                <div>
                    { video.snippet.description }
                </div>
            </div>
        </div>
        
    );
    
}

export default VideoDetails;