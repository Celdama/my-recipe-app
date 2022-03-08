# My Recipe App

React application with state Redux management, allowing you to add your own recipes. You also can edit, and delete recipe, but only your recipe. 

Indeed the application benefits from a login system, so that each user can add his own recipes, and can only modify his recipes.

At the beginning of the application I used json-server to simulate a backend, with all the CRUD features implemented using Redux. Only then, I implemented Firebase, which allows me to have a real backend, the user can then create an account, upload his avatar and photo of his recipes and access the recipes of other users.

As far as styling is concerned, I wanted to discover and use TailwindCSS, but still with the styled-component logic. The ComponentFolder / Component.js - Component.styles.js structure suits me a lot. So I used the tailwind-styled-component package, which allows me to easily use these two tools together.

As for routing, I used react router dom, which allowed me to secure the routes of my application depending on whether the user is authenticated or not.

You can create an account and add your first recipe, or simply look for inspiration among the recipes of the app's users.

[Hosted version](https://my-recipe-app-49544.web.app/)
