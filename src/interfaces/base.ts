export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
