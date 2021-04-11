import Todo from './todo.js'

const TodoList = ({ todos, setTodos, filteredTodos }) => {


    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo setTodos={setTodos} todos={todos} todo={todo} text={todo.text} key={todo.id}></Todo>
                ))}
            </ul>
        </div>
    );
}


export default TodoList;