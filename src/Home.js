import React from "react";
import SliderImage from "./Slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import Product from "./Product";
import Category from "./Category";
import Discover from "./Discover";

import "react-toastify/dist/ReactToastify.css";

function Home() {
  const properties = {
    duration: 1000,
    autoplay: true,
    transitionDuration: 200,
    arrows: true,
    infinite: true,
    // indicators: i => <div className="indicator">{i + 1}</div>
};

const slideImages = [
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC/LPG/LPG_Hero_PC_1500x600._CB407755280_.jpg",
    "https://www.ehr.com.np/uploads/PagesBanner/banner-nepal-01.jpg",
    "https://bsglobal.co/wp-content/uploads/2019/02/980x300_landingpagebanners_newmacbookpro_071418_MS.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg",
    "https://www.nepalrentalcar.com/uploads/img/janaki-temple.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2020/img/Sports/XCM_Manual_ORIGIN_1261289_1333735_IN_in_fitness_days_event_sep_gw_in_en_3328889_1500x600_1X_en_IN._CB405086418_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img20/PC/Accessories/GW/PC-acc_june20_DesktopHero_1500x600._CB429195970_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/WLA/September/Headsets/realmeBudsClassic/White/V248982080_WLA-realme_Buds_Classic_White_Mob_Hero_1242x450._CB405393760_.jpg"
];
  return (
    <div className='home'>
      <div className='home__container'>
        {/* <img
          className='home__image'
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
          alt=''
        /> */}
        <SliderImage />

        <div className='home__row'>
          <Category
            id='1000'
            title='Amazon Basics'
            image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg'
            link='See more'
          />
          <Category
            id='1001'
            title='Computer & Acessories'
            image='https://images-na.ssl-images-amazon.com/images/I/81pG6xR8dnL._AC_SL1500_.jpg'
            link='See more'
          />
          <Category
            id='1002'
            title='Get fit at home'
            image='https://images-na.ssl-images-amazon.com/images/I/51FxE1LMBKL._AC_SL1000_.jpg'
            link='See more'
          />
          <Category
            id='1003'
            title='Video Games'
            image='https://images-na.ssl-images-amazon.com/images/I/61tl4Go6rqL._AC_SL1100_.jpg'
            link='See more'
          />

          {/* Product */}
          {/* Product */}
        </div>
        <div className='home__row'>
          <Product
            id='2000'
            title='Think Like A Monk - By Jay Shetty'
            price={29.99}
            image='https://m.media-amazon.com/images/I/41mXQJF3aEL.jpg'
            rating={5}
          />
          <Product
            id='2001'
            title='Profit With Javascript-A course that’ll kick your a**, teach you how to complete real-world projects and make a living as a modern JavaScript web developer.'
            price={399.99}
            image='https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/a3liO9nUSCyEhyiAnDOw_Profit-with-JavaScript-new.jpg'
            rating={5}
          />
          <Product
            id='2002'
            title='Lenovo Flex 5 14" 2-in-1 Laptop, 14.0" FHD (1920 x 1080) Touch Display, AMD Ryzen 5 4500U Processor, 16GB DDR4, 256GB SSD, Win 10, 81X20005US, Graphite Grey'
            price={1389.99}
            image='https://images-na.ssl-images-amazon.com/images/I/81x%2B9uFY1QL._AC_SL1500_.jpg'
            rating={5}
          />
        </div>
        <div className='home__row'>
          <Discover />
        </div>
        <div className='home__row'>
          {/* Product */}
          {/* Product */}
          <Product
            id='49035850'
            title='samsung LC49RG90SSUXEN 49" Curved LED Gaming Monitor'
            price={199.99}
            image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
            rating={3}
          />
          <Product
            id='1532346'
            title='Echo Plus (2nd Generation) with Amazon Smart Plug - Charcoal'
            price={99.99}
            image='https://images-na.ssl-images-amazon.com/images/I/61mhy8eQGEL._AC_SL1000_.jpg'
            rating={4}
          />
          <Product
            id='4548135'
            title='New Apple iPad Pro (11-inch, Wi-Fi + Cellular, 256GB) - Space Gray (2nd Generation) with AppleCare+ Bundle'
            price={1178.99}
            image='https://images-na.ssl-images-amazon.com/images/I/61Qhkzxsb-L._AC_SL1500_.jpg'
            rating={5}
          />
          {/* Product */}
        </div>
        <div className='home__row'>
          {/* https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/a3liO9nUSCyEhyiAnDOw_Profit-with-JavaScript-new.jpg */}
          <Product
            id='490535850'
            title='Samsung CJ890 Series 49 inch 3840x1080 Super Ultra-Wide Desktop Monitor for Business, 144 Hz, USB-C, HDMI, DisplayPort, 3-Year Warranty (C49J890DKN)'
            price={199.99}
            image='https://m.media-amazon.com/images/S/aplus-media/vc/b3fa1b54-e7f0-4838-9161-7c04ff734a65.__CR0,0,2000,820_PT0_SX1464_V1___.jpg'
            rating={3}
          />
          <Product
            id='49053580'
            title='
            Roll over image to zoom in
            bopmen S40 Active Noise Cancelling Bluetooth Headphones - Wireless ANC Over Ear Headphones, Stereo Sound Headphones '
            price={99.99}
            image='https://images-na.ssl-images-amazon.com/images/I/61o-AamwyEL._AC_SL1000_.jpg'
            rating={3}
          />

          <Product
            id='49053570'
            title='
            Bowflex SelectTech 552 - Two Adjustable Dumbbells'
            price={399.99}
            image='https://images-na.ssl-images-amazon.com/images/I/816lKIQ3C8L._AC_SL1500_.jpg'
            rating={5}
          />
          {/* Product */}
        </div>
      </div>
    </div>
  );
}

export default Home;
