import { render, screen } from "@testing-library/react"
import { UserContext } from "../../src/09-useContext/context/UserContext"
import { HomePage } from "../../src/09-useContext/HomePage"

describe('Probando HomePage', () => { 

    const user = {
        id: 1,
        name: 'Gohan'

    }
    
    test('Debe de mostrar el componente sin el usuario', () => { 

        render(
            <UserContext.Provider value={{user: null}}>
                <HomePage/>
            </UserContext.Provider>
        )
        const preTag = screen.getByLabelText('pre')
        expect(preTag.innerHTML).toBe('null')
        
    })

    test('Debe de mostrar el componente con el usuario', () => { 

        render(
            <UserContext.Provider value={{user: user}}>
                <HomePage/>
            </UserContext.Provider>
        )
        const preTag = screen.getByLabelText('pre')
        expect(preTag.innerHTML).toContain(user.name)

        
    })
     

 })