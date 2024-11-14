import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { FreeMode, Pagination,Navigation} from 'swiper/modules';
import { RxArrowTopRight } from 'react-icons/rx';


const Menu = () => {
  return (
    <main className="f-screen flex flex-col justify-center items-center bg-white px-0  ">
    
      <section className="bg-gray-800 text-white  w-full">
        <div className="w-full  flex justify-between items-center py-2 ">
          <img src="//cater.svg" alt="" className="w-36  " />
          <div>
          <Link to='/subt' className="bg-green-500 hover:bg-gray-200 text-white font-sans mr-6 py-1 px-4 rounded">subscribe</Link>
          </div>
        </div>
      </section>

      <section className=" overlay h-screen w-full bg-cover bg-center" style={{ backgroundImage: 'url(//pexels-dana-tentis-118658-1239347.jpg)' }}>
        <div className="container mx-auto p-6 mt-32 flex flex-col justify-center items-center z-10">
          <h1 className="text-5xl font-bold mb-4 text-white z-10">BETTY MENU'S - CATERING SERVICE WEBSITE PAGE</h1>
          <div className="flex justify-center space-x-4 ">
            <button className="bg-gray-500 hover:bg-white hover:text-gray-500 text-white font-sans py-2 px-4 rounded z-10">VIEW ALL DEMO</button>
            <button className="bg-gray-500 hover:bg-white hover:text-gray-500 text-white font-sans py-2 px-4 rounded z-10">BUY NOW</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto p-4 md:p-6 lg:p-8 bg-gray-100 justify-center">
        <h1 className="text-4xl mb-4 text-center font-black">Betty's Menu - Features</h1>
        <p className="mb-4 text-center font-bold">There are so many reasons to choose Betty's Menu, here are few features:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <p>Menu Variety: Offer diverse options</p>
            <p> Quality Food: Fresh, flavorful, and visually appealing dishes
            </p>
            <p>Timely Delivery/Pickup: Reliable scheduling and punctual delivery/pickup</p>
            <p>Cleanliness and Hygiene: Maintain high standards of food handling and presentation</p>
            

          </div>
          <div>
            <p>Online Ordering and Payment
              </p>
            <p> Catering Consultations: Personalized planning and advice
            </p>
            <p> Customized menus for specific events (e.g., weddings, corporate)
            </p>
            <p>Customer Satisfaction: Your satisfaction is our priority</p>
          </div>
          <div>
            <p>Event Coordination: Assistance with logistics and timing
            </p>
            <p>Partnerships and Collaborations: Work with local suppliers and vendors
            </p>
            <p>Cross Browser Optimization</p>
            <p> Special Offers and Discounts: Loyalty programs, promotions, or discounts
            </p>
            

          </div>
        </div>
      </section>
      {/* Menu Selection Section */}
      <section className="container p-4 mb-6 w-full h-full justify-center">
        <h1 className="text-4xl font-bold mb-4 text-center">CHOOSE YOUR MENU</h1>
        <Swiper
      spaceBetween={50}
      slidesPerView={1}
     className=' h-full'
     navigation={true} modules={[Navigation]}
    >
      <SwiperSlide className=' w-full h-auto'>
      <img src="/pexels-annl-2284604.jpg" alt="style =" className="w-full h-screen 0bject-cover  rounded-2xl mx-auto " />
      </SwiperSlide>
      <SwiperSlide>
      <img src="/pexels-enesfilm-8360218.jpg" alt="" className="  w-full h-screen object-cover  rounded-2xl mx-auto" />
      </SwiperSlide>
      <SwiperSlide>
      <img src="/istockphoto-498311434-612x612.jpg" alt="" className="  w-full h-screen object-cover  rounded-2xl mx-auto" />
      </SwiperSlide>
      <SwiperSlide>
      <img src="/pexels-iamabdullahsheik-10480254.jpg" alt="" className="  w-full h-screen object-cover  rounded-2xl mx-auto" />
      </SwiperSlide>
      <SwiperSlide>
      <img src="/pexels-jonathanborba-29098366.jpg" alt="" className="  w-full h-screen object-cover  rounded-2xl mx-auto" />
      </SwiperSlide>
      <SwiperSlide>
      <img src="/pexels-lum3n-44775-1410235.jpg" alt="" className="  w-full h-screen object-cover  rounded-2xl mx-auto" />
      </SwiperSlide>
      <SwiperSlide>
      <img src="/istockphoto-1386533522-612x612.jpg" alt="" className="  w-full h-screen object-cover  rounded-2xl mx-auto" />
      </SwiperSlide>
      <SwiperSlide>
      <img src="/pexels-juliomelanda-1448721.jpg" alt="" className="  w-full h-screen object-cover  rounded-2xl mx-auto" />

      </SwiperSlide>
    </Swiper>
      </section>

      <section className="bg-orange-700 text-white w-full mx-auto p-4 md:p-6 lg:p-8">
        <h1 className="text-4xl font-bold mb-4 text-center">You may also like our Special menu</h1>
        <p className="mb-4 text-center">You can also choose one of these items if you like:</p>
        <nav className=' '>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <li>
             <h1> Appetizers</h1>
             <p> Mini Caprese Skewers (Tomato, Mozzarella, Basil)
             </p>
             <p>Bruschetta (Garlic Bread, Tomato, Basil)
             </p>
             <p>Caprese Salad (Tomato, Mozzarella, Basil)
             </p>
             <p>Mini Quiches (Various Fillings) </p>
            </li>

            <li>
             <h1> Entrees</h1>
             <p>Grilled Chicken with Herb Butter
             </p>
             <p>Grilled Salmon with Lemon Herb Butter
             </p>
             <p>Steak with Mashed Potatoes
             </p>
             <p>Vegetable Stir Fry
             </p>
            </li>

            <li>
             <h1> Desserts</h1>
             <p>Chocolate Lava Cake
             </p>
             <p>Chocolate Brownie
             </p>
             <p>Vanilla Ice Cream
             </p>
             <p>Strawberry Shortcake</p>
             <p>Key Lime Pie</p>
            </li>
            
          </ul>
        </nav>
      </section>

      <section className="container mx-auto p-4 md:p-6 lg:p-8">
        <h1 className="text-4xl font-bold mb-4 text-center">You may also like (Holiday-Themed Menus)</h1>
        <p className="mb-4 text-center">You can also choose one of these items if you like:</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' >
          <div className=''>
            <img src="/pexels-meruyert-gonullu-6161669.jpg" alt="" className='w-20 md:w-64  h-40  rounded-2xl shadow-slate-400 mb-2 object-cover' />
            <img src="/pexels-the-castlebar-3902897-19107140.jpg" alt="" className='w-20 md:w-64  h-40  rounded-2xl shadow-slate-400 object-cover' />
          <p> Christmas (Turkey, Ham, Mashed Potatoes)
          </p>
          </div>
          <div>
            <img src="/pexels-karography-438592595-16331112.jpg" alt="" className='w-20 md:w-64  h-40  rounded-2xl shadow-slate-400 mb-2 object-cover' />
            <img src="/pexels-rachel-claire-4577167.jpg" alt="" className='w-20 md:w-64  h-40  rounded-2xl shadow-slate-400 object-cover' />
            <p>Thanksgiving (Gravy, Potatoes, Gravy)
          </p>
          </div>
          <div>
            <img src="/pexels-matheus-lara-1785960246-29111982.jpg" alt="" className='w-20 md:w-64  h-40  rounded-2xl shadow-slate-400 mb-2 object-cover'/>
            <img src="/pexels-daisy-anderson-5584276.jpg" alt=""  className='w-20 md:w-64  h-40  rounded-2xl shadow-slate-400'/>
            <p>Halloween (Spooky Finger Foods)
          </p>
          </div>
          <div>
            <img src="/pexels-vlada-karpovich-7561328.jpg" alt=""  className='w-20 md:w-64  h-40  rounded-2xl shadow-slate-400 mb-2 object-cover'/>
            <img src="/pexels-jonathanborba-4599123.jpg" alt=""  className='w-20 md:w-64  h-40  rounded-2xl shadow-slate-400'/>
            <p>
            Anniversary
          </p>
          </div>
          <div>
            <img src="/pexels-pnw-prod-8995668.jpg" alt="" className='w-20 md:w-64  h-40  rounded-2xl shadow-slate-400 mb-2 object-cover' />
            <img src="/pexels-viniciusvieirafotografia-19763212.jpg" alt="" className='w-20 md:w-64  h-40  rounded-2xl shadow-slate-400'/>
            <p>Valentine's Day (Romantic Dinner)
            </p>
          </div>
          <div className=''>
            <img src="/pexels-nicole-michalou-5779181.jpg" alt="" className='w-20 md:w-64  h-40  rounded-2xl shadow-slate-400 gap mb-2 object-cover'/>
            <img src="/pexels-mathew-thomas-318779-10661278.jpg" alt="" className='w-20 md:w-64  h-40  rounded-2xl shadow-slate-400'/>
            <p>New Year's Eve 
            </p>
          </div>
          </div>
        
      </section>

            {/* Support Section */}
            <section className="container flex mx-auto p-4 md:p-6 lg:p-8 bg-gray-100 ">
        <div className="flex justify-center items-center space-x-4">
          
          <div>
            <h1 className="text-6xl font-bold mb-4">Get Connected with Our Catering Team!
            </h1>
            <p className="mb-4">Join our online community to get exclusive updates on our services and promotions
            </p>
            <div>

            </div>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Community Forum</button>
          </div>
        </div>
      </section>

      {/* Logo Section */}
      <section className="container mx-auto p-4 md:p-6 lg:p-8  ">
        <div className="flex justify-center items-center">
          <img src="/fork.png" alt="" className="w-48 " />
        </div>
      </section>

      
      <section className="container mx-auto p-4 md:p-6 lg:p-8 w-full bg-gray-600 h-fit">
        <footer className="text-center">
        <div class="flex  h-16 w-96  ">
  <a href="#" class="flex justify-center items-center  text-white text-2xl hover:bg-[#1a1e22] rounded-2xl transition duration-300 ease-in-out">
  <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="1em" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>

  </a>
  <a href="#" class="flex justify-center items-center w-1/4 text-white text-2xl hover:bg-[#0a66c2] rounded-2xl transition duration-300 ease-in-out">
  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="#fff"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
  </a>
  <a href="#" class="flex justify-center items-center w-1/4 text-white text-2xl hover:bg-[#0059f7] rounded-2xl transition duration-300 ease-in-out">
  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="#fff"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>

  </a>
  <a href="#" class="flex justify-center items-center w-1/4 text-white text-2xl hover:bg-[#1d4292] rounded-2xl transition duration-300 ease-in-out">
  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="#fff"><path d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2.6-8.7.6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"></path></svg>

  </a>
</div>
<p>&copy; [Betty Empire] 2024</p>
         
        </footer>
      </section>
    </main>
  );
};

export default Menu;