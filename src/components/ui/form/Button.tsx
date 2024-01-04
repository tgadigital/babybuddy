import React from 'react';
import constants from '../../../constants';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  Text,
  StyleProp,
  TextStyle,
  View,
} from 'react-native';

type ButtonVariant = 'primary' | 'secondary' | 'blue';

interface Props extends TouchableOpacityProps {
  title: string;
  styleText?: StyleProp<TextStyle>;
  variant?: ButtonVariant;
  prependElement?: JSX.Element;
}

const FormButton = function ({
  style: customStyle,
  variant = 'primary',
  styleText,
  prependElement,
  title,
  activeOpacity = 0.95,
  ...props
}: Props) {
  return (
    <TouchableOpacity
      style={[style.button, variants[variant].button, customStyle]}
      activeOpacity={activeOpacity}
      {...props}>
      {prependElement && (
        <View style={style.prependElement}>{prependElement}</View>
      )}
      <Text style={[style.text, variants[variant].text, styleText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  button: {
    borderRadius: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  prependElement: {
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});

const variants = {
  primary: StyleSheet.create({
    button: {
      backgroundColor: constants.palette.main,
    },
    text: {
      color: constants.palette.white,
    },
  }),
  secondary: StyleSheet.create({
    button: {
      borderWidth: 1,
      borderColor: constants.palette.gray,
      backgroundColor: constants.palette.white,
    },
    text: {
      color: constants.palette.text,
    },
  }),
  blue: {
    button: {
      backgroundColor: '#005eb8',
    },
    text: {
      color: constants.palette.white,
    },
  },
};

export default FormButton;
