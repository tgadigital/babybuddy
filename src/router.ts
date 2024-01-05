import {createNavigationContainerRef} from '@react-navigation/native';
import {NavigationTypes} from './types/navigation';

export const navigationRef = createNavigationContainerRef();

export function navigate(name: NavigationTypes, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
