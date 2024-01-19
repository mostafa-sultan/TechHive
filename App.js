 import { Provider } from 'react-redux';

import   store  from './src/redux/store'; 
import Home from './src/screens/home/Home'; 
import Signin from './src/screens/auth/signin/Signin';
import SignUp from './src/screens/auth/signup/Signup';
import AppNavigator from './AppNavigator';

const App = () => {
 
  return (
    <Provider store={store}>
    <AppNavigator/>
  </Provider>

  );
};
export default App;
