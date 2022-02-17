import tw from 'tailwind-styled-components';

export const Wrapper = tw.div`
  m-4
  max-w-xl
  w-full
`;

export const RecipeImg = tw.img`
  object-cover
  bg-center
  w-full
  md:w-72
  h-56
  sm:h-96
  rounded-t-lg
  md:rounded-none
  md:rounded-l-lg
`;

export const RecipeContent = tw.div`
  flex 
  flex-col 
  w-full
  min-w-36
  justify-between
  p-4 
  leading-normal
`;

export const RecipeTitle = tw.h5`
  mb-2 
  text-2xl 
  font-bold 
  tracking-tight 
  text-gray-900 
  dark:text-white
`;

export const RecipeDesc = tw.p`
  mb-3 
  font-normal 
  text-gray-700 
  dark:text-gray-400
`;

export const RecipeInfo = tw.div`
  flex 
  text-gray-400  
  justify-between
`;
