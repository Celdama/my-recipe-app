import tw from 'tailwind-styled-components';

export const Wrapper = tw.div`
  min-h-full  
  flex 
  items-center 
  justify-center 
  px-4 
  sm:px-6 
  lg:px-8
`;

export const Content = tw.div`
  min-h-full 
  flex  
  md:w-2/3 
  flex-col 
  justify-center 
  px-4 
  sm:px-6 
  lg:px-8
`;

export const Header = tw.div`
  mb-16
  flex
  flex-col
`;

export const Title = tw.h2`
  mt-6 
  text-center 
  text-3xl 
  font-extrabold 
  text-gray-900
`;

export const Button = tw.button`
  relative 
  w-full 
  flex 
  justify-center 
  py-2 
  px-4 
  border 
  border-transparent 
  text-sm 
  font-medium 
  rounded-md 
  text-white 
  bg-indigo-600 
  hover:bg-indigo-700
`;
