import React, { useState } from "react";

// SCSS
import "../assets/scss/screen/home.assets.scss"

import IntroHover from "../components/Video.intro-Hover";

const Home = () => {

    const [readHoverAllan, setReadHoverAllan] = useState(null);
    const [readHoverMickael, setReadHoverMickael] = useState(null);

    return (
        <div className='container-part'>
            <div className='part-side' id="left" onMouseEnter={() => setReadHoverAllan("Allan")} onMouseLeave={() => setReadHoverAllan(null)}>
                {readHoverAllan &&
                    <IntroHover user={readHoverAllan} />
                }
            </div>
            <div className='part-center' id="carre">
            </div>
            <div className='part-side' id="right" onMouseEnter={() => setReadHoverMickael("Mickael")} onMouseLeave={() => setReadHoverMickael(null)}>
                {readHoverMickael &&
                    <IntroHover user={readHoverMickael} />
                }
            </div>
        </div>
    )
}

export default Home