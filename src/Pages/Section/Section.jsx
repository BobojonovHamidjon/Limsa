import React from 'react'

function Section() {
  return (
    <section className="hero pt-[150px] pb-[100px] bg-cover bg-center bg-no-repeat text-white" style={{ backgroundImage: 'url(https://www.limsa.uz/assets/main_bg-B3dATDZU.jpg)' }}>
    <div className="container mx-auto px-4">
      <div className="hero__content flex justify-between items-center gap-8 flex-wrap">
        <div className="hero__left w-full md:w-[500px] text-center md:text-left">
          <h1 className="hero__title text-4xl font-bold text-white mb-8">
            Perfect <span className="text-purple-600">IT</span> solutions to grow your business!
          </h1>
          <p className="hero__text text-gray-300 text-lg leading-6 mb-6">
            Entrust your project to experts with more than 10 years of experience and achieve high success in a short time.
          </p>
          <a 
            className="hero__button py-3 px-6 bg-[#6c2dba] text-white font-semibold text-lg rounded-lg border-2 border-[#6c2dba] transition-all duration-300 hover:bg-transparent hover:text-white hover:border-[#6c2dba]"
            href="#order"
            aria-label="Home"
          >
            Contact
          </a>
        </div>
        <div className="hero__right aos-init" data-aos="fade-down">
          <img className="hero__img w-full md:w-[700px] h-auto" src="https://www.limsa.uz/assets/komp-C0wSXX5y.png" alt="" />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Section