import type {
  DialogShowHandler,
  DialogShowProps,
} from 'antd-mobile/es/components/dialog';
import type { ToastShowProps } from 'antd-mobile/es/components/toast';

(global as any).jestToastContent = '';
jest.mock('antd-mobile', () => {
  const originalModule = jest.requireActual('antd-mobile/es');
  const Dialog = originalModule.Dialog;
  Dialog.show = (props: DialogShowProps): DialogShowHandler => {
    (global as any).jestDialogShowProps = props;
    return {
      close: () => {},
    };
  };
  return {
    ...originalModule,
    Toast: {
      config: originalModule.Toast.config,
      clear: originalModule.Toast.clear,
      show: (p: ToastShowProps | string): void => {
        const props = typeof p === 'string' ? { content: p } : { ...p };
        let duration = props.duration;
        if (typeof duration === 'undefined') {
          duration = 3000;
        }
        if (duration > 0) {
          setTimeout(() => {
            props.afterClose?.();
          }, duration);
        }
        (global as any).jestToastContent = props.content;
      },
    },
    Mask: (props: any) => {
      return (
        <div>
          <div
            data-testid={`${
              props['data-testid'] ? props['data-testid'] : 'antd-mobile-mask'
            }`}
            onClick={props.onMaskClick}
          >
            visible:{props.visible ? 'true' : 'false'}
          </div>
          <div>{props.children}</div>
        </div>
      );
    },
    Popup: (props: any) => {
      return (
        <div>
          <div data-testid="antd-mobile-popup" onClick={props.onMaskClick}>
            Popup:visible:{props.visible ? 'true' : 'false'}
          </div>
          <div
            data-testid="antd-mobile-popup-content"
            className={props.bodyClassName}
          >
            {props.children}
          </div>
        </div>
      );
    },
    WaterMark: () => {
      return <div>WaterMark components</div>;
    },
    Modal: (props: any) => {
      return (
        <div>
          <div
            data-testid={`${
              props['data-testid'] ? props['data-testid'] : 'antd-mobile-modal'
            }`}
            className={props.className}
            onClick={props.onClose}
          >
            visible:{props.visible ? 'true' : 'false'}
          </div>
          <div
            data-testid={`${
              props['data-testid']
                ? `${props['data-testid']}-content`
                : 'antd-mobile-modal-content'
            }`}
          >
            {props.content}
          </div>
          <div
            data-testid={`${
              props['data-testid']
                ? `${props['data-testid']}-after-close`
                : 'antd-mobile-modal-after-close'
            }`}
            onClick={props.afterClose}
          />
          <div
            data-testid={`${
              props['data-testid']
                ? `${props['data-testid']}-after-show`
                : 'antd-mobile-modal-after-show'
            }`}
            onClick={props.afterShow}
          />
          {props.actions?.map((item: any) => {
            return (
              <button
                type="button"
                data-testid={`${props['data-testid']}-btn-${item.key}`}
                key={item.key}
                onClick={item.onClick}
              >
                {item.text}
              </button>
            );
          })}
        </div>
      );
    },
    Dialog: Dialog,
  };
});
jest.mock('antd-mobile/es/utils/convert-px', () => {
  return {
    convertPx: jest.fn((px) => px),
  };
});


