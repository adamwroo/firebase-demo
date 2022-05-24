import { localStore } from "./localStore";

const initialUser = null;
export const user = localStore('user', initialUser);