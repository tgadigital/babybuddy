// LoginForm.tsx
import React, {useState} from 'react';
import {View, Button, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Title from '../Title.tsx';
import FormInput from '../ui/form/Input.tsx';
import FormRow from '../ui/form/Row.tsx';
import FormSwitch from '../ui/form/Switch.tsx';
import FormLink from '../ui/form/Link.tsx';
import {navigate} from '../../router.ts';

interface LoginFormProps {
  onSignIn: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({onSignIn}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [isSecureInput, setIsSecureInput] = useState(true);
  const [form, setForm] = useState({
    isLoading: false,
    values: {
      email: '',
      password: '',
      isRemember: false,
    },
    errors: {
      email: '',
      password: '',
    },
  });

  const showPasswordButton = () => (
    <TouchableOpacity onPress={() => setIsSecureInput(!isSecureInput)}>
      <Text>{isSecureInput ? 'eye' : 'not-eye'}</Text>
    </TouchableOpacity>
  );

  const handleSignIn = () => {
    // Додайте логіку для обробки входу користувача з username та password
    // В даному прикладі, просто викликаємо колбек onSignIn
    onSignIn();
  };

  return (
    <View style={style.container}>
      <Title title="Sign in to Baby Buddy" />
      <FormInput
        placeholder="E-mail address"
        defaultValue={form.values.email}
        onChangeText={email =>
          setForm(prev => ({...prev, values: {...prev.values, email}}))
        }
        errorText={form.errors.email}
      />
      <FormInput
        placeholder="Password"
        defaultValue={form.values.password}
        onChangeText={password =>
          setForm(prev => ({...prev, values: {...prev.values, password}}))
        }
        secureTextEntry={isSecureInput}
        errorText={form.errors.password}
        appendElement={showPasswordButton()}
      />
      <FormRow align="justify">
        <FormSwitch
          selected={form.values.isRemember}
          title="Keep me signed in"
          onPress={() =>
            setForm(() => ({
              ...form,
              values: {...form.values, isRemember: !form.values.isRemember},
            }))
          }
        />
        <FormLink
          title="Forgot Password?"
          onPress={() => navigate('Recovery')}
        />
      </FormRow>
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default LoginForm;
