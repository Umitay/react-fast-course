import TodoList from "./TodoList.tsx";
import './TodoApp.css'
import React from "react";
function TodoApp() {
	const [list, setList] = React.useState( [{id:1, completed:false, title:'Buy a book'},{id:2, completed:false, title:'Buy a T-shirt'}, {id:3, completed:false, title:'Buy a boots'}])
	
	function toggleTodo(id:number) {
		setList(
			list.map(todo=>{
				if(todo.id == id){
					todo.completed = !todo.completed;
				}
				return todo;
			})
		)
	}
	
	return (<div className='wrapper'>
		<h1>React</h1>
		<TodoList todos={list} onToggle={toggleTodo} />
	</div>)
}

export default TodoApp

