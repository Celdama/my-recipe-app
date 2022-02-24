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

export const Content = tw.div`
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
  sm:max-w-3xl
  sm:w-full
  px-4
  pt-5
  pb-4
  sm:p-6
  sm:pb-4
`;

export const FormContainer = tw.div`
  mt-3
  text-center
  sm:mt-0
  sm:ml-4
  sm:text-left
`;

export const DefaultBtn = tw.button`
  w-full
  inline-flex
  justify-center
  rounded-md
  border
  shadow-sm
  px-4
  py-2
  text-base
  font-medium
  sm:w-auto
  sm:text-sm
  sm:ml-3
  sm:mt-0
`;

export const ContentBtns = tw.div`
  bg-gray-50
  px-4
  py-3
  sm:px-6
  sm:flex
  sm:flex-row-reverse
`;
