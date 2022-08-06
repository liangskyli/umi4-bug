// @ts-ignore
import lodash from 'lodash';

type AssignCustomizer = (
  objectValue: any,
  sourceValue: any,
  key?: string,
  object?: any,
  source?: any,
) => any;

const customizer: AssignCustomizer = (value, srcValue) => {
  if (lodash.isObject(value)) {
    if (lodash.isArray(value)) {
      if (lodash.isArray(srcValue) && srcValue.length > 0) {
        return value.map((item) => {
          return lodash.mergeWith(item, srcValue[0], customizer);
        });
      } else {
        return value;
      }
    } else {
      return lodash.mergeWith(value, srcValue, customizer);
    }
  } else {
    return value === undefined ? srcValue : value;
  }
};

const mergeUndefined = (temp: any, custom: any) => {
  if (lodash.isObject(custom)) {
    if (lodash.isArray(custom)) {
      custom.forEach((item, index) => {
        if (lodash.isObject(item)) {
          mergeUndefined(temp[index], item);
        } else {
          if (item === undefined) {
            temp[index] = undefined;
          }
        }
      });
    } else {
      Object.keys(custom).forEach((key) => {
        const item = custom[key];
        if (lodash.isObject(item)) {
          mergeUndefined(temp[key], item);
        } else {
          if (item === undefined) {
            temp[key] = undefined;
          }
        }
      });
    }
  }
  return temp;
};

// 自定义数据和默认数据合并
export const mergeObject = (object: any, source: any) => {
  const tempData = lodash.mergeWith(
    lodash.cloneDeep(object),
    source,
    customizer,
  );
  // 自定义undefined数据覆盖默认数据
  const result = mergeUndefined(tempData, object);
  return result;
};

export const getMockData = <T = any>(
    defaultData: T,
    req: Request,
    data?: any,
) => {
  let json = data?.response;
  if (typeof json === 'function') {
    json = json();
  }
  if (data?.sceneData) {
    data.sceneData.some((sceneItem) => {
      if (sceneItem.requestCase(req)) {
        json = sceneItem.response;
        if (typeof json === 'function') {
          json = json();
        }
        return true;
      }
      return false;
    });
  }
  if (!json) {
    json = defaultData;
  } else {
    // 智能合并对象
    json = mergeObject(json, defaultData);
  }
  return json;
};
