const router = require('express').Router();

const {
  getAllThoughts,
  createThought,
  removeThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

router.route('/').get(getAllThoughts);

// /api/thoughts/<userId>
router.route('/:userId').post(createThought);

// /api/thoughts/<pizzaId>/<thoughtId>
router
  .route('/:userId/:thoughtId')
  .put(addReaction)
  .delete(removeThought);

// /api/thoughts/<pizzaId>/<thoughtId>/<replyId>
router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;
