const { Schema, model } = require('mongoose');

const Thought = new Schema({
    thoughtText: {
      type: String,
      required: true,
      trim: true 
      //Must be between 1 and 280 characters
    },
    createdAt: {
        type: Date,
        // Set default value to the current timestamp
        // Use a getter method to format the timestamp on query
        required: true,
        unique: true,
    },
    //username
    //reactions
});

//Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.

module.exports = Thought;