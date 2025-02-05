import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';

function FaqSection() {
  const [expanded, setExpanded] = useState(null);

  const toggleAnswer = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className="faq bg-gray-900 text-white pt-24 pb-0">
      <div className="container mx-auto px-4">
        <div className="faq__content flex flex-col md:flex-row gap-16 justify-between">
         
          <div data-aos="fade-up" className="faq__left flex items-start gap-5 w-full md: max-w-[380px]">
            <img
              src="https://www.limsa.uz/assets/faq__img1-CCfXCv88.png"
              alt="FAQ Illustration 1"
              className="pt-12  h-auto" 
            />
            <img
              src="https://www.limsa.uz/assets/faq__img2-B2RlJ9tp.png"
              alt="FAQ Illustration 2"
              className='pt-20  h-auto'
            />
          </div>

          
          <div className="faq__right w-full md:w-1/2">
            <h2 id="faq-title" className="faq__right-title text-xl md:text-2xl font-bold text-gray-100 mb-8 max-w-lg">
              Frequently Asked Questions
            </h2>

            {[
              {
                question: "Why are the prices so cheap?",
                answer:
                  "Our prices are really cheap compared to the quality. The reason is that we don't have excess labor in our web studio, so we don't have excess costs. That's why we keep our prices low compared to others.",
              },
              {
                question: "Will I be able to edit the site myself in the future?",
                answer:
                  "Yes, of course, you will be given access and instructions to the content management system (adminka). Adminka has a convenient interface, is intuitive and does not require specific knowledge.",
              },
              {
                question: "Will you continue to support the site after it's finished?",
                answer:
                  "Once we've finished your site, we'll keep it running for free, 24/7 for one year. After one year, it's $10/month.",
              },
            ].map((faq, index) => (
              <div key={index} className="faq-item mb-4 max-w-xl border border-gray-700 rounded-lg">
                <button
                  className={`faq-question w-full text-left px-5 py-7 bg-transparent text-white text-lg border-none cursor-pointer transition-all ease-in-out 
                             ${expanded === index ? 'bg-transparent text-purple-600' : ''}`}
                  aria-expanded={expanded === index ? 'true' : 'false'}
                  onClick={() => toggleAnswer(index)}
                >
                  <span>{faq.question}</span>
                  <svg
                    className={`transition-transform ${expanded === index ? 'rotate-180' : ''}`}
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"></path>
                  </svg>
                </button>
                <div
                  className={`faq-answer px-5 transition-all ease-in-out ${expanded === index ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}
                  aria-hidden={expanded !== index}
                >
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

   
      <Marquee speed={300}>
        <div className="h-[20vh] overflow-hidden flex items-center justify-center">
          <div className="flex items-center space-x-2">
            <span className="text-white text-center font-bold text-[28px] mx-[5px] w-[680px]">
              WEBSITE BUILDING SERVICE
            </span>
            <span className="text-white text-[18px] font-bold mx-[5px]">/</span>
            <span className="text-white text-center font-bold text-[28px] mx-[5px] w-[540px]">
              MOBILE APPS
            </span>
            <span className="text-white text-[18px] font-bold mx-[5px]">/</span>
            <span className="text-white text-center font-bold text-[28px] mx-[5px] w-[680px]">
              AUTOMATION SYSTEMS
            </span>
            <span className="text-white text-[18px] font-bold mx-[5px]">/</span>
            <span className="text-white text-center font-bold text-[28px] mx-[5px] w-[500px]">
              DIGITAL SOLUTIONS
            </span>
          </div>
        </div>
      </Marquee>
    </section>
  );
}

export default FaqSection;
