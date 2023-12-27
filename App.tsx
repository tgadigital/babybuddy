import React from 'react';

import Navigation from './src/components/Navigation';
import AuthProvider from './src/services/provider/auth';

function App(): JSX.Element {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}

export default App;
