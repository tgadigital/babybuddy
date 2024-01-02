import React, {PropsWithChildren} from 'react';
import {StyleSheet, Text} from 'react-native';
import constants from '../../../constants';

interface Props extends PropsWithChildren {}

const FormText = function ({children}: Props) {
  return <Text style={style.text}>{children}</Text>;
};

const style = StyleSheet.create({
  text: {
    color: constants.palette.textGray,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FormText;
