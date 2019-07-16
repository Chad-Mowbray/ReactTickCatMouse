import React from 'react'
import Mouse from './Media/mouseEatingCat.jpg'
import Cat from './Media/catEatingMouse.jpeg'


function Player(props) {

    let displayPlayer = ''
    if(props.turn) {

        
         displayPlayer = <div className="sidenavCat animated zoomInLeft box uni"><p>a vicious cat</p><img src={Cat} alt="a cat" height="200px" width="200px"></img></div>
    } else {
        displayPlayer = <div className="sidenavMouse animated zoomInRight box uni"><p>a fierce mouse</p><img src={Mouse} alt="a cat" height="200px" width="200px"></img></div>
    }

    return (
        
        <div>{displayPlayer}</div>
    )
}




export default Player