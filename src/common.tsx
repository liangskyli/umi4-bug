
import { history } from 'umi';

const goToPage = (
  path: string,
) => {
  history.push(
      path,
  );
};



export {
  goToPage,
};
