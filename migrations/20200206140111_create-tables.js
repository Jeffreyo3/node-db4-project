
exports.up = async function (knex) {
    // Tbl of recipes (has many steps and many ingredients)
    await knex.schema
        .createTable('recipes', tbl => {
            tbl.increments();
            tbl.string('recipe_name', 128)
                .notNullable();
        });

    // Tbl of ingredients (many steps and/or recipes have ingredients)
    await knex.schema
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.string('ingredient_name', 128)
                .notNullable();
        });
    
    // Tbl of steps (many steps belong to one recipe; many steps can have many ingredients so direct relationship not needed)
    await knex.schema
        .createTable('steps', tbl => {
            tbl.increments();
            tbl.string('step_number')
                .notNullable()
            tbl.string('instructions')
                .notNullable();
            // foreign key that points to recipes table
            tbl.integer('recipe_id')
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        });

    // Tbl of recipe_ingredients (one ingredient can exist in many steps & one step can have many ingredients)
    await knex.schema
        .createTable('recipe_ingredients', tbl => {
            tbl.integer('quantity')
                .notNullable();
            // foreign key that points to recipes table
            tbl.integer('recipe_id')
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            // foreign key that points to ingredients table
            tbl.integer('ingredient_id')
                .notNullable()
                .references('id')
                .inTable('ingredients')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl.primary(['recipe_id', 'ingredient_id']);
        })
};



exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes');
};