const { User } = require('../models');

const UserController = {
    //get all UserSchema
    getAllUser(req, res) {
        User.find({})
          .populate({
            path: 'comments',
            select: '-__v'
          })
          .select('-__v')
          .sort({ _id: -1 })
          .then(dbUserData => res.json(dbUserData))
          .catch(err => {
            console.log(err);
            res.sendStatus(400);
          });
    },
    //get one User by one id
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
          .populate({
              path: 'thoughts',
              select: '-__v'
          })
          .select('-__v')
          .sort({_id: -1})
          .then(dbUserData => res.json(dbUserData))
          .catch(err => {
              console.error(err);
              res.sendStatus(500);
          });
    },
    //create a User
    createUser({ body }, res) {
        User.create(body)
          .then(dbUserData => res.json(dbUserData))
          .catch(err => res.json(err));
    },
    //update user by id
    updateUser({ params }, res){
        User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
          .then(dbUserData => {
            if (!dbUserData) {
              res.status(404).json({ message: 'No User found with this id!' });
              return;
            }
            res.json(dbUserData);
          })
          .catch(err => res.json(err));
    },
    //delete user
    deleteUser({ params }, res){
        User.findOneAndDelete({ _id: params.id })
          .then(dbUserData => res.json(dbUserData))
          .catch(err => res.json(err));
    }
};

module.exports = UserController;