import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type {StackScreenProps} from '@react-navigation/stack';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

type KeysOfUnion<T> = T extends T ? keyof T : never;

export type RootStackParamList = {
  Inside: NavigatorScreenParams<RootTabsParamList>;
  NotFound: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Recovery: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type RootTabsParamList = {
  Today: undefined;
  Baby: undefined;
  Discover: undefined;
  Me: undefined;
};

export type HomeTabScreenProps<T extends keyof RootTabsParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabsParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type NavigationTypes = KeysOfUnion<
  RootTabsParamList & RootStackParamList
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
