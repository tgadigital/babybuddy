import React, {PropsWithChildren} from 'react';
import {StyleSheet, View} from 'react-native';

interface Props extends PropsWithChildren {
  align?: 'left' | 'center' | 'right' | 'justify';
}

const FormRow = function ({children, align = 'center'}: Props) {
  return <View style={[style.container, style[align]]}>{children}</View>;
};

const style = StyleSheet.create({
  container: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: {
    justifyContent: 'flex-start',
  },
  center: {
    justifyContent: 'center',
  },
  right: {
    justifyContent: 'flex-end',
  },
  justify: {
    justifyContent: 'space-between',
  },
});

export default FormRow;
