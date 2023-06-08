/**
 * @Author: Your name
 * @Date:   2023-04-21 14:58:06
 * @Last Modified by:   Your name
 * @Last Modified time: 2023-05-03 17:59:53
 */
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
        unique:true
    
    },
    description: {
        required: true,
        type: String
    },
    type: {
        required: true,
        enum:['container','object'],
        type: String
    }
   
})

module.exports = mongoose.model('Data', dataSchema)