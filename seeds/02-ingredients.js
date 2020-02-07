exports.seeds = function (knex) {
    return knex('ingredients').insert([

        // bacon 1
        { name: 'bacon' },
        // mayo 2
        { name: 'mayonnaise' },
        // sourdough 3
        { name: 'sourdough' },
        // hamburger bun 4
        { name: 'hamburger bun' },
        // tomato 5
        { name: 'tomato' },
        // lettuce 6
        { name: 'lettuce' },
        // beef 7
        { name: 'beef' },
        // swiss cheese 8
        { name: 'swiss cheese' },
        // spring mix 9
        { name: 'spring mix' },
        // ham 10
        { name: 'ham' },
        // turkey 11
        { name: 'turkey' },
        // ranch 12
        { name: 'ranch' },
        // olives 13
        { name: 'olives' },
        // pepperchinis 14
        { name: 'pepperchinis' },
        // hummus 15
        { name: 'hummus' },
        // spinach 16
        { name: 'spinach' }
    ])
}