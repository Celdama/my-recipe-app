import tw from 'tailwind-styled-components';

export const Wrapper = tw.div`
  bg-white 
  shadow 
  mt-10 
  overflow-hidden 
  sm:rounded-lg
`;

export const Header = tw.div`
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

export const Para = tw.p`
  mt-1 
  max-w-2xl 
  text-sm 
  text-gray-500
`;

export const Content = tw.div`
  border-t  
  border-gray-200
`;

export const TableWrapper = tw.div`
  px-4 
  py-5 
  sm:grid 
  sm:grid-cols-3 
  sm:gap-4 
  sm:px-6
`;

export const TableWrapperGray = tw(TableWrapper)`
  bg-gray-50 

`;

export const TableWrapperWhite = tw(TableWrapper)`
  bg-white 
`;

export const Dt = tw.dt`
  text-sm 
  font-medium 
  text-gray-500
`;

export const Dd = tw.dd`
  mt-1 
  text-sm 
  text-gray-900 
  sm:mt-0 
  sm:col-span-2
`;
