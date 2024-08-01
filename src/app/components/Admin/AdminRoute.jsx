import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { checkAdminAuthentication } from '../../../app/reducers/admin';

const AdminRoute = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.admin.admin);
  const token = typeof window !== 'undefined' ? localStorage.getItem('adminToken') : null;

  useEffect(() => {
    if (!admin && token) {
      dispatch(checkAdminAuthentication(token));
    } else if (!admin && !token) {
      router.push('/screens/admin/login');
    }
  }, [admin, token, dispatch, router]);

  if (!admin) {
    return <p>Loading...</p>;
  }

  return <>{children}</>;
};

export default AdminRoute;
