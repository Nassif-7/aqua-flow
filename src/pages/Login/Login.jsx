import React, { useState } from 'react';
import './Login.scss';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../redux/user/userActions';
import { connect } from 'react-redux';

function Login({ login }) {
  const [credentials, setCredentials] = useState({ userName: '', password: '' });
  const navigate = useNavigate();

  function handleInputChange(event) {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  }

  function handleLogin(event) {
    event.preventDefault();
    login(credentials);
    navigate('/');
  }

  return (
    <main className='login flex'>
      <div className='flex-shrink-0 login__banar'>
        <img src='/images/logo.png' alt='Best Aqua Solution' />
      </div>

      <div className='login__container'>
        <form className='login__form' onSubmit={handleLogin}>
          <span className='login__form__subheader'>مرحباً مجدداً</span>
          <span className='login__form__header'>تسجيل الدخول</span>

          <div>
            <input
              type='text'
              placeholder='البريد الالكتروني'
              name='userName'
              autoComplete='true'
              className='login__form__input'
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              type='password'
              placeholder='كلمة السر'
              name='password'
              autoComplete='true'
              className='login__form__input'
              onChange={handleInputChange}
            />
          </div>

          <button type='submit' className='login__form__btn'>
            سجل الدخول
          </button>

          <div className='login__form__link'>
            تواجة مشكلة؟ <Link>طلب تغيير كلمة السر</Link>
          </div>
        </form>
      </div>
    </main>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => dispatch(login(credentials))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
