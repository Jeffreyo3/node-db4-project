exports.seed = function (knex) {
    return knex('recipes').insert([
        { name: 'BLT' },
        { name: 'Cheeseburger' },
        { name: 'Chef Salad' },
        { name: 'Greek Veggie Wrap' }
    ])
}