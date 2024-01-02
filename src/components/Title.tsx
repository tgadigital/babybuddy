import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import constants from '../constants';

interface Props extends TextProps {
  title: string;
}

const Title = function ({title, ...props}: Props) {
  return (
    <Text style={style.title} {...props}>
      {title}
    </Text>
  );
};

const style = StyleSheet.create({
  title: {
    color: constants.palette.main,
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
  },
});

export default Title;
