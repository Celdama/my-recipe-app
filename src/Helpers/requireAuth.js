import { useSelector } from 'react-redux';
import { isAuthSelector } from '../store/selectors/authSelector';
import { Navigate } from 'react-router-dom';

export const RequireAuth = ({ children, redirectTo }) => {
  const isLogin = useSelector(isAuthSelector);

  return isLogin ? children : <Navigate to={redirectTo} />;
};
