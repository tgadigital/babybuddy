import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import constants from '../../../constants';

interface Props extends TouchableOpacityProps {
  title: string;
}

const FormLink = function ({title, ...props}: Props) {
  return (
    <TouchableOpacity activeOpacity={1} style={style.link} {...props}>
      <Text style={style.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  link: {},
  text: {
    color: constants.palette.main,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FormLink;
