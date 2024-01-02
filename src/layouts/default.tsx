import React, {PropsWithChildren} from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import constants from '../constants';

interface Props extends PropsWithChildren, ViewProps {}

const DefaultLayout = function ({
  children,
  style: customStyle,
  ...props
}: Props) {
  return (
    <View {...props} style={[style.container, customStyle]}>
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
