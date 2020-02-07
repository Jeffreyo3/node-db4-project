exports.seed = function (knex) {
    return knex('ingredients').insert([

        // bacon 1
        { ingredient_name: 'Bacon Slices' },
        // mayo 2
        { ingredient_name: 'Mayonnaise OZ' },
        // sourdough 3
        { ingredient_name: 'Sourdough Slices' },
        // hamburger bun 4
        { ingredient_name: 'Hamburger Buns' },
        // tomato 5
        { ingredient_name: 'Tomato Slices' },
        // lettuce 6
        { ingredient_name: 'Lettuce Leaves' },
        // beef 7
        { ingredient_name: 'Beef OZ' },
        // swiss cheese 8
        { ingredient_name: 'Swiss Cheese Slices' },
        // spring mix 9
        { ingredient_name: 'Spring Mix OZ' },
        // ham 10
        { ingredient_name: 'Ham OZ' },
        // turkey 11
        { ingredient_name: 'Turkey OZ' },
        // ranch 12
        { ingredient_name: 'Ranch OZ' },
        // olives 13
        { ingredient_name: 'Olive OZ' },
        // pepperchinis 14
        { ingredient_name: 'Pepperchini OZ' },
        // hummus 15
        { ingredient_name: 'Hummus OZ' },
        // spinach 16
        { ingredient_name: 'Spinach OZ' },
        // cucumber 17
        { ingredient_name: 'Cucumber Slices' },
        // tortilla 18
        { ingredient_name: 'Tortillas (individual)'}
    ])
}