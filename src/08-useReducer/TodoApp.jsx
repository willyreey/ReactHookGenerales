import { useTodo } from "../hooks/useTodo";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";


export const TodoApp = () => {

    const {todos, allTodoCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo} = useTodo()

  return (
    <>
        <h1>TodoApp {allTodoCount}, <small>Pendientes: {pendingTodosCount}</small></h1>
        
        <hr />
        <div className="row">
            <div className="col-7">
                <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo}/>
                
            </div>
            <div className="col-5">
                <h4>Agregar Todo</h4>
                <hr />
                <TodoAdd OnNewTodo={handleNewTodo}/>
            </div>
        </div>
        
    </>
  )
}
