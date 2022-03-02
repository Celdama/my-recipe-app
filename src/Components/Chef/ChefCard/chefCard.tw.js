import tw from 'tailwind-styled-components';

export const Wrapper = tw.article`
  rounded-lg  
  bg-white 
  px-6
  py-10
`;

export const Content = tw.div`
  flex 
  flex-col 
  items-center 
`;

export const Avatar = tw.img`
  mb-3 
  w-24 
  h-24 
  rounded-full
`;

export const Username = tw.h3`
  mb-1 
  text-xl 
  font-medium 
  text-gray-900
`;
