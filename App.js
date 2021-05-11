if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store';
import Brand from './src/screens/screen';
import {NavigationContainer} from '@react-navigation/native';

const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Brand />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
