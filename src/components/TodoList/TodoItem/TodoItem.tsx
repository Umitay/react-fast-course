import {FC} from "react";

const styles = {
	li:{
		display:'flex',
		justifyContent:'space-between',
		alignItems:'center',
		padding:'.5rem 1rem',
		border:'1px solid #ccc',
		borderRadius: '4px',
		marginBottom:'.5rem',
	},
	input:{marginRight:'1rem'}
}
export interface ITodoItem{
	id:number;
	completed:boolean;
	title:string;
}
export type OnChangeType = (id: number) => void;
const TodoItem:FC<{item:ITodoItem, index:number,onChange:OnChangeType}> = ({item, index, onChange})=>{
	const classes:string[]  =[];
	if(item.completed){
		classes.push('done');
	}
	console.log(item)
	return (
		<li id={`todo-${item.id}`} style={styles.li}>
			<span className={classes.join(' ')}>
				<input id={`chbox-todo-${item.id}`} checked={item.completed} type='checkbox' style={styles.input}  onChange={()=>onChange(item.id)}/>
				<strong>{index}</strong>
				&nbsp;
				{item.title}
			</span>
			<button className="rm">&times;</button>
		</li>
	)
}
export default TodoItem