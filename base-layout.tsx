import { Outlet,useLocation } from '@umijs/max';
import { useEffect } from "react";

const BasicLayout = (props: any) => {
  const { pathname } = useLocation();
  const { href } = window.location; // 浏览器地址栏中地址
  console.log('pathname:',pathname,'href:',href);
  useEffect(() => {
    return () => {
      // 资源取消请求（如图片）
      window.stop();
    };
  }, [href]);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default BasicLayout;
