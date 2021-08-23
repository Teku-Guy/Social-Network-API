const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

//Reaction Schema
const Reaction = new Schema(
    {
      reactionId: {
        //object id with mongodb
        type: Schema.Types.ObjectId
      },
      reactionBody: {
          type: String,
          required: true,
          //280 character maximum
          maxLength: [280, 'Max characters of 280 is allowed.']
      },
      //username
      createdAt: {
          type: Date,
          default: Date.now,
          get: createdAtVal => dateFormat(createdAtVal)
      },
    },
    {
      toJSON: {
          getters: true
      },
      
    }    
);

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      trim: true,
      //Must be between 1 and 280 characters
      minLength: [1, 'Must be between 1 and 280 characters'],
      maxLength: [280, 'Must be between 1 and 280 characters']
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    },
    //username
    username: {
        type: String,

    },
    //reactions
    reactions:[Reaction]
  },
  {
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
  }
);

//Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
ThoughtSchema.virtual('reactionCount').get(() => {
    //returns reaction couunt
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;