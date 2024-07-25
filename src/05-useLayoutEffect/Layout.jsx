import { LoandingMessage } from "../03-examples/LoandingMessage";
import { PokemonCard } from "../03-examples/PokemonCard";
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"


export const Layout = () => {

  const { counter, increment, decrement } = useCounter(1)
  
    const {data, isLoanding, hasError} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)

  return (
    <>
        <h1>Informacion del Pokemon</h1>
        <hr />

        {
          isLoanding 
          ? <LoandingMessage/>
          : <PokemonCard 
            id={data?.id} 
            name={data.name} 
            sprites={[
              data.sprites.front_default,
              data.sprites.front_shiny,
              data.sprites.back_default,
              data.sprites.back_shiny,
            ]}/>
        }
        
        <button className="btn btn-primary" onClick={() => decrement()}>
          Anterior
        </button>
        <button className="btn btn-primary" onClick={() => increment()}>
          Siguiente
        </button>
    </>
  )
}
