import React from 'react';
import style from './listItem.module.css'

const ListItem = (props) => {

	const setStatus = async (param) => {
		const res = await fetch(`http://localhost:1000/${props.todo.id}/${param}`, {
			method: "put",
			headers: { "Content-type": "application/json" },
		});
		const data = await res.json();
		props.setTodosList(data);
	}
	
	return (
		<div className={style.listItem}>
			<h1>{props.todo.title}</h1>
			<h3>Status:</h3>
			<p>{props.todo.isCompleted ? "Completed" : "Pending"}</p>
			<p>{props.todo.isImportant ? "Important" : "Not important"}</p>
		
			<button
				onClick={() => setStatus('compelete')
			}
			>{props.todo.isCompleted ? "Completed" : "Pending"}</button>
			<button
				onClick={() => setStatus('important')
			}
			>{props.todo.isImportant ? "Important" : "Not important"}</button>
		</div>
	)
}

export default ListItem


// git remote add origin https://github.com/aleksandrapodhurska/todo-fullstack.git
// git branch -M main
// git push -u origin main