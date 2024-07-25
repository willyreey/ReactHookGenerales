import React from "react"


export const ShowIncrement = React.memo(({increment, text}) => {
    
    console.log('me dibuje');
  return (
      <button
        className='btn btn-primary mt-2'
        onClick={() => {increment(parseInt(text)) }}
      >
          Increment
      </button>
  )
})
