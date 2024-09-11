const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(bodyParser.json());

// Simple Authentication Middleware
app.use((req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (authHeader && authHeader === 'Bearer secretToken') {
        next();
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
});

// Use the task routes
app.use('/api/tasks', taskRoutes);

// Start server
const PORT = 6000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
