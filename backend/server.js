const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [
  { id: 1,
    title: "Learn React basics", 
    completed: false 
  },
  { id: 2,
    title: "Do a quick 2-minute stretching or warm-up", 
    completed: true 
  },
  { id: 3, 
    title: "Revise one topic from your previous class notes", 
    completed: false 
  },
  { id: 4, 
    title: "Solve 2 -3 practice problems from your current subject", 
    completed: false 
  },
  { id: 5, 
    title: "Review upcoming assignments and plan deadlines", 
    completed: false 
  },
  { id: 6, 
    title: "Drink a full glass of water after waking up", 
    completed: false 
  }
];

let nextId = 7;

app.get('/', (req, res) => {
  res.send("Welcome to the AI-Assisted Task Manager");
});

app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

app.get('/api/tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find(t => t.id === id);
  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }
  res.json(task);
});

app.post('/api/tasks', (req, res) => {
  const { title } = req.body;
  const newTask = { id: nextId++, title, completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.put('/api/tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find(t => t.id === id);
  if (!task) return res.status(404).json({ error: "Task not found" });

  task.completed = !task.completed;
  res.json(task);
});

app.delete('/api/tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  tasks = tasks.filter(t => t.id !== id);
  res.json({ message: "Task deleted" });
});

app.get('/api/ai/suggestions', (req, res) => {
  res.json({
    suggestions: [
    "Organize your workspace or study table",
    "Review your notes for 10 minutes",
    "Plan your tasks for tomorrow",
    "Drink a glass of water and take a short break",
    "Clean up unnecessary files from your laptop or phone",
    "Go for a 5-minute walk to refresh your mind"
    ]
  });
});

app.listen(4000, () => console.log("Backend running on http://localhost:4000"));
