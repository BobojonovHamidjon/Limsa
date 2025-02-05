import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0c0a0a] py-5">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between flex-wrap">
          <a href="#" aria-label="Homepage">
            <img
              className="footer__img"
              src="https://www.limsa.uz/assets/Limsa%20-%20Logotypecolor2-DK-aqGj3.png"
              alt="Limsa Logotype"
              width="150"
              loading="lazy"
            />
          </a>
          <p className="footer__text text-white text-center mt-4 sm:text-left">
            © 2024 Limsa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
