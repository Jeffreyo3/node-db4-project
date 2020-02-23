const express = require('express');

const Recipes = require('./recipeModel');

const router = express.Router();

router.get('/', async (req, res) => {
    await Recipes.getRecipes()
        .then(recipe => {
            res.json(recipe);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get recipes', error: err.message })
        });
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    await Recipes.getRecipesById(id)
        .then(recipe => {
            if (recipe) {
                res.json(recipe);
            } else {
                res.status(404).json({ message: 'Failed to get recipe with given id' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get recipes', error: err.message })
        });
});

router.get('/:id/shoppingList', async (req, res) => {
    const { id } = req.params;

    await Recipes.getShoppingList(id)
        .then(list => {
            if (list.length) {
                res.status(200).json(list)
            } else {
                res.status(404).json({ message: 'Failed to get shopping list with given recipe id' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get shopping list', error: err.message })
        });
});

router.get('/:id/instructions', async (req, res) => {
    const { id } = req.params;

    await Recipes.getInstructions(id)
        .then(instruction => {
            if (instruction.length) {
                res.status(200).json(instruction)
            } else {
                res.status(404).json({ message: 'Failed to get instructions with given recipe id' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get instructions', error: err.message })
        });
});

module.exports = router;