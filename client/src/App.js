import React, { useState, useEffect } from "react";
import Form from "./components/form/Form";
import List from "./components/list/List";

const App = () => {
	const [todosList, setTodosList] = useState([]);

	useEffect(async () => {
		const res = await fetch("http://localhost:1000/");
		const data = await res.json();
		setTodosList(data);
	}, []);

	return (
		<div>
			<Form setTodosList={setTodosList} />
			<List todosList={todosList} setTodosList={setTodosList} />
		</div>
	);
};

export default App;
