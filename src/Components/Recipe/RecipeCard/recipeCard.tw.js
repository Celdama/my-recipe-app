import tw from 'tailwind-styled-components';

export const Wrapper = tw.div`
  my-6
  max-w-xl
  w-full
  xl:mx-0
  mx-auto
`;

export const RecipeImg = tw.img`
  object-cover
  bg-center
  w-full
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
`;

export const RecipeDesc = tw.p`
  my-5 
  font-normal
  text-sm 
  text-gray-800 
`;

export const RecipeInfo = tw.div`
  flex 
  text-gray-600  
  justify-between
`;
