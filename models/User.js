const { Schema, model } = require('mongoose');

const User = new Schema({
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true 
    },
    email: {
        type: String,
        required: true,
        unique: true,
        //match a valid email address
    },
    //thoughts model thru id
    //friends model thru id
});

//Create a virtual called friendCount that retrieves the length of the user's friends array field on query.

module.exports = User;