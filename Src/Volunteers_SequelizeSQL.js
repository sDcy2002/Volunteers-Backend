const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const app = express();

app.use(express.json());

// สร้างตารางข้อมูล SQlite
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '../Database/Volunteers_database.sqlite'
});

//  Events Model
const Events = sequelize.define('Events', {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Volunteer_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Hours_Logged_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Event_Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Event_Date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    Location: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    Organizer: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

//  Tasks Model
const Tasks = sequelize.define('Tasks', {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Task_Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Assigned_To: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Deadline: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    Status: {
        type: DataTypes.TEXT,
        allowNull: true
    }
});


//  Volunteers Model
const Volunteers = sequelize.define('Volunteers', {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Joining_Date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
});

//  Hours_Logged Model
const Hours_Logged = sequelize.define('Hours_Logged', {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Log_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Task_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Date_Worked: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    Hours_Worked: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

// ตั้งค่าความสัมพันธ์ระหว่างตาราง
Events.belongsTo(Volunteers, { foreignKey: 'Volunteer_ID' });
Events.belongsTo(Hours_Logged, { foreignKey: 'Hours_Logged_ID' });
Tasks.hasMany(Hours_Logged, { foreignKey: 'Task_ID' });

module.exports = { sequelize, Events, Tasks, Volunteers, Hours_Logged };