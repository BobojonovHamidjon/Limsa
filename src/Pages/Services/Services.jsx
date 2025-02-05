export default function Services() {
    return (
      <section className="py-10 bg-gray-900 text-white">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl sm:text-6xl font-bold mb-6 services__title">
            Why us? Why most people choose us?
          </h2>
          <p className="text-purple-600 services__text text-3xl sm:text-5xl font-bold">
            Our Benefits
          </p>
          <ul className="services__list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none mt-20">
            {/* 1st Item */}
            <li className="services__list-item bg-black p-8 rounded-xl cursor-pointer flex shadow-lg items-start max-w-[450px] w-full">
              <div className="services__list-left flex flex-col items-center gap-8 mr-4">
                <div className="services__list-icon text-4xl text-[#f5f5f5]">
                  <svg className="w-12 h-12 text-[#f5f5f5]" stroke="currentColor" fill="currentColor"
                    strokeWidth="0" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"></path>
                  </svg>
                </div>
                <p className="services__list-text text-2xl text-white mr-4">01</p>
              </div>
              <div className="services__list-right">
                <h4 className="services__list-title text-xl font-bold text-white m-0">Adaptive</h4>
                <p className="services__list-description text-xs text-[#b1b1b1] leading-6 max-w-[300px]">
                The websites we create will be flexible. That is, they will have a tablet and mobile version. There will be no separate payment for this.
                </p>
              </div>
            </li>
  
            {/* 2nd Item */}
            <li className="services__list-item bg-black p-8 rounded-xl cursor-pointer flex shadow-lg items-start max-w-[450px] w-full">
              <div className="services__list-left flex flex-col items-center gap-8 mr-4">
                <div className="services__list-icon text-4xl text-[#f5f5f5]">
                <svg className="w-12 h-12 text-[#f5f5f5]" stroke="currentColor" fill="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <path fill="none" strokeWidth="2" d="M8,11 C10.7614237,11 13,8.76142375 13,6 C13,3.23857625 10.7614237,1 8,1 C5.23857625,1 3,3.23857625 3,6 C3,8.76142375 5.23857625,11 8,11 Z M13.0233822,13.0234994 C11.7718684,11.7594056 10.0125018,11 8,11 C4,11 1,14 1,18 L1,23 L8,23 M10,19.5 C10,20.88 11.12,22 12.5,22 C13.881,22 15,20.88 15,19.5 C15,18.119 13.881,17 12.5,17 C11.12,17 10,18.119 10,19.5 L10,19.5 Z M23,15 L20,12 L14,18 M17.5,14.5 L20.5,17.5 L17.5,14.5 Z"></path>
</svg>

                </div>
                <p className="services__list-text text-2xl text-white mr-4">02</p>
              </div>
              <div className="services__list-right">
                <h4 className="services__list-title text-xl font-bold text-white m-0">Admin</h4>
                <p className="services__list-description text-xs text-[#b1b1b1] leading-6 max-w-[300px]">
                Your website will have a convenient and simple admin panel that will allow you to manage the site from within.
                </p>
              </div>
            </li>
  
            {/* 3rd Item */}
            <li className="services__list-item bg-black p-8 rounded-xl cursor-pointer flex shadow-lg items-start max-w-[450px] w-full">
              <div className="services__list-left flex flex-col items-center gap-8 mr-4">
                <div className="services__list-icon text-4xl text-[#f5f5f5]">
                <svg className="w-12 h-12 text-white" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
  <path fill="none" d="M0 0h24v24H0z"></path>
  <path d="M10.5 13H8v-3h2.5V7.5h3V10H16v3h-2.5v2.5h-3V13zM12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25 6 2.25v4.7z"></path>
</svg>

                </div>
                <p className="services__list-text text-2xl text-white mr-4">03</p>
              </div>
              <div className="services__list-right">
                <h4 className="services__list-title text-xl font-bold text-white m-0">Protection</h4>
                <p className="services__list-description text-xs text-[#b1b1b1] leading-6 max-w-[300px]">
                  Our websites are protected by modern anti-virus and firewalls to resist spambots and attacks.
                </p>
              </div>
            </li>
  
            {/* 4th Item */}
            <li className="services__list-item bg-black p-8 rounded-xl cursor-pointer flex shadow-lg items-start max-w-[450px] w-full">
              <div className="services__list-left flex flex-col items-center gap-8 mr-4">
                <div className="services__list-icon text-4xl text-[#f5f5f5]">
                <svg className="w-12 h-12 text-white" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
  <path d="M1023.84 572.544c.096-21.056-3.217-100.496-5.745-123.216-29.12-260.752-240.752-450-503.184-450-273.344 0-494.815 210.624-509.84 489.904-.32 6.096-2.56 49.344-2.72 75.088l-.08 14.32C.958 584.56.158 590.672.158 596.976v214.656c0 46.88 38.128 85.008 85.008 85.008h86.288c46.88 0 85.023-38.128 85.023-85.008v-214.64c0-46.88-38.16-85.008-85.024-85.008H85.15a85.65 85.65 0 0 0-17.184 1.744c.48-10.383.912-18.576 1.025-21.056C82.159 247.888 276.127 63.328 514.91 63.328c229.28 0 414.128 165.344 439.568 393.12 1.072 9.504 2.448 33.664 3.552 57.92-6.193-1.44-12.577-2.385-19.2-2.385H853.55c-46.88 0-85.008 38.128-85.008 85.008v213.664c0 32.368 18.4 60.256 45.09 74.592l-205.44 80.656v-5.216c0-17.664-14.337-32-32-32h-96c-17.665 0-32 14.336-32 32v32c0 17.664 14.335 32 32 32h96c.272 0 .512-.08.784-.08l57.36-.224L963.89 895.007c4.32-1.792 7.984-4.464 10.992-7.664 28.848-13.616 48.991-42.736 48.991-76.688V596.99c0-5.216-.64-10.288-1.552-15.233.88-2.944 1.504-6 1.52-9.216zm-938.689 3.44h86.29c11.6 0 21.023 9.408 21.023 21.008v214.656c0 11.6-9.44 21.008-21.025 21.008H85.152c-11.6 0-21.007-9.409-21.007-21.008V596.992c.015-11.6 9.423-21.008 21.007-21.008zm747.377 21.008c0-11.6 9.41-21.008 21.009-21.008h85.28c11.6 0 21.023 9.408 21.023 21.008v213.664c0 11.6-9.44 21.008-21.024 21.008h-85.28c-11.6 0-21.008-9.408-21.008-21.008V596.992z"></path>
</svg>

                </div>
                <p className="services__list-text text-2xl text-white mr-4">04</p>
              </div>
              <div className="services__list-right">
                <h4 className="services__list-title text-xl font-bold text-white m-0">Monitoring 24/7</h4>
                <p className="services__list-description text-xs text-[#b1b1b1] leading-6 max-w-[300px]">
                Your website is automatically monitored online 24 hours a day to keep it up and running.
                </p>
              </div>
            </li>
  
            {/* 5th Item */}
            <li className="services__list-item bg-black p-8 rounded-xl cursor-pointer flex shadow-lg items-start max-w-[450px] w-full">
              <div className="services__list-left flex flex-col items-center gap-8 mr-4">
                <div className="services__list-icon text-4xl text-[#f5f5f5]">
                <svg className="w-12 h-12 text-white" stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
  <path d="M22.083 5.023 13.02.302a2.717 2.717 0 0 0-2.488 0L1.917 4.789A2.06 2.06 0 0 0 .805 6.623l.006 10.76c0 .773.426 1.476 1.112 1.834l8.59 4.479c.38.198.813.304 1.245.304v-.002c.432 0 .862-.108 1.244-.306l9.083-4.735a2.053 2.053 0 0 0 1.11-1.835V6.857a2.06 2.06 0 0 0-1.112-1.834zm.222 12.103c.003.441-.24.847-.632 1.05l-9.085 4.736a1.81 1.81 0 0 1-1.664 0l-8.59-4.48a1.184 1.184 0 0 1-.637-1.048L1.691 6.625c0-.44.246-.844.636-1.048l8.615-4.491a1.828 1.828 0 0 1 1.666 0l9.063 4.725c.39.205.634.608.634 1.048v10.267zM4.666 9.2v1.088L9.86 9.44V7.954L4.666 9.2zm4.111-.54.604-.132v.552l-.604.106V8.66zm-3.455.76 2.55-.562v.494l-2.55.46V9.42zm4.541 6.74v-1.486l-5.195-.85v1.088l5.195 1.248zm-1.986-.904-2.553-.562v-.395l2.553.46v.497zm1.506.33-.602-.132v-.526l.602.106v.552zm11.583-8.827-2.33-1.214-1.853.694V4.58L13.69 2.966a4.133 4.133 0 0 0-3.827 0l-6.83 3.561a.298.298 0 0 0-.16.26l.007 10.401c0 .11.06.21.16.26l6.805 3.547c1.2.626 2.627.626 3.827 0l3.1-1.614v-1.66l1.852.694 2.348-1.225a.298.298 0 0 0 .16-.262l-.006-9.908a.288.288 0 0 0-.16-.26zM4.398 10.871V8.75l5.541-1.494a.23.23 0 0 1 .29.22V9.83c0 .204-.152.38-.356.402l-5.475.64v-.001zm5.477 3.01a.404.404 0 0 1 .359.4v2.355a.23.23 0 0 1-.29.22l-5.542-1.494v-2.12l5.473.64zm3.137 6.962s.428-.612.48-1.74V14.62s.042-1.68-1.334-2.601c1.376-.92 1.336-2.6 1.336-2.6V5.096c0-1.272-.488-1.975-.488-1.975l3.307 1.725v5.061c0 .076.06.14.136.146l2.14.154a.15.15 0 0 0 .16-.148V6.12l1.967 1.02v9.684L18.75 17.85v-4.247a.15.15 0 0 0-.16-.148l-2.14.156a.148.148 0 0 0-.137.148v5.366l-3.3 1.72v-.002z"></path>
</svg>

                </div>
                <p className="services__list-text text-2xl text-white mr-4">05</p>
              </div>
              <div className="services__list-right">
                <h4 className="services__list-title text-xl font-bold text-white m-0">Domain and Hosting</h4>
                <p className="services__list-description text-xs text-[#b1b1b1] leading-6 max-w-[300px]">
                Domain and hosting run around, forget about headaches. We have domain UZ and hosting free for 6 months (then $10/month)
                </p>
              </div>
            </li>
  
            {/* 6th Item */}
            <li className="services__list-item bg-black p-8 rounded-xl cursor-pointer flex shadow-lg items-start max-w-[450px] w-full">
              <div className="services__list-left flex flex-col items-center gap-8 mr-4">
                <div className="services__list-icon text-4xl text-[#f5f5f5]">
                <svg className="w-12 h-12 text-white" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
  <g id="Globe">
    <path d="M14.645,2.428a8.1,8.1,0,0,0-1.61-.3,9.332,9.332,0,0,0-3.6.28l-.07.02a9.928,9.928,0,0,0,.01,19.15,9.091,9.091,0,0,0,2.36.34,1.274,1.274,0,0,0,.27.02,9.65,9.65,0,0,0,2.63-.36,9.931,9.931,0,0,0,.01-19.15Zm-.27.96a8.943,8.943,0,0,1,5.84,5.11h-4.26a13.778,13.778,0,0,0-2.74-5.35A8.254,8.254,0,0,1,14.375,3.388Zm-2.37-.09a12.78,12.78,0,0,1,2.91,5.2H9.075A12.545,12.545,0,0,1,12.005,3.3Zm3.16,6.2a13.193,13.193,0,0,1,0,5.01H8.845a12.185,12.185,0,0,1-.25-2.5,12.353,12.353,0,0,1,.25-2.51Zm-5.6-6.09.07-.02a9.152,9.152,0,0,1,1.16-.23A13.618,13.618,0,0,0,8.045,8.5H3.8A9,9,0,0,1,9.565,3.408Zm-6.5,8.6a8.71,8.71,0,0,1,.37-2.51h4.39a13.95,13.95,0,0,0-.23,2.51,13.757,13.757,0,0,0,.23,2.5H3.435A8.591,8.591,0,0,1,3.065,12.008Zm6.57,8.61a8.9,8.9,0,0,1-5.84-5.11h4.24a13.632,13.632,0,0,0,2.77,5.35A8.1,8.1,0,0,1,9.635,20.618Zm-.56-5.11h5.84a12.638,12.638,0,0,1-2.91,5.21A12.872,12.872,0,0,1,9.075,15.508Zm5.3,5.11a11.551,11.551,0,0,1-1.17.24,13.8,13.8,0,0,0,2.75-5.35h4.26A8.924,8.924,0,0,1,14.375,20.618Zm1.8-6.11a13.611,13.611,0,0,0,0-5.01h4.39a8.379,8.379,0,0,1,.37,2.51,8.687,8.687,0,0,1-.36,2.5Z"></path>
  </g>
</svg>

                </div>
                <p className="services__list-text text-2xl text-white mr-4">06</p>
              </div>
              <div className="services__list-right">
                <h4 className="services__list-title text-xl font-bold text-white m-0">Unique</h4>
                <p className="services__list-description text-xs text-[#b1b1b1] leading-6 max-w-[300px]">
                The design of each site we create will be unique and different from other sites. One design is one site!
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    );
  }
  