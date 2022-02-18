import tw from 'tailwind-styled-components';

export const Form = tw.form`
  rounded-lg
  p-4
`;

export const InputWrapper = tw.div`
  mb-6
`;

export const InputWrapperGrid = tw.div`
  grid 
  xl:grid-cols-2 
  xl:gap-6
`;

export const Label = tw.label`
  block
  mb-2
  text-sm
  font-medium
  text-gray-900
`;

export const Input = tw.input`
  bg-gray-50
  border
  border-gray-300
  text-gray-900
  text-sm
  rounded-lg
  block
  w-full
  p-2.5
`;

export const Textarea = tw.textarea`
bg-gray-50
  border
  border-gray-300
  text-gray-900
  text-sm
  rounded-lg
  block
  w-full
  p-2.5
`;

export const FormBtn = tw.button`
  w-full 
  text-gray-900 
  mt-3 
  hover:text-indigo-500 
  border 
  border-gray-200 
  hover:bg-gray-100 
  font-medium 
  bg-gray-200 
  rounded-lg 
  text-sm 
  px-5 
  py-2.5 
  text-center 
  mr-2 
  mb-2
`;

export const AddRecipeBtn = tw.button`
  text-white 
  bg-indigo-500 
  hover:bg-indigo-700  
  font-medium 
  rounded-lg 
  text-sm 
  w-full 
  px-5 
  py-2.5 
  text-center
`;

export const DeleteText = tw.p`
  inline 
  text-xs 
  font-mono 
  italic 
  hover:cursor-pointer 
  font-semibold 
  leading-3 
  underline 
  text-red-700 
  hover:text-red-500
`;
