import tw from 'tailwind-styled-components';

export const Wrapper = tw.div`
  flex
  flex-col
  items-center
`;

export const ChefInfoContent = tw.div`
  flex 
  flex-col 
  items-center 
  pt-8 
  pb-20
`;

export const ChefInfoRecipes = tw.div`
  flex 
  flex-wrap 
  justify-between
`;

export const Avatar = tw.img`
  w-48 
  h-48 
  rounded-3xl 
  mb-5
`;

export const Username = tw.h1`
  text-4xl
  font-bold
`;

export const UserEmail = tw.h4`
  text-lg 
  text-slate-500
`;

export const RecipeResume = tw.p`
  text-sm 
  font-semibold  
  text-indigo-600 
`;
