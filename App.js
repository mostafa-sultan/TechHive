 import { Provider } from 'react-redux';

import   store  from './src/redux/store'; 
import Home from './src/screens/home/Home'; 
import Signin from './src/screens/auth/signin/Signin';

const App = () => {
 
  return (
    <Provider store={store}>
    <Signin/>
  </Provider>

  );
};
export default App;
