import React, { useState } from "react";

const Form = (props) => {
	const [inputValue, setInputValue] = useState("");

	const createTodo = async (e) => {
		const res = await fetch("http://localhost:1000/", {
			method: "post",
			body: JSON.stringify({ title: inputValue }),
			headers: { "Content-type": "application/json" },
		});
		const data = await res.json();
		props.setTodosList(data);
	};

	return (
		<div>
			<form onSubmit={(e) => e.preventDefault()}>
				<input
					type="text"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				/>
				<input
					type="button"
					value="Add"
					onClick={() => {
						createTodo();
						setInputValue("");
					}}
				/>
			</form>
		</div>
	);
};

export default Form;
