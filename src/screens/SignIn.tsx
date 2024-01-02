/* eslint-disable react-native/no-inline-styles */
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC, useState} from 'react';
import {Text, TouchableOpacity, Image, StyleSheet, View} from 'react-native';
import {RootStackParamList} from '../types/navigation';
import FormRow from '../components/ui/form/Row';
import Title from '../components/Title';
import FormButton from '../components/ui/form/Button';
import FormInput from '../components/ui/form/Input';
import FormLink from '../components/ui/form/Link';
import FormSeparator from '../components/ui/form/Separator';
import FormSwitch from '../components/ui/form/Switch';
import DefaultLayout from '../layouts/default';
import {navigate} from '../router';
import images from '../images';
import FormText from '../components/ui/form/Text';

type Props = NativeStackScreenProps<RootStackParamList, 'SignIn', 'Inside'>;

const SignIn: FC<Props> = () => {
  const [isSecureInput, setIsSecureInput] = useState(true);
  const [form, setForm] = useState({
    isLoading: false,
    values: {
      email: '',
      password: '',
      isRemember: false,
    },
    errors: {
      email: '',
      password: '',
    },
  });

  const showPasswordButton = () => (
    <TouchableOpacity onPress={() => setIsSecureInput(!isSecureInput)}>
      <Text>{isSecureInput ? 'eye' : 'not-eye'}</Text>
    </TouchableOpacity>
  );

  const signIn = () => {};

  return (
    <DefaultLayout style={style.page}>
      <View>
        <Title title="Sign in to Baby Buddy" />
        <Text>{form.values.email}</Text>
        <FormInput
          placeholder="E-mail address"
          defaultValue={form.values.email}
          onChangeText={email =>
            setForm(prev => ({...prev, values: {...prev.values, email}}))
          }
          errorText={form.errors.email}
        />
        <FormInput
          placeholder="Password"
          defaultValue={form.values.password}
          onChangeText={password =>
            setForm(prev => ({...prev, values: {...prev.values, password}}))
          }
          secureTextEntry={isSecureInput}
          errorText={form.errors.password}
          appendElement={showPasswordButton()}
        />
        <FormRow align="justify">
          <FormSwitch
            selected={form.values.isRemember}
            title="Keep me signed in"
            onPress={() =>
              setForm(() => ({
                ...form,
                values: {...form.values, isRemember: !form.values.isRemember},
              }))
            }
          />
          <FormLink
            title="Forgot Password?"
            onPress={() => navigate('Recovery')}
          />
        </FormRow>
        <FormButton title="SIGN IN" onPress={signIn} />
        <FormSeparator title="OR" />
        <FormButton
          variant="blue"
          title="Continue to NHS login"
          prependElement={
            <Image source={images.nhs} style={{width: 98, height: 37}} />
          }
        />
      </View>
      <FormRow>
        <FormText>DON'T HAVE AN ACCOUNT? </FormText>
        <FormLink title="SIGN UP" onPress={() => navigate('SignUp')} />
      </FormRow>
    </DefaultLayout>
  );
};

const style = StyleSheet.create({
  page: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export default SignIn;
