import tw from 'tailwind-styled-components';

export const Wrapper = tw.div`
  mx-auto 
  mt-2 
  max-w-screen-sm 
  font-sans
`;

export const Content = tw.div`
  flex
  flex-col
  justify-center
  items-center
`;

export const Span = tw.span`
  text-center 
  block 
  font-bold 
  text-indigo-500
`;

export const Title = tw.h1`
  mb-4 
  text-5xl 
  md:text-6xl 
  font-bold 
  text-center
`;

export const Text = tw.p`
  text-lg
  text-slate-600
`;

export const ContainerLinks = tw.div`
  divide-y 
  w-full 
  self-start 
  divide-y-reverse 
  divide-slate-200 
  pb-9 
  mt-9
`;

export const LinkTitle = tw.h2`
  mb-3 
  uppercase 
  font-semibold 
  text-slate-600
`;

export const LinkContent = tw.div`
  divide-y 
  divide-slate-200
`;

export const WrapperLink = tw.div`
  flex
  gap-3
`;

export const LinkName = tw.h5`
  font-semibold 
  capitalize 
  leading-tight
`;

export const LinkDesc = tw.div`
  text-slate-500
`;

export const WrapperLinkIcon = tw.div`
  bg-gray-200
  rounded-md
  p-3
`;
