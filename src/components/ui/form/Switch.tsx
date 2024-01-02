import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import constants from '../../../constants';

interface Props extends TouchableOpacityProps {
  selected: boolean;
  title?: string;
}

const FormSwitch = function ({selected, title, ...props}: Props) {
  return (
    <TouchableOpacity activeOpacity={1} style={style.container} {...props}>
      <View style={[style.pinWrap, selected && style.pinWrapSelected]}>
        <View style={style.pin} />
      </View>
      {title && <Text style={style.title}>{title}</Text>}
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pinWrap: {
    height: 30,
    width: 48,
    borderRadius: 15,
    padding: 4,
    flexDirection: 'row',
    backgroundColor: constants.palette.gray,
  },
  pinWrapSelected: {
    justifyContent: 'flex-end',
    backgroundColor: constants.palette.main,
  },
  pin: {
    height: 22,
    width: 22,
    borderRadius: 20,
    backgroundColor: constants.palette.white,
  },
  title: {
    fontSize: 14,
    paddingLeft: 10,
    color: constants.palette.textGray,
  },
});

export default FormSwitch;
