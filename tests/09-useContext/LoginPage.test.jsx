import { fireEvent, render, screen } from "@testing-library/react"
import { UserContext } from "../../src/09-useContext/context/UserContext"
import { LoginPage } from "../../src/09-useContext/LoginPage"

describe('Pruebas en LoginPage', () => { 
    
    test('Debe de mostrar el componente sin el usuario', () => { 

        render(
            <UserContext.Provider value={{user: null}}>
                <LoginPage/>
            </UserContext.Provider>
        )
        
        const preTag = screen.getByLabelText('pre')
        expect(preTag.innerHTML).toBe('null')
    })

    test('Debe de llamar el setUser cuando de hace click en el boton', () => { 

        const setUserMock = jest.fn()

        render(
            <UserContext.Provider value={{user: null, setUser: setUserMock}}>
                <LoginPage/>
            </UserContext.Provider>
        )

        const buttonItem = screen.getByRole('button')
        fireEvent.click(buttonItem)
        expect(setUserMock).toHaveBeenCalled()
        expect(setUserMock).toHaveBeenCalledWith({"email": "vegeta@kamehouse.com", "id": 123, "name": "Vegeta"})


    })

 })