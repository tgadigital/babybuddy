import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {RootTabsParamList} from '../types/navigation';

type Props = NativeStackScreenProps<RootTabsParamList, 'Today', 'Inside'>;

const Today: FC<Props> = () => {
  return (
    <View>
      <Text>Today</Text>
    </View>
  );
};

export default Today;
