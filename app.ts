
const loadJS = (url: string, callback: () => void) => {
  const script: any = document.createElement('script');
  const fn = callback || (() => {});

  script.type = 'text/javascript';

  script.onload = () => {
    fn();
  };

  script.src = url;

  document.getElementsByTagName('head')[0].appendChild(script);
};

// 模拟动态加载，复现bug
loadJS('//cdn.bootcdn.net/ajax/libs/eruda/2.4.1/eruda.min.js', () => {
  const VConsoleTemp: any = (window as any).eruda;
  if (typeof VConsoleTemp !== 'undefined') {
    VConsoleTemp.init();
  }
});

export const qiankun = {
  // 应用加载之前
  async bootstrap(props: any) {
    console.log('bootstrap', props);
  },
  // 应用 render 之前触发
  async mount(props: any) {
    console.log('mount', props);
  },
  // 应用卸载之后触发
  async unmount(props: any) {
    console.log('unmount', props);
  },
};
