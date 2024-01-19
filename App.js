 import { Provider } from 'react-redux';

import   store  from './src/redux/store'; 
import Home from './src/screens/home/Home'; 

const App = () => {
 
  return (
    <Provider store={store}>
    <Home/>
  </Provider>

  );
};
export default App;
