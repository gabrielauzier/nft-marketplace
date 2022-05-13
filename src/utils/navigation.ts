import { StackScreenProps } from "@react-navigation/stack";
import { Item } from "./types";

export type RootParamList = {
  Login: undefined;
  SignUp: undefined;

  Home?: undefined;
  Details: { data: Item };
};

export type RootScreen<T extends keyof RootParamList> = React.FC<
  StackScreenProps<RootParamList, T>
>;
