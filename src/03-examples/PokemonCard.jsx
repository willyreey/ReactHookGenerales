import { useRef } from "react";
import { useLayoutEffect } from "react"

export const PokemonCard = ({id, name, sprites = []}) => {

  const pRef = useRef()

  useLayoutEffect(() => {
    console.log(pRef.current.getBoundingClientRect());

  }, [name])

  return (
    <section 
    style={{ display: 'flex' }}
    ref={pRef}
    >  
    <h2>#{id} - {name}</h2>

    <div>
        {
            sprites.map( sprite => (
                <img key={sprite} src={sprite} alt={name} />
            ))
        }
    </div>

</section>
  )
}
