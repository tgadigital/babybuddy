import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {Text} from 'react-native';
import {RootStackParamList} from '../types/navigation';
import DefaultLayout from '../layouts/default';

type Props = NativeStackScreenProps<RootStackParamList, 'SignUp', 'Inside'>;

const SignUp: FC<Props> = () => {
  return (
    <DefaultLayout>
      <Text>SignUp</Text>
    </DefaultLayout>
  );
};

export default SignUp;
