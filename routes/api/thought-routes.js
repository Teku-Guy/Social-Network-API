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
  .delete(removeThought);

// /api/thoughts/<pizzaId>/<thoughtId>
router.route('/:userId/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

// /api/thoughts/<thoughtId>/readctions
router.route('/:thoughtId/reactions/')
  .post(addReaction)
  .delete(removeReaction);

module.exports = router;
