import React from 'react'
import Cat from './Media/catEatingMouse.jpeg'


const CatPlayer = () => {

    return (
        <div className="sidenavCat">
            <p>a Cat Picture</p>
            <img src={Cat} alt="a cat" height="200px" width="200px"></img>
        </div>
    )
}




export default CatPlayer