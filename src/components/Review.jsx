import React from 'react'

const Review = ({name, rating, review, bg}) => {
  return (
    <div className={`border text-left p-3 rounded-2xl h-40 w-200 ${bg}`}>
      <h1 className='font-bold'>{name}</h1>
      <h2 className='mb-3'>{rating}</h2>
      <p>{review}</p>
    </div>
  )
}

export default Review