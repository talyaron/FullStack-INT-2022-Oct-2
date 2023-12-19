import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './navigation/TabNavigator';
import { BackgroundProvider } from './contexts/BackgroundContext';

const App: React.FC = () => {
  return (
    <BackgroundProvider>
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
    </BackgroundProvider>
  );
};

export default App;