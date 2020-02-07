exports.seeds = function (knex) {
    return knex('ingredients').insert([

        // bacon 1
        { name: 'Bacon Slices' },
        // mayo 2
        { name: 'Mayonnaise OZ' },
        // sourdough 3
        { name: 'Sourdough Slices' },
        // hamburger bun 4
        { name: 'Hamburger Buns' },
        // tomato 5
        { name: 'Tomato Slices' },
        // lettuce 6
        { name: 'Lettuce Leaves' },
        // beef 7
        { name: 'Beef OZ' },
        // swiss cheese 8
        { name: 'Swiss Cheese Slices' },
        // spring mix 9
        { name: 'Spring Mix OZ' },
        // ham 10
        { name: 'Ham OZ' },
        // turkey 11
        { name: 'Turkey OZ' },
        // ranch 12
        { name: 'Ranch OZ' },
        // olives 13
        { name: 'Olive OZ' },
        // pepperchinis 14
        { name: 'Pepperchini OZ' },
        // hummus 15
        { name: 'Hummus OZ' },
        // spinach 16
        { name: 'Spinach OZ' },
        // cucumber 17
        { name: 'Cucumber Slices' }
    ])
}