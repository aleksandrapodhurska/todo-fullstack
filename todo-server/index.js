const express = require("express");
const cors = require("cors");
const { v4 } = require("uuid");

const app = express();
app.use(cors());
app.use(express.json());

const todos = [
	{
		id: v4(),
		title: "To eat breakfast",
		isImportant: false,
		isCompleted: false,
	},
	{
		id: v4(),
		title: "To feed a cat",
		isImportant: false,
		isCompleted: false,
	},
	{
		id: v4(),
		title: "To buy milk",
		isImportant: false,
		isCompleted: false,
	},
];

app.get("/", (req, res) => {
	res.send(todos);
});

app.post("/", (req, res) => {
	const id = v4();
	const { title } = req.body;
	if (!title) {
		return res.status(400).send({ err: "Missing text" });
	}
	todos.push({ id, title, isCompleted: false, isImportant: false });
	res.send(todos);
});

app.put("/:id/compelete", (req, res) => {
	const { id } = req.params;
	if (!id) {
		return res.status(400).send({ err: "Not found such todo" });
	}
	const todo = todos.find((item) => item.id === id);
	if (!todo) {
		return res.status(400).send({ err: "Not found such todo" });
	}
	todo.isCompleted = !todo.isCompleted;
	res.send(todos);
});

app.put("/:id/important", (req, res) => {
	const { id } = req.params;
	if (!id) {
		return res.status(400).send({ err: "Not found such todo" });
	}
	const todo = todos.find((item) => item.id === id);
	if (!todo) {
		return res.status(400).send({ err: "Not found such todo" });
	}
	todo.isImportant = !todo.isImportant;
	res.send(todos);
});

app.listen(1000, () => console.log("Server is running on post 1000"));
