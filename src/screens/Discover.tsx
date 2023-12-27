import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {RootTabsParamList} from '../types/navigation';

type Props = NativeStackScreenProps<RootTabsParamList, 'Discover', 'Inside'>;

const Discover: FC<Props> = () => {
  return (
    <View>
      <Text>Discover</Text>
    </View>
  );
};

export default Discover;
