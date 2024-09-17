import { ComponentType } from "react";
import AuthPage from "../pages/AuthPage";
import MainPage from "../pages/MainPage";

export interface IRoute {
  path: string;
  component: ComponentType;
  isIndex: boolean
}

export enum RouteNames {
  MAIN = "/",
  AUTH = "/auth",
  PRODUCT = "/product/:id",
  ADMIN = "/admin",
  BASKET = "/basket",
}

export const routes: IRoute[] = [
  { path: RouteNames.AUTH, component: AuthPage, isIndex: false },
  { path: RouteNames.MAIN, component: MainPage, isIndex: true },
  { path: RouteNames.PRODUCT, component: AuthPage, isIndex: false },
];
