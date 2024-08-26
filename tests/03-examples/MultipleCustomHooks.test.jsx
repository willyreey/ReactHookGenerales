import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks"
import { useCounter } from "../../src/hooks/useCounter"
import { useFetch } from "../../src/hooks/useFetch"

jest.mock('../../src/hooks/useFetch')
jest.mock('../../src/hooks/useCounter')


describe('Pruebas en MultipleCustomHooks', () => { 

    const mockIncrement = jest.fn()
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    })

    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('Debe de mostrar el componente por defecto', () => { 

        useFetch.mockReturnValue({
            data: null, 
            isLoanding: true, 
            hasError: null
        })

        render(<MultipleCustomHooks/>)

        expect(screen.getByText('Cargando...'))
        expect(screen.getByText('Informacion del Pokemon'))
        expect().toMatchSnapshot()
        
     })

    test('Debe de mostrar un Pokemon', () => { 

        useFetch.mockReturnValue({
            data: {id: 1, name: 'Picachu',sprites: {front_default:'htpps://hola.com',front_shiny:'htpps://hola.com',back_default:'htpps://hola.com'}}, 
            isLoanding: false, 
            hasError: null
        })

        render(<MultipleCustomHooks/>)
        expect( screen.getByText('Informacion del Pokemon') ).toBeTruthy()
        expect( screen.getByRole('button', {name:'Anterior'}) ).toBeTruthy()
        
    })

    test('Debe de llamar la funcion de incrementar', () => { 
        
        useFetch.mockReturnValue({
            data: {id: 1, name: 'Picachu',sprites: {front_default:'htpps://hola.com',front_shiny:'htpps://hola.com',back_default:'htpps://hola.com'}}, 
            isLoanding: false, 
            hasError: null
        })

        render(<MultipleCustomHooks/>)
        const nextButton = screen.getByRole('button', {name:'Siguiente'})
        fireEvent.click(nextButton)
        screen.debug()
        expect(mockIncrement).toHaveBeenCalled();
        
    })

 })