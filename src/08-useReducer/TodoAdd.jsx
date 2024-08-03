import { useForm } from '../hooks/useForm'

export const TodoAdd = ({ OnNewTodo }) => {

    const {  description, onInputChange, onResetForm }  = useForm({
        description: '',
    })

    const onFormSubmit = (event) =>{
        
        event.preventDefault()
        if(description.length <= 1) return
        
        const newTodo ={
            id: new Date().getTime(),
            description: description,
            done: false
        }

        OnNewTodo(newTodo)
        onResetForm()
    }
    
  return (
    <>
        <form onSubmit={onFormSubmit}>
            <input 
                type="text" 
                value={description} 
                name="description"
                onChange={onInputChange} 
                placeholder="Que hay que hacer?" 
                className="form-control" 
            />
            <button type="submit" className="btn btn-outline-primary mt-2">Agregar</button>
        </form>
    
    </>
  )
}
