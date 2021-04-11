import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/form';
import TodoList from './components/todo_list'

function App() {

	const [inputText, setInputText] = useState('');
	const [todos, setTodos] = useState([]);
	const [filter, setFilter] = useState('all');
	const [filteredTodos, setfilteredTodos] = useState([]);



	useEffect(() => {
		const filterHandler = () => {
			switch (filter) {
				case 'Completed':
					setfilteredTodos(todos.filter(todo => {
						return todo.completed
					}))
					break;
				case 'Uncomplited':
					setfilteredTodos(todos.filter(todo => {
						return !todo.completed
					}))
					break;
				default:
					setfilteredTodos(todos)
					break;
			}
		}

		filterHandler();
		saveLocalTodo();

	}, [todos, filter])
	useEffect(() => {
		getLocalTodo();
	}, [])


	const saveLocalTodo = () => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}
	const getLocalTodo = () => {
		if (localStorage.getItem('todos') === null) {
			localStorage.setItem('todos', JSON.stringify([]))
		} else {
			let todoFromLocal = JSON.parse(localStorage.getItem('todos'));
			setTodos(todoFromLocal)
		}
	}


	return (
		<div className="App">
			<header>
				<h1>ToDo List </h1>
			</header>
			<Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setFilter={setFilter} ></Form>
			<TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}></TodoList>
		</div>
	);
}

export default App;
