import { useLocation } from 'umi';

const BasicLayout = (props: any) => {
  const { pathname } = useLocation();
  const { href } = window.location; // 浏览器地址栏中地址

  return (
    <div>
      {props.children}
    </div>
  );
};

export default BasicLayout;
