import tw from 'tailwind-styled-components';

export const Wrapper = tw.div`
  flex flex-col items-center min-h-screen
`;

export const Header = tw.div`
  flex flex-col items-center
`;

export const Title = tw.h1`
  mb-4 text-5xl md:text-6xl font-bold
`;

export const SubTitle = tw.p`
  text-lg text-slate-600
`;

export const Content = tw.div`
  flex justify-center md:justify-around flex-wrap gap-10 py-28
`;
