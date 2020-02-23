exports.seed = function(knex) {
    return knex('recipe_ingredients').insert([
        // BLT
            // Bacon Slices
        { recipe_id: 1, ingredient_id: 1, quantity: 8},
            // Mayonnaise OZ
        { recipe_id: 1, ingredient_id: 2, quantity: 2},
            // Tomato Slices
        { recipe_id: 1, ingredient_id: 5, quantity: 3},
            // Lettuce Leaves
        { recipe_id: 1, ingredient_id: 6, quantity: 5},
            // Sourdough Slices
        { recipe_id: 1, ingredient_id: 3, quantity: 2},

        // Cheeseburger
            // Beef OZ
        { recipe_id: 2, ingredient_id: 7, quantity: 8},
            // Lettuce Leaves
        { recipe_id: 2, ingredient_id: 6, quantity: 2},
            // Tomato Slices
        { recipe_id: 2, ingredient_id: 5, quantity: 2},
            // Swiss Cheese Slices
        { recipe_id: 2, ingredient_id: 8, quantity: 1},
            // Hamburger Buns
        { recipe_id: 2, ingredient_id: 4, quantity: 1},

        // Chef Salad
            // Spring Mix OZ
        { recipe_id: 3, ingredient_id: 9, quantity: 16},
            // Tomato Slices
        { recipe_id: 3, ingredient_id: 5, quantity: 12},
            // Cucumber Slices
        { recipe_id: 3, ingredient_id: 17, quantity: 12},
            // Swiss Cheese Slices
        { recipe_id: 3, ingredient_id: 8, quantity: 8},
            // Ham OZ
        { recipe_id: 3, ingredient_id: 10, quantity: 8},
            // Turkey OZ
        { recipe_id: 3, ingredient_id: 11, quantity: 8},
            // Ranch OZ
        { recipe_id: 3, ingredient_id: 12, quantity: 1},

        // Greek Veggie Wrap
            // Hummus OZ
        { recipe_id: 4, ingredient_id: 15, quantity: 3},
            // Tortillas (individual)
        { recipe_id: 4, ingredient_id: 18, quantity: 1},
            // Cucumber Slices
        { recipe_id: 4, ingredient_id: 17, quantity: 3},
            // Tomato Slices
        { recipe_id: 4, ingredient_id: 5, quantity: 3},
            // Olive OZ
        { recipe_id: 4, ingredient_id: 13, quantity: 2},
            // Pepperchini OZ
        { recipe_id: 4, ingredient_id: 14, quantity: 2},
    ])
}