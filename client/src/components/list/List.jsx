import React from "react";
import ListItem from "./listItem/ListItem";

const List = (props) => {
	return (
		<div>
			{props.todosList.map((todo) => (
				<ListItem
					key={todo.id}
					todo={todo}
					setTodosList={props.setTodosList} 
				/>
			))}
		</div>
	);
};

export default List;
