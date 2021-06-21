import React from 'react'

const Newssectionitems = ({book_pictur}) => {
    return (
        <div style={{width:'200px',height:'250px',backgroundColor:'dodgerblue',marginLeft:'10px'}}>
            <img src={book_pictur} style={{height:'100%',width:'100%'}}/>
        </div>
    )
}

export default Newssectionitems
