import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {RootStackParamList} from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'NotFound', 'Inside'>;

const NotFound: FC<Props> = () => {
  return (
    <View>
      <Text>Not Found</Text>
    </View>
  );
};

export default NotFound;
