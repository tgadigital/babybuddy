import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {RootTabsParamList} from '../types/navigation';

type Props = NativeStackScreenProps<RootTabsParamList, 'Baby', 'Inside'>;

const Baby: FC<Props> = () => {
  return (
    <View>
      <Text>Baby</Text>
    </View>
  );
};

export default Baby;
