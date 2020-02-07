exports.seed = function (knex) {
    return knex('recipes').insert([
        { recipe_name: 'BLT' },
        { recipe_name: 'Cheeseburger' },
        { recipe_name: 'Chef Salad' },
        { recipe_name: 'Greek Veggie Wrap' }
    ])
}