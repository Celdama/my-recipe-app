import tw from 'tailwind-styled-components';

export const Wrapper = tw.div`
  mt-10 
  px-4 
  py-5 
  sm:px-6
`;

export const StepsList = tw.ol`
  relative 
  mt-8 
  ml-6 
  border-l 
  border-gray-200
`;

export const ListItem = tw.li`
  mb-10
  ml-6
`;

export const Span = tw.span`
  flex 
  absolute 
  -left-4 
  text-indigo-500 
  font-semibold 
  justify-center 
  items-center 
  w-8 
  h-8 
  bg-blue-200 
  rounded-full 
  ring-8 
  ring-white
`;

export const Step = tw.p`
  flex 
  items-center 
  mb-1 
  pl-4 
  text-lg 
  font-medium 
  text-gray-500
`;
