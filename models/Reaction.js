const { Schema, model } = require('mongoose');

const Thought = new Schema({
    reactionId: {
      //object id with mongodb
    },
    reactionBody: {
        type: String,
        required: true,
        //280 character maximum
    },
    //username
    createdAt: {
        type: Date,
        // Set default value to the current timestamp
        // Use a getter method to format the timestamp on query
        required: true,
    },
    //username
    //reactions
});

//Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.

module.exports = Thought;