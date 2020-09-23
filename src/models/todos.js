'use strict';


const schema = require('./todos-schema.js');
const dataModel = require('./model.js');

class Todos extends dataModel { }

module.exports = new Todos(schema);