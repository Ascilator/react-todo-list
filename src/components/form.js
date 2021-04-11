
const Form = ({ setInputText, inputText, setTodos, todos, setFilter }) => {

    const inputTextHandler = (e) => {

        setInputText(e.target.value);
    };
    const submitToDoHandler = (e) => {
        e.preventDefault();
        if (inputText !== "") {

            setTodos([
                ...todos,
                { text: inputText, completed: false, id: Math.floor(Math.random() * 1000) },
            ]);
            setInputText('');
        }
    }
    const StatusHandler = (e) => {
        setFilter(e.target.value);
    }
    return (
        <form >
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitToDoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button >
            <div className="select">
                <select onChange={StatusHandler} name="todos" className="filter-todo">
                    <option className="all">All</option>
                    <option className="completed">Completed</option>
                    <option className="uncompleted">Uncomplited</option>
                </select>
            </div>
        </form>
    );
}


export default Form;