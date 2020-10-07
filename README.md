# GitRecipes

https://git-recipez.herokuapp.com/

https://github.com/masonsteeger/gitrecipev2

## App Idea

Users can create an account and log in. Afterwards, they can search through user supplied recipes by tags as well as add their own. 

## User Authentication (By: Mason) 

For this project I used a combination of passport, express-sessions, and localStorage for my user authentication. The login and create user features run through passport and i used localstorage to create a variable that was accessable through the entire app.js so that when a new recipe is added, the user who adds it is automatically set as the author of the recipe.
