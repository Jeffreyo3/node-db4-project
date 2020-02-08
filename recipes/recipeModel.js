const db = require('../data/dbConfig');

module.exports = {
    getRecipes,
    getRecipesById,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes');
}

function getRecipesById(id) {
    return db('recipes')
        .where({ id })
        .first();
}

function getShoppingList(recipe_id) {
    return db('ingredients AS i')
        .join('recipe_ingredients AS ri', 'i.id', 'ri.ingredient_id')
        .join('recipes AS r', 'ri.recipe_id', 'r.id')
        .where({ recipe_id })
        .select('ri.quantity', 'i.ingredient_name');
}

function getInstructions(recipe_id) {
    return db('steps AS s')
        .join('recipes AS r', 's.recipe_id', 'r.id')
        .where({ recipe_id })
        .orderBy('steps.step_number')
        .select(
            'recipes.recipe_name AS recipe_name',
            'steps.step_number',
            'steps.instructions'
        );
}