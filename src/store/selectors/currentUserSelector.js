export const currentUserSelector = ({ currentUser }) => currentUser;

export const isThereCurrentUserSelector = ({ currentUser }) =>
  !!currentUser.email;
