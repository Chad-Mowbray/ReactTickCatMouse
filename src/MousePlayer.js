import React from 'react'
import Mouse from './Media/mouseEatingCat.jpg'


const MousePlayer = () => {

    return (
        <div className="sidenavMouse">
            <p>a Cat Picture</p>
            <img src={Mouse} alt="a cat" height="200px" width="200px"></img>
        </div>
    )
}




export default MousePlayer