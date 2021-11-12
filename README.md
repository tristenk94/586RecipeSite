# RecipeSite
This is my Application for my 586 Class.

This is a Recipe based website in which a Recipe, a model, has a certain set of attributes (Name, Title, Rating, Upload Date, Ingredients, and Directions). 
Ingredients and Directions are also their own list of items that relate to a recipe. An Ingredient is defined by its Name, Amount, and Recipe Link. A Direction is similar in which it has a step and step number.

I was attempting to add another layer of complexity in where [Authorized] users can sign in and define their own Recipes, in which the All Recipes tab will display all Recies while the editor will display that user's list of Recipes. 

During Recipe creating, directions and ingredients are saved and deleted on the spot with the add and delete buttons. When the user clicks 'Create Recipe' the recipe is linked and created to its related attributes (ingredients and directions).

The Editing process is similar, only the list is modified.

A multiple Recipes view (eg All Recipes or My Recipes) will NOT return the ingredients and directions related to a recipe (since we cannot logically view them on the step). But when we view the recipe with more detail, (eg Editing or Detail View), a Recipe View Model called RecipeIngDir is called which retrieves the detailed information.

When Logging in, you recieve the ability to make, edit, and delete recipes. A new button will appear to the right of login as 'Recipes Editor'.
Site Login Credentials:
bob@email.com
1234ASDFg#

The database takes cares of keys management (assigning, creating for Ingredients, Directions, and Recipes).

Please view the demonstration recorded on my local machine here:
https://drive.google.com/file/d/1BJfYfno-zXhPaBLRZ6OYA-GliwleOjY3/view?usp=sharing

The Site did use a domain hosted by AWS: mycomp586project.xyz
Another copy of the site was also hosted on MS Azure: https://recipesiteangthree20201214204126.azurewebsites.net/recipes
