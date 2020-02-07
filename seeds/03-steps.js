exports.seed = function (knex) {
    return knex('steps').insert([

        // BLT recipe_id 1
        {
            step_number: 1,
            instructions: "Slow-cook 8 strips bacon on skillet for 10min each side.",
            recipe_id: 1
        },
        {
            step_number: 2,
            instructions: "While cooking bacon, Spread a thin (2oz) layer of mayo over sourdough bread.",
            recipe_id: 1
        },
        {
            step_number: 3,
            instructions: "Set bacon out to cool for 2 min.",
            recipe_id: 1
        },
        {
            step_number: 4,
            instructions: "Wash lettuce & tomato. Then cut 3 slices of tomato.",
            recipe_id: 1
        },
        {
            step_number: 5,
            instructions: "Place cooked bacon, tomato slices, and 5 layers of lettuce on bread.",
            recipe_id: 1
        },
        {
            step_number: 6,
            instructions: "Enjoy!",
            recipe_id: 1
        },

        // Cheeseburger recipe_id 2
        {
            step_number: 1,
            instructions: "Slow-cook 8oz beef on grill for 10min each side.",
            recipe_id: 2
        },
        {
            step_number: 2,
            instructions: "While cooking beef, Spread a thin layer (2oz) of mayo over sourdough bread.",
            recipe_id: 2
        },
        {
            step_number: 3,
            instructions: "Wash lettuce & tomato. Then cut 2 slices of tomato.",
            recipe_id: 2
        },
        {
            step_number: 4,
            instructions: "Apply cheese to top of beef for 1 min on the grill.",
            recipe_id: 2
        },
        {
            step_number: 5,
            instructions: "Place cooked beef, tomato slices, and 2 layers of lettuce on hamburger bun.",
            recipe_id: 2
        },
        {
            step_number: 6,
            instructions: "Enjoy!",
            recipe_id: 2
        },

        // Chef Salad recipe_id 3
        {
            step_number: 1,
            instructions: "Wash & place 1 pound of spring mix in a mixing bowl.",
            recipe_id: 3
        },
        {
            step_number: 2,
            instructions: "Cut 12oz tomato slices and 12oz cucumber slices.",
            recipe_id: 3
        },
        {
            step_number: 3,
            instructions: "Cut 8oz swiss cheese.",
            recipe_id: 3
        },
        {
            step_number: 4,
            instructions: "Cut 8oz ham and 8oz turkey.",
            recipe_id: 3
        },
        {
            step_number: 5,
            instructions: "Mix ham, turkey, cheese, cucumber, and tomato slices with the spring mix in mixing bowl.",
            recipe_id: 3
        },
        {
            step_number: 6,
            instructions: "Apply desired amount of ranch dressing.",
            recipe_id: 3
        },
        {
            step_number: 6,
            instructions: "Enjoy!",
            recipe_id: 3
        },

        // Greek veggie wrap recipe_id 4
        {
            step_number: 1,
            instructions: "Spread 3tbsp hummus onto 1 tortilla.",
            recipe_id: 4
        },
        {
            step_number: 2,
            instructions: "Dice 3oz of cucumber, 3oz of tomato, 2oz of olives, and 2oz of pepperchinis.",
            recipe_id: 4
        },
        {
            step_number: 3,
            instructions: "Layer cut veggies along with a pinch (2oz) of spinach on top of tortilla.",
            recipe_id: 4
        },
        {
            step_number: 4,
            instructions: "Roll tortilla up gently. As you are about to finish rolling, spread a dab of hummus below the lip of the tortilla to help it stick together.",
            recipe_id: 4
        },
        {
            step_number: 5,
            instructions: "Use a sharp knif to cut in half.",
            recipe_id: 4
        },
        {
            step_number: 6,
            instructions: "Enjoy!",
            recipe_id: 4
        }

    ])
}