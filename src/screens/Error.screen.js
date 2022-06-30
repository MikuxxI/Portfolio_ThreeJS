import "../assets/scss/screen/errors.assets.scss"

////////////////////////////////////////////////////////
/////                                               ////
/////                   Menu                        ////
/////                                               ////
////////////////////////////////////////////////////////
const Error = ({name}) => {
    return (
        <div className='error'>
            <a href="/">
                <svg height="0.8em" width="0.8em" viewBox="0 0 2 1" preserveAspectRatio="none">
                    <polyline
                            fill="none" 
                            stroke="#777777" 
                            stroke-width="0.1" 
                            points="0.9,0.1 0.1,0.5 0.9,0.9" 
                    />
                </svg> 
                Accueil
            </a>
            <div class="background-wrapper">
                <h1 id="visual">{name}</h1>
            </div>
        </div>
    )
}

  

export default Error
