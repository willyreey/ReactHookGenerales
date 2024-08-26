import { fireEvent, render, screen } from "@testing-library/react"
import { TodoList } from "../../src/08-useReducer/TodoList"

describe('Pruebas en TodoList', () => { 

    const todo = [{
        id: 10,
        description: 'Piedra del alma',
        done: false
    }]

    const onDeleteTodoMock = jest.fn()
    const onToggleTodoMock = jest.fn()

    beforeEach( () => jest.clearAllMocks() )
    
    test('debe de mostrar el todo pendiente de completar', () => { 

        render(<TodoList todos={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock}/>)

        const listItem = screen.getByRole('button')
        expect(listItem.className).toBe('btn btn-danger')

        const liElement = screen.getByLabelText('li')
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')
 
    })

    test('debe de mostrar el TODO completado', () => { 

        todo[0].done = true

        render(<TodoList todos={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock}/>)

        const spanElement = screen.getByLabelText('span')
        expect(spanElement.className).toContain('text-decoration-line-through')
 
    })

    test('El span debe de llamar en onToggleTodo cuando se hace click', () => { 
        
        render(<TodoList todos={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock}/>)

        const spanElement = screen.getByLabelText('span')
        fireEvent.click(spanElement)

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo[0].id)

    })

    test('Button debe de llamar el onDeleteTodo', () => { 
        
        render(<TodoList todos={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock}/>)

        const buttonItem = screen.getByRole('button')
       
        fireEvent.click(buttonItem)
        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo[0].id)

    })


 })