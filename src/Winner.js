import React from 'react'
import Splinter from './Media/Splinter.jpeg'
import Thundercat from './Media/Thundercat.jpeg'




function Winner(props) {

    let displayVictor = ''
    if(props.victor === 'mouse') {
        displayVictor = <img src={Splinter} alt="splinter" className="animated slideInUp delay-1s winner"></img>
    } else if(props.victor === 'cat'){
        displayVictor = <img src={Thundercat} alt="splinter" className="animated slideInUp delay-1s winner"></img>
    } else {
        displayVictor = null

    }


    return (
        
        // <div>{props.victor}</div>
        <div>{displayVictor}</div>
    )
}


export default Winner