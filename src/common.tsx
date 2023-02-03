
import { history } from '@umijs/max';

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
