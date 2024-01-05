import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {RootStackParamList} from '../types/navigation';
import FormRow from '../components/ui/form/Row';
import FormButton from '../components/ui/form/Button';
import FormSeparator from '../components/ui/form/Separator';
import DefaultLayout from '../layouts/default';
import {navigate} from '../router';
import images from '../images';
import Slider from '../components/ui/Slider.tsx';
import LoginForm from '../components/Auth/LoginForm.tsx';

type Props = NativeStackScreenProps<RootStackParamList, 'SignIn', 'Inside'>;

const SignIn: FC<Props> = () => {
  const signIn = () => {};

  const [showSlider, setShowSlider] = useState(true);

  const handleSignIn = () => {
    setShowSlider(!showSlider);
  };

  return (
    <DefaultLayout style={style.page}>
      <View style={style.container}>
        {showSlider ? (
          <Slider
            autoScroll={true}
            loop={true}
            scrollInterval={3000}
            slides={images.nhs}
          />
        ) : (
          <LoginForm onSignIn={handleSignIn} />
        )}
      </View>
      <FormRow align="justify">
        <FormButton
          variant={'secondary'}
          title="SIGN IN"
          onPress={handleSignIn}
        />
        <FormButton title="SIGN UP" onPress={() => navigate('SignUp')} />
      </FormRow>
      <FormSeparator title="OR" />
      <FormButton
        variant="blue"
        title="Continue to NHS login"
        prependElement={<Image source={images.nhs} style={style.imageStyle} />}
      />
    </DefaultLayout>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  imageStyle: {
    width: 98,
    height: 37,
  },
});

export default SignIn;
