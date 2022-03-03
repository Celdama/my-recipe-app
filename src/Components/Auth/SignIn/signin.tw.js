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
