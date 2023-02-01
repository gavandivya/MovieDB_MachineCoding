import React from 'react'

const SingleComment = ({ res }) => {
    return <><p className='font-bold'>{res.name}</p>
        <p>{res.comment}</p></>
}

export default SingleComment