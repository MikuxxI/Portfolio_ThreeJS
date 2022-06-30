import React from 'react'

// Vidéo
import A_Hover from '../assets/video/A.Hover-horizontal.mp4'
import M_Hover from '../assets/video/M.Hover-horizontal.mp4'

 
const IntroHover = ({user}) => {
    
    return user === "Allan" ? 
        <>
            <video src={A_Hover} type="video/mp4" preload="auto" autoPlay muted /> 
        </>
            :
        <> 
            <video src={M_Hover} type="video/mp4" preload="auto" autoPlay muted />
        </>

}

export default IntroHover