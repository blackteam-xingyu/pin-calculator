declare const useStore: () => {
    count: import("pinia").Store<"count", import("./config/count").Count, {
        tCop(): string;
    }, {}>;
};
export default useStore;
