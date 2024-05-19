import useCountStore from './config/count';
const useStore = () => {
    return {
        count: useCountStore(),
    };
};
// 统一导出useStore方法
export default useStore;
