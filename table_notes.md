# Notes

### Needed Data
Recipes
Ingredients
Ingredients in a recipe
Quantity of ingredients in a recipe
Steps in a recipe

### Possible Tables
+ recipes
    - id
    - recipe_name

+ ingredients
    - ingredient_id
    - ingredient_name

+ steps
    - step_id
    - instructions
    - recipe_id
    - step_number

+ recipe_ingredients
    - recipe_id
    - ingredient_id
    - ingredient_quantity

### Table Relationships

Recipes (one) <==> Steps (many)

Ingredients (many) <==> Steps (many)

Ingredients (many) <==> Recipes (many) needs intermediary table