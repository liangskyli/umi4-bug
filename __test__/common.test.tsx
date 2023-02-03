import {
  goToPage,
} from '@/common';


let pushURl = '';
let replaceURl = '';

jest.mock('umi', () => {
  const originalModule = jest.requireActual('umi');
  return {
    ...originalModule,
    history: {
      location: {
        pathname: '/my-orders',
        query: {
          activityId: '1',
          token: '2',
          orgcode: 'orgcode',
        },
      },
      push: (url: string) => {
        pushURl = url;
      },
      replace: (url: string) => {
        replaceURl = url;
      },
    },
  };
});



describe('goToPage:跳转页面地址URL', () => {
  let location: any;

  beforeEach(() => {
    pushURl = '';
  });


  test('跳转页面地址URL:', () => {
    goToPage('/index?a=1');
    expect(pushURl).toBe(
      '/index?a=1',
    );
  });
});
