import React from 'react'
import { useEffect } from 'react'
import { useState, useCallback } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallBackHook = () => {

  const [text, setText] = useState('')
    const [counter, setCounter] = useState(10)
    

    const handleChangeInput = ({target}) =>{
      setText(target.value)
    }

    const handelSubmit = (e) =>{
      e.preventDefault()

    }

    const incrementFather = useCallback(
     
      (value) => {
       
        setCounter((counter) => counter+value)
      },
      [],
    )

    useEffect(() => {

    }, [incrementFather])

    
  return (
    <>
    <h1>useCallBack Hook: {counter}</h1>
    <form onSubmit={handelSubmit} className="form-group">
      <input 
      className='form-control mt-2'
      name='buscar'
      value={text}
      onChange={handleChangeInput}
      />
      <ShowIncrement increment={ incrementFather } text={text} />
    </form>
    </>
  )
}
