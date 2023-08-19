import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <main className='login flex'>
      <div className='flex-shrink-0 login__banar'>
        <img src='/images/logo.png' alt='Best Aqua Solution' />
      </div>
      <div className='login__container'>
        <form className='login__form'>
          <span className='login__form__subheader'>مرحباً مجدداً</span>
          <span className='login__form__header'>تسجيل الدخول</span>

          <div>
            <input type='email' placeholder='البريد الالكتروني' name='' id='' className='login__form__input' />
          </div>
          <div>
            <input type='password' placeholder='كلمة السر' name='' id='' className='login__form__input' />
          </div>

          <button type='submit' className='login__form__btn'>
            سجل الدخول
          </button>

          <div className='login__form__link'>
            تواجة مشكلة؟
            <Link>طلب تغيير كلمة السر</Link>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Login;
