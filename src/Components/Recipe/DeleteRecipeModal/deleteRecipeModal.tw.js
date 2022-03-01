import tw from 'tailwind-styled-components';

export const Wrapper = tw.div`
  flex 
  items-end 
  justify-center 
  min-h-screen 
  pt-4 
  px-4
  pb-20 
  text-center 
  sm:block 
  sm:p-0
`;

export const SpanAligner = tw.span`
  hidden 
  sm:inline-block 
  sm:align-middle 
  sm:h-screen
`;

export const ContentModal = tw.div`
  inline-block
  align-bottom
  bg-white
  rounded-lg
  text-left
  overflow-hidden
  shadow-xl
  transform
  transition-all
  sm:my-8
  sm:align-middle
  sm:max-w-lg
  sm:w-full
`;

export const ContentText = tw.div`
  pt-5
  pb-4
  sm:p-6
`;

export const CircleIcon = tw.div`
  mx-auto
  flex-shrink-0
  flex
  items-center
  justify-center
  h-12
  w-12
  rounded-full
  bg-red-100
  sm:mx-0
  sm:h-10
  sm:w-10
`;

export const ContentWrapper = tw.div`
  mt-3
  text-center
  sm:mt-0
  sm:ml-4
  sm:text-left
`;

export const ContentBtns = tw.div`
  bg-gray-50
  px-4
  py-3
  sm:px-6
  sm:flex
  sm:flex-row-reverse
`;
