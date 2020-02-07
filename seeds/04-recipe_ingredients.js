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
            // Beef Patties
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
        
        // Greek Veggie Wrap
    ])
}