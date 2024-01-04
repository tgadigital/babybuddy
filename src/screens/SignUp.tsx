import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {Text, Button} from 'react-native';
import {RootStackParamList} from '../types/navigation';
import DefaultLayout from '../layouts/default';

type Props = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

const SignUp: FC<Props> = ({navigation}) => {
  return (
    <DefaultLayout>
      <Text>SignUp</Text>
      <Button title={'Go back'} onPress={() => navigation.goBack()} />
    </DefaultLayout>
  );
};

export default SignUp;
