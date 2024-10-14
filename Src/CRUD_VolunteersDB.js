const express = require('express');
const { sequelize, Events, Tasks, Volunteers, Hours_Logged } = require('./Volunteers_SequelizeSQL');
const app = express();

app.use(express.json());

const initializeDatabase = async () => {
    try {
        await sequelize.sync({ alter: true }); // ตารางเก็บข้อมูล
        console.log("Tables created successfully.");
    } catch (error) {
        console.error("Unable to create tables: ", error);
    }
};


// CRUD สำหรับ Events
app.get('/events', async (req, res) => {
    try {
        const events = await Events.findAll();
        res.json(events);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/events/:id', async (req, res) => {
    try {
        const event = await Events.findByPk(req.params.id);
        if (!event) {
            res.status(404).send('Event not found');
        } else {
            res.json(event);
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post('/events', async (req, res) => {
    try {
        const event = await Events.create(req.body);
        res.status(201).json(event);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.put('/events/:id', async (req, res) => {
    try {
        const event = await Events.findByPk(req.params.id);
        if (!event) {
            res.status(404).send('Event not found');
        } else {
            await event.update(req.body);
            res.json(event);
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

app.delete('/events/:id', async (req, res) => {
    try {
        const event = await Events.findByPk(req.params.id);
        if (!event) {
            res.status(404).send('Event not found');
        } else {
            await event.destroy();
            res.send({});
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

// CRUD สำหรับ Tasks
app.get('/tasks', async (req, res) => {
    try {
        const tasks = await Tasks.findAll();
        res.json(tasks);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/tasks/:id', async (req, res) => {
    try {
        const task = await Tasks.findByPk(req.params.id);
        if (!task) {
            res.status(404).send('Task not found');
        } else {
            res.json(task);
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post('/tasks', async (req, res) => {
    try {
        const task = await Tasks.create(req.body);
        res.status(201).json(task);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.put('/tasks/:id', async (req, res) => {
    try {
        const task = await Tasks.findByPk(req.params.id);
        if (!task) {
            res.status(404).send('Task not found');
        } else {
            await task.update(req.body);
            res.json(task);
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

app.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Tasks.findByPk(req.params.id);
        if (!task) {
            res.status(404).send('Task not found');
        } else {
            await task.destroy();
            res.send({});
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

// CRUD สำหรับ Volunteers
app.get('/volunteers', async (req, res) => {
    try {
        const volunteers = await Volunteers.findAll();
        res.json(volunteers);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/volunteers/:id', async (req, res) => {
    try {
        const volunteer = await Volunteers.findByPk(req.params.id);
        if (!volunteer) {
            res.status(404).send('Volunteer not found');
        } else {
            res.json(volunteer);
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post('/volunteers', async (req, res) => {
    try {
        const volunteer = await Volunteers.create(req.body);
        res.status(201).json(volunteer);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.put('/volunteers/:id', async (req, res) => {
    try {
        const volunteer = await Volunteers.findByPk(req.params.id);
        if (!volunteer) {
            res.status(404).send('Volunteer not found');
        } else {
            await volunteer.update(req.body);
            res.json(volunteer);
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

app.delete('/volunteers/:id', async (req, res) => {
    try {
        const volunteer = await Volunteers.findByPk(req.params.id);
        if (!volunteer) {
            res.status(404).send('Volunteer not found');
        } else {
            await volunteer.destroy();
            res.send({});
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

// CRUD สำหรับ Hours_Logged
app.get('/hours-logged', async (req, res) => {
    try {
        const hoursLogged = await Hours_Logged.findAll();
        res.json(hoursLogged);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/hours-logged/:id', async (req, res) => {
    try {
        const hoursLog = await Hours_Logged.findByPk(req.params.id);
        if (!hoursLog) {
            res.status(404).send('Hours logged not found');
        } else {
            res.json(hoursLog);
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post('/hours-logged', async (req, res) => {
    try {
        const hoursLog = await Hours_Logged.create(req.body);
        res.status(201).json(hoursLog);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.put('/hours-logged/:id', async (req, res) => {
    try {
        const hoursLog = await Hours_Logged.findByPk(req.params.id);
        if (!hoursLog) {
            res.status(404).send('Hours logged not found');
        } else {
            await hoursLog.update(req.body);
            res.json(hoursLog);
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

app.delete('/hours-logged/:id', async (req, res) => {
    try {
        const hoursLog = await Hours_Logged.findByPk(req.params.id);
        if (!hoursLog) {
            res.status(404).send('Hours logged not found');
        } else {
            await hoursLog.destroy();
            res.send({});
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

// เริ่มเซิร์ฟเวอร์
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await initializeDatabase(); // เริ่มต้นฐานข้อมูลเมื่อเริ่มเซิร์ฟเวอร์
});

