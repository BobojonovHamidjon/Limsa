import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';

function FaqSection() {
  const [expanded, setExpanded] = useState(null);

  const toggleAnswer = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className="faq bg-[#0D0E10] text-white pt-24 pb-0">
      <div className="container mx-auto px-4">
        <div className="faq__content flex flex-col md:flex-row gap-10 justify-between items-center">
          
        <div data-aos="fade-up" className="faq__left flex he items-start gap-5  md: ">
  <img
    src="https://www.limsa.uz/assets/faq__img1-CCfXCv88.png"
    alt="FAQ Illustration 1"
    className="h-auto w-1/2 md:w-1/3  "
  />
  <img
    src="https://www.limsa.uz/assets/faq__img2-B2RlJ9tp.png"
    alt="FAQ Illustration 2"
    className="h-auto w-1/2 md:w-1/3  "
  />
</div>
          <div className="faq__right w-full md:w-1/2">
            <h2 className="text-xl md:text-2xl font-bold text-gray-100 mb-6 text-center md:text-left">
              Frequently Asked Questions
            </h2>

            {[ 
              { question: "Why are the prices so cheap?", answer: "Our prices are really cheap compared to the quality. The reason is that we don't have excess labor in our web studio, so we don't have excess costs. That's why we keep our prices low compared to others...." },
              { question: "Will I be able to edit the site myself in the future?", answer: "Yes, of course, you will be given access and instructions to the content management system (adminka). Adminka has a convenient interface, is intuitive and does not require specific knowledge...." },
              { question: "Will you continue to support the site after it's finished?", answer: "Once we've finished your site, we'll keep it running for free, 24/7 for one year. After one year, it's $10/month.." }
            ].map((faq, index) => (
              <div key={index} className="faq-item mb-4 max-w-xl border border-gray-700 rounded-lg">
                <button
                  className={`faq-question w-full text-left px-5 py-4 bg-transparent text-white text-base md:text-lg cursor-pointer transition-all ${expanded === index ? 'text-purple-600' : ''}`}
                  aria-expanded={expanded === index ? 'true' : 'false'}
                  onClick={() => toggleAnswer(index)}
                >
                  <span>{faq.question}</span>
                </button>
                <div className={`faq-answer px-5 transition-all ${expanded === index ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
                  <p className="text-gray-400 text-sm md:text-base">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Marquee speed={100} className="mt-6">
        <div className="flex items-center space-x-4">
          {["WEBSITE BUILDING SERVICE", "MOBILE APPS", "AUTOMATION SYSTEMS", "DIGITAL SOLUTIONS"].map((text, idx) => (
            <span key={idx} className="text-white text-lg md:text-2xl font-bold px-4">{text}</span>
          ))}
        </div>
      </Marquee>
    </section>
  );
}

export default FaqSection;
