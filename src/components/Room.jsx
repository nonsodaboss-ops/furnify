import React from 'react'

const Room = ({image, name}) => {
  return (
    <div className='flex flex-col items-center'>
      <img src={image} alt="" className='h-80 w-70 rounded-md'/>
      <h1 className='font-semibold'>{name}</h1>
    </div>
  )
}

export default Room