import useCountStore from './config/count';

const useStore = () => {
  return {
    countStore: useCountStore(),
  };
};
// 统一导出useStore方法
export default useStore;
