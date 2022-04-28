import React from "react";

function ImgComp ( { src}) {
    
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt="slide-img" className="w-screen h-screen"></img>
}
export default ImgComp;