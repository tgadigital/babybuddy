import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {Text} from 'react-native';
import {RootTabsParamList} from '../types/navigation';
import DefaultLayout from '../layouts/default';

type Props = NativeStackScreenProps<RootTabsParamList, 'Today', 'Inside'>;

const Today: FC<Props> = () => {
  return (
    <DefaultLayout>
      <Text>Today</Text>
    </DefaultLayout>
  );
};

export default Today;
