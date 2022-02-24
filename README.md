# My Recipe App

React application with state Redux management allowing you to add your own recipes in the form of cards.
To simulate a back end in this application I will use json server. I think I can host the json server file on a github repo and make requests on this repo, I will see later.
The main objective is to implement a CRUD functionality using Redux

## Design

see notebook for design
I'll use tailwind and styled components for styling

## Features

### main features

- user can add recipe
- user can get recipe with some filter
- user can update recipe
- user can delete recipe

### secondary features

- user can add favorite recipe
- user can search recipe by name
- add filter recipe by main ingredients (chicken, beef, etc...)
- display random recipe on daily best recipes components

## Dependencies

- axios
- json-server
- redux
- redux-devtools-extension
- redux-thunk
- reselect
- prop-types
- react-router-dom
- nanoid ? i think id is handle by json-server
- styled-components

- tailwind-styled-components
- tailwindcss
- postcss
- autoprefixer

# Composant

- Sidebar
  --- Discover
  --- Library

- SearchBar
- User

- BestRecipe
  --- RecipeCard

- DailyRecipe
  --- RecipeCard

- AddRecipeForm

## Add user in firestore

- register user
- add user in users db firestore

user in firestore
[] user id
[] age
[] email
[] photo url
