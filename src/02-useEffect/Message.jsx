import { useState } from "react"
import { useEffect } from "react"

export const Message = () => {

    const [coords, setCoords] = useState({x:0,y:0})

    useEffect(() => {

        const onMouseEvent = ({x,y}) =>{
            const coords = {x,y}
            setCoords(coords)

        }

      window.addEventListener('mousemove',onMouseEvent)
    
      return () => {
        window.removeEventListener('mousemove',onMouseEvent)
      }
    }, [])
    
  return (
    <>
        <h3>Usuario ya Existe</h3>
        {JSON.stringify(coords)}
    </>
   
  )
}
