import { act, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"

describe('Pruebas en useForm', () => { 
    
    const initialForm ={
        name: 'Vegeta',
        email: 'vegeta@gmail.com'
    }

    test('Debe regresar los valores por defecto', () => { 
        const { result } = renderHook( () => useForm(initialForm) )
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function),
            onResetForm: expect.any( Function)
        })
     })

    test('Debe de cambiar el nombre del formulario', () => {
        const { result } = renderHook( () => useForm(initialForm) )
        const {onInputChange} = result.current 

        const newValue = 'juan'
        
        act(() =>{
            onInputChange({target: {name:'name', value:newValue}})
        })
        
        expect( result.current.name).toEqual(newValue)
        expect( result.current.formState.name).toEqual(newValue)

    })

    test('Debe de resetear el Formulario', () => {
        const { result } = renderHook( () => useForm(initialForm) )
        const {onInputChange, onResetForm} = result.current 

        const newValue = 'juan'
        
        act(() =>{
            onInputChange({target: {name:'name', value:newValue}})
            onResetForm()
        })
        console.log(initialForm);
        expect( result.current.name).toEqual(initialForm.name)
        expect( result.current.formState.name).toEqual(initialForm.name)

        
    })

 })