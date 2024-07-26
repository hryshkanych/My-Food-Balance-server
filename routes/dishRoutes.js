const express = require('express');

const dishController = require('../controllers/dishController');

const router = express.Router();

router.route('/').get(dishController.getAllDishes).post(dishController.postDish);
router.route('/deleteAllDishes').delete(dishController.deleteAllDishes);
router.route('/:id').delete(dishController.deleteDish).get(dishController.getDishById);


module.exports = router;