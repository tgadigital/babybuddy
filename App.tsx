import React from 'react';

import Navigation from './src/components/Navigation';
import AuthProvider from './src/services/provider/auth';
import {SafeAreaView} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </SafeAreaView>
  );
}

export default App;
