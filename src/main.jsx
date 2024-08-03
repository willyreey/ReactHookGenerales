import ReactDOM from 'react-dom/client'
import { Padre } from './07-tarea-memo/Padre'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { CallBackHook } from './06-memos/CallBackHook'
// import { Memorize } from './06-memos/Memorize'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks'
// import { CounterApp } from './01-useState/CounterApp'
// import { HooksApp } from './HooksApp'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import './index.css'
// import './08-useReducer/intro-reducer'
import { TodoApp } from './08-useReducer/TodoApp'


 ReactDOM.createRoot(document.getElementById('root')).render(
 // <React.StrictMode>
    <TodoApp/>    
 // </React.StrictMode>, 
 )
