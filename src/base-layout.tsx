import { Outlet,useLocation } from '@umijs/max';

const BasicLayout = (props: any) => {
  const { pathname } = useLocation();
  const { href } = window.location; // 浏览器地址栏中地址

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default BasicLayout;
