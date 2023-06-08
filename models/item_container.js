/**
 * @Author: Your name
 * @Date:   2023-04-21 14:58:06
 * @Last Modified by:   Your name
 * @Last Modified time: 2023-05-18 20:42:28
 */
const mongoose = require('mongoose');

const itemContainerSchema = new mongoose.Schema({

    item_name: {
        required: true,
        type: String,
        unique:true
    
    },
    container_name: {
        required: true,
        type: String
    }

   
})

module.exports = mongoose.model('item_containers', itemContainerSchema)
