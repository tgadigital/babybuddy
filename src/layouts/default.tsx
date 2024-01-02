import React, {PropsWithChildren} from 'react';
import {StyleSheet, View} from 'react-native';
import constants from '../constants';

interface Props extends PropsWithChildren {}

const DefaultLayout = function ({children, ...props}: Props) {
  return (
    <View {...props} style={style.container}>
      {children}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: constants.palette.white,
  },
});

export default DefaultLayout;
