export default function Services() {
    return (
      <section className="py-10 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-6xl font-bold mb-6 services__title">
          Why us? Why most people choose us?
          </h2>
          <p className="text-purple-600 services__text text-5xl  font-bold ">
          Our Benefits
          </p>
          <ul className="services__list flex justify-around items-center gap-[20px] list-none  mt-20">
            <li className="services__list-item bg-black p-[35px] rounded-[15px] cursor-pointer flex shadow-lg items-start max-h-[210px]">
                <div className="services__list-left items-center gap-[40px] mr-[15px] flex-col">
                    <div className="services__list-icon text-[50px] text-[#f5f5f5] mr-[10px] ">
                    <svg className="w-[50px] h-[50px] text-[#f5f5f5] mr-[10px]" stroke="currentColor"fill="currentColor"
                     strokeWidth="0" viewBox="0 0 24 24" aria-hidden="true"xmlns="http://www.w3.org/2000/svg"
>
  <path fill="none" d="M0 0h24v24H0V0z"></path>
  <path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"></path>
</svg>
                    </div>
                    <p className="services__list-text text-[24px] text-white mr-[15px] ">0
                        1
                    </p>
                </div>
                <div className="services__list-right ">
                    <h4 className="services__list-title text-[22px] font-bold text-white m-0">Adaptive</h4>
                    <p className="services__list-description text-[12px] text-[#b1b1b1] leading-[25px] max-w-[300px]">The websites we create will be flexible. That is, they will have a tablet and mobile version. There will be no </p>

                </div>
            </li>
            <li className="services__list-item bg-black p-[35px] rounded-[15px] cursor-pointer flex shadow-lg items-start max-h-[210px]">
                <div className="services__list-left items-center gap-[40px] mr-[15px] flex-col">
                    <div className="services__list-icon text-[50px] text-[#f5f5f5] mr-[10px] ">
                    <svg className="w-[50px] h-[50px] text-[#f5f5f5] mr-[10px]" stroke="currentColor"fill="currentColor"
                     strokeWidth="0" viewBox="0 0 24 24" aria-hidden="true"xmlns="http://www.w3.org/2000/svg"
>
  <path fill="none" d="M0 0h24v24H0V0z"></path>
  <path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"></path>
</svg>
                    </div>
                    <p className="services__list-text text-[24px] text-white mr-[15px] ">0
                        2
                    </p>
                </div>
                <div className="services__list-right ">
                    <h4 className="services__list-title text-[22px] font-bold text-white m-0">Admin</h4>
                    <p className="services__list-description text-[12px] text-[#b1b1b1] leading-[25px] max-w-[300px]">Your website will have a convenient and simple admin panel that will allow you to manage the site from within.</p>

                </div>
            </li>
            <li className="services__list-item bg-black p-[35px] rounded-[15px] cursor-pointer flex shadow-lg items-start max-h-[210px]">
                <div className="services__list-left items-center gap-[40px] mr-[15px] flex-col">
                    <div className="services__list-icon text-[50px] text-[#f5f5f5] mr-[10px] ">
                    <svg className="w-[50px] h-[50px] text-[#f5f5f5] mr-[10px]" stroke="currentColor"fill="currentColor"
                     strokeWidth="0" viewBox="0 0 24 24" aria-hidden="true"xmlns="http://www.w3.org/2000/svg"
>
  <path fill="none" d="M0 0h24v24H0V0z"></path>
  <path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"></path>
</svg>
                    </div>
                    <p className="services__list-text text-[24px] text-white mr-[15px] ">0
                        3
                    </p>
                </div>
                <div className="services__list-right ">
                    <h4 className="services__list-title text-[22px] font-bold text-white m-0">Protection</h4>
                    <p className="services__list-description text-[12px] text-[#b1b1b1] leading-[25px] max-w-[300px]">Our websites are protected by modern anti-virus and firewalls to resist spambots and attacks.</p>

                </div>
            </li>
          </ul>
  
        
        </div>
      </section>
    );
  }
  