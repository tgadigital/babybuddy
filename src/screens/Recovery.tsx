import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {Text} from 'react-native';
import {RootStackParamList} from '../types/navigation';
import DefaultLayout from '../layouts/default';

type Props = NativeStackScreenProps<RootStackParamList, 'Recovery', 'Inside'>;

const Recovery: FC<Props> = () => {
  return (
    <DefaultLayout>
      <Text>Recovery</Text>
    </DefaultLayout>
  );
};

export default Recovery;
