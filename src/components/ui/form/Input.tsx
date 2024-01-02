import React from 'react';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';
import constants from '../../../constants';

interface Props extends TextInputProps {
  disabled?: boolean;
  label?: string;
  optional?: boolean;
  appendElement?: JSX.Element;
  helpText?: string;
  errorText?: string;
}

const FormInput = function ({
  disabled,
  label,
  optional,
  style: customStyle,
  appendElement,
  errorText,
  ...props
}: Props) {
  return (
    <View style={style.container}>
      {label && (
        <View style={style.labelWrap}>
          <Text style={style.labelText}>{label}</Text>
          {optional && <Text style={style.optional}>Optional</Text>}
        </View>
      )}
      <TextInput
        style={[style.input, !!errorText && style.error, customStyle]}
        editable={!disabled}
        placeholderTextColor={constants.palette.textGray}
        {...props}
      />
      {!!errorText && <Text style={style.errorText}>{errorText}</Text>}
      {appendElement && (
        <View style={style.appendElement}>{appendElement}</View>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginBottom: 20,
    position: 'relative',
  },
  labelWrap: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  labelText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: constants.palette.textGray,
  },
  optional: {
    fontSize: 14,
    marginRight: 20,
    color: constants.palette.textGray,
  },
  input: {
    height: 62,
    borderRadius: 10,
    paddingHorizontal: 20,
    backgroundColor: constants.palette.white,
    borderWidth: 1,
    fontSize: 16,
    color: constants.palette.text,
    borderColor: constants.palette.gray,
  },
  appendElement: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    right: 20,
    top: 1,
    height: 60,
    backgroundColor: constants.palette.white,
  },
  errorText: {
    fontSize: 15,
    color: constants.palette.textGray,
    marginTop: 10,
  },
  error: {
    borderColor: constants.palette.red,
  },
});

export default FormInput;
