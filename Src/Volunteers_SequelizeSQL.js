const express = require('express');
const Sequelize = require('sequelize');
const app = express();

app.use(express.json());

// สร้างตารางข้อมูล SQlite
const sequelize = new Sequelize({
    host:'localhost',
    dialect: 'sqlite',
    storage: '../Database/Volunteers_database.sqlite'
});

//  Events Model
const Events = sequelize.define('Events', {
    ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Volunteer_ID: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Hours_Logged_ID: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Event_Name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Event_Date: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    Location: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    Organizer: {
        type: Sequelize.STRING,
        allowNull: false
    }
} ,{
    timestamps: false
});


//  Tasks Model
const Tasks = sequelize.define('Tasks', {
    ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Task_Name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Assigned_To: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Deadline: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    Status: {
        type: Sequelize.TEXT,
        allowNull: true
    }
} ,{
    timestamps: false
});

//  Volunteers Model
const Volunteers = sequelize.define('Volunteers', {
    ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Age: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Joining_Date: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }
} ,{
    timestamps: false
});

//  Hours_Logged Model
const Hours_Logged = sequelize.define('Hours_Logged', {
    ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Log_ID: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Task_ID: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Date_Worked: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    Hours_Worked: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
} ,{
    timestamps: false
});

// ตั้งค่าความสัมพันธ์ระหว่างตาราง
Events.belongsTo(Volunteers, { foreignKey: 'Volunteer_ID' });
Events.belongsTo(Hours_Logged, { foreignKey: 'Hours_Logged_ID' });
Tasks.hasMany(Hours_Logged, { foreignKey: 'Task_ID' });

module.exports = { sequelize, Events, Tasks, Volunteers, Hours_Logged };