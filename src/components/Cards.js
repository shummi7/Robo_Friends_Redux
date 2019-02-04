import React from 'react';

const Card=({id,name,email})=>{
    return(
        <div className='tc grow white bg-purple br3 pa3 ma2 dib bw2 shadow-5'>
            <img src={`https://robohash.org/l${id}?size=200x200`} alt='robot'/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card;