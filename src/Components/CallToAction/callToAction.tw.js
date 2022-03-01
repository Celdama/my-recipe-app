import tw from 'tailwind-styled-components';

export const Wrapper = tw.div`
  bg-gray-50
  rounded-lg
`;

export const Content = tw.div`
  max-w-7xl 
  py-12 
  px-4 
  sm:px-6 
  lg:py-16
  lg:px-8 
  lg:flex 
  lg:items-center 
  lg:justify-between
`;

export const Title = tw.h2`
  text-3xl 
  font-extrabold 
  tracking-tight 
  text-gray-900 
  sm:text-4xl
  flex
  flex-col
`;

export const Body = tw.div`
  mt-8 
  flex 
  lg:mt-0 
  lg:flex-shrink-0
`;

export const WrapperButton = tw.div`
  flex
  gap-3
`;

export const Button = tw.button`
  inline-flex 
  rounded-md 
  shadow
`;
