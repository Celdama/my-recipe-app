import tw from 'tailwind-styled-components';

export const Wrapper = tw.div`
  m-4
`;

export const Content = tw.div`
flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700
`;

export const RecipeImg = tw.img`
  object-cover
  bg-center
  w-full
  md:w-72
  h-96
  rounded-t-lg
  md:rounded-none
  md:rounded-l-lg
`;

export const RecipeContent = tw.div`
  flex 
  flex-col 
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
