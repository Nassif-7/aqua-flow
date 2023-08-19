import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import './style/reset.scss';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
