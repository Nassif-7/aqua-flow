import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import './style/reset.scss';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './pages/Home/Home';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
