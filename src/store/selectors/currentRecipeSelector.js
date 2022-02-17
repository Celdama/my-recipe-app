export const currentRecipeSelector = ({ currentRecipe }) =>
  currentRecipe.recipe;

export const loaderSelector = ({ currentRecipe }) => currentRecipe.loading;
