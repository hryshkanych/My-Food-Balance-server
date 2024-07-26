const Dish = require('../models/dishModel')

const dishController = {
  getAllDishes: async (req, res) => {
    try {
      const dishes = await Dish.find();
      res.status(200).json(dishes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getDishById: async (req, res) => {
    try {
      const { id } = req.params;
      const dish = await Dish.findById(id);
      if (!dish) {
        return res.status(404).json({ message: "Dish is not found" });
      }
      res.status(200).json(dish);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  postDish: async (req, res) => {
    try {
      const newDish = new Dish(req.body);
      await newDish.save();
      res.status(201).json(newDish);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  deleteDish: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedDish = await Dish.findByIdAndDelete(id);
      if (!deletedDish) {
        return res.status(404).json({ message: "Dish is not found" });
      }
      res.status(200).json(deletedDish);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deleteAllDishes: async (req, res) => {
    try {
      await Dish.deleteMany({});
      res.status(200).json({ message: "All dishes deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};


module.exports = dishController;