/**
 * PostgreSQL configuration.
 */

'use strict'

require('dotenv').config()
const {Client} = require('pg');
const { Sequelize } = require('sequelize')

const connection = new Client({
    user: 'gr10',
    database: 'gr10',
    password: '12345678',
    port: 5432,
    host:'localhost'
})

module.exports = connection;
