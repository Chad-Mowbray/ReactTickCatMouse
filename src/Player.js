import React from 'react'
import Mouse from './Media/mouseEatingCat.jpg'
import Cat from './Media/catEatingMouse.jpeg'




// function Player(props){

// return <h1>Player: {props.catIsNext}</h1>

// }



function Player(props) {

    let displayPlayer = ''
    if(props.turn) {

        
         displayPlayer = <div className="sidenavCat"><p>a Cat Picture</p><img src={Cat} alt="a cat" height="200px" width="200px"></img></div>
    } else {
        displayPlayer = <div className="sidenavMouse"><p>a Cat Picture</p><img src={Mouse} alt="a cat" height="200px" width="200px"></img></div>
    }

    return (
        
        <div>{displayPlayer}</div>
    )
}




export default Player