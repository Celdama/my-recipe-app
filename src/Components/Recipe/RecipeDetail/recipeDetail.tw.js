import tw from 'tailwind-styled-components';

export const Wrapper = tw.div`
  flex
  flex-wrap
  justify-center
`;

export const Content = tw.div`
  flex
  flex-col
`;

export const RecipeHeader = tw.div`
  pb-14
`;

export const RecipeHeaderTop = tw.div`
  md:w-2/3
  mx-auto
`;

export const RecipeHeaderBottom = tw.div`
  md:w-2/3 
  mx-auto 
  flex 
  items-center 
  justify-between
`;

export const RecipeHeaderBottomLeft = tw.div`
  flex
  items
`;

export const RecipeHeaderBottomRight = tw.div`
  flex
  gap-2
`;

export const RecipeTitle = tw.h1`
  text-3xl 
  font-extrabold 
  tracking-tight 
  text-gray-900 
  sm:text-5xl
`;

export const RecipeDesc = tw.p`
  my-8
  text-gray-500
`;

export const DefaultBtn = tw.button`
  py-2
  px-3
  text-xs
  font-medium
  text-center
  rounded-lg
  text-white
`;

export const EditBtn = tw(DefaultBtn)`
  bg-indigo-500
  hover:bg-indigo-400
`;

export const DeleteBtn = tw(DefaultBtn)`
  bg-[#1da1f2]
  hover:bg-[#1da1f2]/90
`;

export const RoundedAvatar = tw.img`
  h-8
  w-8
  rounded-full
  mr-3
`;

export const Author = tw.h6`
  text-gray-900
`;
