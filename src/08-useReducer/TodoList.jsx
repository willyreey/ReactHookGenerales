export const TodoList = ({todos = [], onDeleteTodo, onToggleTodo}) => {
    
  return (
    <ul className="list-group">
        {
            todos.map(todo => (
                <li key={todo.id} aria-label="li" className="list-group-item d-flex justify-content-between">
                <span
                 className={`"align-self-center" ${(todo.done) ? 'text-decoration-line-through': ''} `}
                 onClick={() => onToggleTodo(todo.id)}
                 aria-label="span"
                >
                  {todo.description}
                </span>
                <button 
                  onClick={() => onDeleteTodo(todo.id)} 
                  className="btn btn-danger"
                >Borrar</button>
                </li>

            ))
        }
    </ul>
  )
}
