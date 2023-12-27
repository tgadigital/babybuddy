import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {RootTabsParamList} from '../types/navigation';

type Props = NativeStackScreenProps<RootTabsParamList, 'Me', 'Inside'>;

const Me: FC<Props> = () => {
  return (
    <View>
      <Text>Me</Text>
    </View>
  );
};

export default Me;
