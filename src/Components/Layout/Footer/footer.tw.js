import tw from 'tailwind-styled-components';

export const Wrapper = tw.footer`
  p-4 
  md:px-6 
  md:py-8 
  bg-gray-800
`;

export const Content = tw.div`
  sm:flex 
  sm:items-center 
  sm:justify-between  
  max-w-7xl 
  mx-auto
`;

export const TitleApp = tw.span`
  self-center 
  text-2xl 
  font-semibold 
  whitespace-nowrap 
  text-white
`;

export const Links = tw.ul`
  flex 
  flex-wrap 
  items-center 
  mb-6 
  text-sm 
  text-gray-400 
  sm:mb-0 
`;

export const Divider = tw.hr`
  my-6 
  border-gray-700 
  sm:mx-auto 
  lg:my-8
`;

export const Copyright = tw.span`
  block 
  text-sm 
  text-gray-400 
  sm:text-center
`;
