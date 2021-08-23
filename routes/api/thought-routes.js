const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction,
} = require('../../controllers/thought-controller');

router.route('/')
  .get(getAllThoughts)
  .post(createThought);

// /api/thoughts/<userId>
router.route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/<pizzaId>/<thoughtId>
router.route('/:userId/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/<userId>/<thoughtId>/<replyId>
router.route('/:userId/:thoughtsId/:reactionId')
  .post(addReaction)
  .delete(removeReaction);

module.exports = router;
