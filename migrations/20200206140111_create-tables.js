
exports.up = function (knex) {
    // 1 recipe has many ingredients
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments();
            tbl.string('recipe_name', 128).notNullable();
        })
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.string('ingredient_name', 128).notNullable();
            // foreign key that points to recipes table
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes');
        })
        .createTable('steps', tbl => {
            tbl.increments();
            tbl.string('instructions').notNullable();
            // foreign key that points to recipes table
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes');
            // foreign key that points to ingredients table
            tbl.integer('ingredient_id')
                .unsigned()
                .references('id')
                .inTable('incredients');
        })


};



exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes');
};