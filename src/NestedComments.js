import React from 'react'
import { comments } from './constants';
import SingleComment from './SingleComment';


const renderNested = (com) => {
    return com.map((res) => {
        return <><SingleComment key={res.id} res={res} />
            {res.replies && <div className='p-3 border-secondary border-start'>{renderNested(res.replies)}</div>}</>
    })
}

const NestedComments = () => {
    return (
        <div className='bg-gray-300 p-3'>
            {renderNested(comments)}
        </div>
    )
}

export default NestedComments