const { v4: uuidv4 } = require('uuid');

let tasks = [];

// Controller for creating a task
exports.createTask = (req, res) => {
    const { title, description, dueDate } = req.body;
    const newTask = {
        id: uuidv4(),
        title,
        description,
        status: 'Pending',
        dueDate
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
};

// Controller for retrieving all tasks
exports.getTasks = (req, res) => {
    res.json(tasks);
};

// Controller for updating a task by ID
exports.updateTask = (req, res) => {
    const { id } = req.params;
    const { title, description, status, dueDate } = req.body;

    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex === -1) {
        return res.status(404).json({ message: 'Task not found' });
    }

    const updatedTask = {
        ...tasks[taskIndex],
        title: title || tasks[taskIndex].title,
        description: description || tasks[taskIndex].description,
        status: status || tasks[taskIndex].status,
        dueDate: dueDate || tasks[taskIndex].dueDate
    };

    tasks[taskIndex] = updatedTask;
    res.json(updatedTask);
};

// Controller for deleting a task by ID
exports.deleteTask = (req, res) => {
    const { id } = req.params;
    const taskIndex = tasks.findIndex(task => task.id === id);

    if (taskIndex === -1) {
        return res.status(404).json({ message: 'Task not found' });
    }

    tasks.splice(taskIndex, 1);
    res.status(204).send();
};
