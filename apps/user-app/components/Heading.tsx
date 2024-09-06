import React from 'react'

const Heading = ({text}: {text: string}) => {
  return (
    <div className='text-4xl font-bold text-violet-600'>{text}</div>
  )
}

export default Heading