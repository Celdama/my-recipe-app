import tw from 'tailwind-styled-components';

export const Wrapper = tw.div`
  min-h-full
`;

export const NavContainer = tw.div`
  flex 
  items-center 
  justify-between 
  h-16
`;

export const NavItems = tw.div`
  flex
  items-center'
`;

export const NavLogoContainer = tw.div`
  flex-shrink-0
`;

export const NavItemsContainer = tw.div`
  hidden 
  md:block
`;

export const NavMobileMenuBtnContainer = tw.div`
  -mr-2 
  flex 
  md:hidden
`;

export const NavItemsMobileContainer = tw.div`
  px-2 
  pt-2 
  pb-3 
  space-y-1 
  sm:px-3
  
`;

export const NavUserMobileContainer = tw.div`
  pt-4 
  pb-3 
  border-t  
  border-gray-700
`;
