import { useEffect } from "react"
import { useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'willyreey',
        email: 'example@ejemplo.com'
    })

    const { username,email } = formState

    const onInputChange = ({target}) =>{
        const {name, value} = target
        setFormState({
            ...formState,
            [name]: value,
        })
    }

    useEffect(() => {
    //   console.log('useEffect Changed');
    }, [])

    useEffect(() => {
        // console.log('formState Changed');
    }, [formState])

    useEffect(() => {
    // console.log('email Changed');
    }, [email])
    
  return (
    <>
        <h1>Formulario</h1>
        <hr />
        <input type="text" 
            className="form-control" 
            placeholder="Username" 
            name="username" 
            value={username} 
            onChange={onInputChange}
        />
        

        <input type="email" 
            className="form-control mt-2" 
            placeholder="example@ejemplo.com" 
            name="email"
            value={email} 
            onChange={onInputChange}
        />

        {
            (username === 'willyreey') && <Message/>
        }

    </>
  )
}
