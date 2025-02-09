import React from 'react';

const Prices = () => {
  return (
    <section className="pt-[150px] bg-[rgb(25,25,26)] bg-right bg-[url('https://www.limsa.uz/assets/pricing-shape-D9Ghccyc.png')]" aria-labelledby="prices-title">
      <div className="container mx-auto px-4">
        <div className="text-center ">
          <button className="px-6 py-2 border border-purple-600 rounded-full text-purple-600 hover:bg-purple-600 hover:text-white transition ">
            Our prices
          </button>
          <h2 id="prices-title" className="text-3xl font-bold text-white">
            Our affordable websites for you
          </h2>
          <br /><br /><br />

          <div className="prices__group flex flex-col gap-8 text-white">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="prices__card w-full md:w-[90%] lg:w-[80%] mx-auto bg-[#1e1e1e] bg-[url('https://www.limsa.uz/assets/pricing-itembg-SEN5K1Vz.png')] bg-no-repeat bg-center border border-gray-300 rounded-lg p-4 shadow-md flex flex-col md:flex-row justify-between items-center gap-4"
              >
                <div className="prices__left py-5 w-full md:w-[300px] border-b md:border-b-0 md:border-r border-gray-300 text-center md:text-left">
                  <h3 className="text-2xl text-purple-700">LANDING PAGE</h3>
                  <p className="text-base max-w-xs text-gray-400 mb-4 mx-auto md:mx-0">
                    Another name for a one-page site is a Landing Page. The page is easy to use and introduces the customer to the information they need.
                  </p>
                </div>

                <ul className="prices__list list-none p-0 mb-4" role="list">
                  {['Domain UZ', 'Protection 24/7', 'Duration 3 days', 'Number of pages 1'].map((feature, index) => (
                    <li key={index} className="text-sm text-gray-400 my-2 flex items-center justify-center md:justify-start">
                      <span className="text-purple-700 mr-2">✔</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="prices__right flex flex-col md:flex-row items-center gap-4">
                  <div className="text-lg font-bold text-purple-700">Negotiate</div>
                  <a
                    href="#order"
                    className="bg-purple-700 text-white rounded-md px-4 py-2 cursor-pointer font-bold hover:bg-purple-800 transition"
                    aria-label="LANDING PAGE - Place Order"
                  >
                    Place Order
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prices;
