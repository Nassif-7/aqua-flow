import React from 'react';
import './Home.scss';
import HeaderCard from '../../components/Cards/Home header/HeaderCard';
import BodyCard from '../../components/Cards/Home body/BodyCard';

function Home() {
  return (
    <main className='home'>
      <div className='home__header'>
        {/* header nav start */}
        <div className='home__header__nav'>
          <div className='home__header__nav__logo'>
            <img src='/images/logo.png' alt='Best Aqua Solution' />
          </div>

          <div className='home__header__nav__items'>
            <ul>
              <li>
                <img src='/images/control.svg' alt='' />
                <button>لوحة التحكم</button>
              </li>
              <span></span>
              <li>
                <img src='/images/user.svg' alt='' />
                <button>الموظفين</button>
              </li>
              <span></span>
              <li>
                <img src='/images/homeplus.svg' alt='' />
                <button>المخازن</button>
              </li>
              <span></span>
              <li>
                <img src='/images/double.svg' alt='' />
                <button>العملاء</button>
              </li>
              <span></span>
              <li>
                <img src='/images/deconstruct.svg' alt='' />
                <button>المنتجات</button>
              </li>
              <span></span>
              <li>
                <img src='/images/newspaper.svg' alt='' />
                <button>المراجعه</button>
              </li>
              <span></span>
              <li>
                <img src='/images/stamp.svg' alt='' />
                <button>الحسابات</button>
              </li>
            </ul>
          </div>

          <div className='home__header__nav__icons'>
            <div className='home__header__nav__icons__btns'>
              <button>
                <img src='/images/edite.svg' alt='edite' />
              </button>
              <button>
                <img src='/images/alarm.svg' alt='notification' />
              </button>
            </div>

            <div className='home__header__nav__icons__img'>
              <img src='/images/man.jpg' alt='userimage' />
            </div>
          </div>
        </div>
        {/* header nav end */}
        <div className='home__header__line'></div> {/*divider line*/}
        {/* header data start */}
        <div className='home__header__data'>
          <div className='home__header__data__text'>
            <h4>,مرحبا</h4>
            <h1>أحمد المسيرى</h1>
            <h5>
              مشرف عام <span>*</span>
            </h5>
          </div>

          <div className='home__header__data__stat'>
            <HeaderCard
              title={'اجمالى الإيرادات'}
              num={'58.200k'}
              imageUrl={'/images/money.svg'}
              percent={'2.5%'}
              chartImage={'/images/chartgreen.svg'}
              color={'#13DE8230'}
            />
            <HeaderCard
              title={'اجمالى العملاء'}
              num={'58.200k'}
              imageUrl={'/images/user_box_light.svg'}
              percent={'2.5%'}
              chartImage={'/images/chartred.svg'}
              color={'#F9D8D4'}
            />
            <HeaderCard
              title={'اجمالى الزيارات'}
              num={'58.200k'}
              imageUrl={'/images/officelife.svg'}
              percent={'2.5%'}
              chartImage={'/images/chartblue.svg'}
              color={'#6D54DE33'}
            />
            <HeaderCard
              title={'اجمالى التقيمات'}
              num={'58.200k'}
              imageUrl={'/images/check.svg'}
              percent={'2.5%'}
              chartImage={'/images/chartyellow.svg'}
              color={'#FFEDD0'}
            />
            <HeaderCard
              title={'اجمالى الاقساط المطلوبة'}
              num={'58.200k'}
              imageUrl={'/images/coins.svg'}
              percent={'2.5%'}
              chartImage={'/images/chartviolet.svg'}
              color={'#C050E838'}
            />
          </div>
        </div>
        {/* header data end */}
      </div>

      <div className='home__body'>
        <BodyCard ImageUrl={'/images/coins41.svg'} ImageAlt={'CardImage'} Description={'المبيعات'} color={'#BFA7F9'} />
        <BodyCard ImageUrl={'/images/coins41.svg'} ImageAlt={'CardImage'} Description={'الاقساط'} color={'#C050E838'} />
        <BodyCard
          ImageUrl={'/images/coins41.svg'}
          ImageAlt={'CardImage'}
          Description={'الايرادات'}
          color={'#C050E838'}
        />
        <BodyCard ImageUrl={'/images/shop.svg'} ImageAlt={'CardImage'} Description={'المتجر'} color={'#C4975B'} />
        <BodyCard ImageUrl={'/images/heart.svg'} ImageAlt={'CardImage'} Description={'العملاء'} color={'#F4BDAA'} />
      </div>
    </main>
  );
}

export default Home;
