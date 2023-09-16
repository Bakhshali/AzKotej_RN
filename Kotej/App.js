import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainTab from './src/navigation/tab/MainTab';
import { store } from './src/redux/stores/store';
import { Provider } from 'react-redux'; // react-redux'tan Provider'ı doğru şekilde içe aktar

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainTab />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
