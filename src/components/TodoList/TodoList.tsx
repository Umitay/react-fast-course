import TodoItem, {ITodoItem, OnChangeType} from "./TodoItem/TodoItem.tsx";
import {FC} from "react";

const styles= {
	ul:{
		listStyle:'none',
		margin:0,
		padding:0
	}
}

const TodoList:FC<{todos: ITodoItem[], onToggle:OnChangeType}> = ({todos, onToggle})=>{
	return (
		<ul style={styles.ul}>
			{todos.map((todo, index:number)=>{
				return <TodoItem key={`key-${todo.id}`} item={todo} index={index+1} onChange={onToggle}/>
			} )}
		</ul>
	)
}
export default TodoList;