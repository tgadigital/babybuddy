import React from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import constants from '../../../constants';

interface Props {
  style?: StyleProp<ViewStyle>;
  title?: string;
}

const FormSeparator = function ({title, style: customStyle}: Props) {
  return (
    <View style={[style.container, customStyle]}>
      {title && (
        <View style={style.titleWrap}>
          <Text style={style.title}>{title}</Text>
        </View>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginVertical: 40,
    height: 1,
    backgroundColor: constants.palette.gray,
    position: 'relative',
  },
  titleWrap: {
    left: 0,
    right: 0,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    top: -10,
  },
  title: {
    fontSize: 16,
    backgroundColor: constants.palette.white,
    color: constants.palette.textGray,
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
});

export default FormSeparator;
