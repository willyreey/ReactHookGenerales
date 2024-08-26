import { render, screen } from "@testing-library/react"
import { TodoAdd } from "../../src/08-useReducer/TodoAdd"

describe('Pruebas en TodoAdd', () => { 
    
    test('Debe de mostrar el componente correctamente', () => { 

        render(<TodoAdd />)
        screen.debug()
        
     })

 })