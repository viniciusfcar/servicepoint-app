import { NavigationProp } from "@react-navigation/native";

export interface INavigation extends NavigationProp<TNavigate<any>> {}

type TReset = {
  index: number;
  routes: Array<TParams>;
};

type TParams = {
  name: string;
  params?: {};
};

export type TNavigate<T> = {
  name: string;
  params?: T;
  merge?: boolean;
};

export type TNavigation = {
  navigate: <T>({ merge, name, params }: TNavigate<T>) => void;
  reset: ({ index, routes }: TReset) => void;
  replace: <T>({ merge, name, params }: TNavigate<T>) => void;
  goBack: () => void;
};
