'use strict'
const api = require('express').Router();
const db = require('./db');
const models=require('./db/models');
const Students=models.Student;
const Campuses=models.Campus;
const Users=models.User;



// STUDENTS
// GET ALL
api.get('/students', (req, res, next) => {
    Students.findAll({ include: [ Campuses ], order: [["firstName" , "ASC"]] })
    .then(function(students) {
        // console.log(JSON.stringify(students));
        res.json(students);
    })
    .catch(next);
});

module.exports = api;
