import React, {PropsWithChildren} from 'react';
import {StyleSheet, View} from 'react-native';

interface Props extends PropsWithChildren {}

const FormRow = function ({children}: Props) {
  return <View style={style.container}>{children}</View>;
};

const style = StyleSheet.create({
  container: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default FormRow;
