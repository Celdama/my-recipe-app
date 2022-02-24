import tw from 'tailwind-styled-components';

export const Wrapper = tw.div`
  mt-10
  px-4
  py-5
  sm:px-6
`;

export const Title = tw.h3`
  text-lg 
  leading-6 
  font-medium 
  text-gray-900
`;

export const IngredientsList = tw.ul`
  list-disc 
  mt-4 
  list-inside 
  text-gray-500 
  font-medium
`;

export const IngredientItem = tw.li`
  py-3
`
