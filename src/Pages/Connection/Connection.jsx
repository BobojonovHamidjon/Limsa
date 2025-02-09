import React, { useState } from "react";
import { Link } from "react-router-dom";

const Connection = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <section
      id="order"
      className="py-16 bg-cover bg-center px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: "url(https://www.limsa.uz/assets/formImg-DbQiFUzS.png)" }}
    >
      <div className="container mx-auto max-w-7xl ">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
       
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold max-w-[684px]">
              Order a website for your business now, And get a small gift from us 10% off!
            </h2>
            <p className="text-purple-600 mt-4 text-lg">Satisfying every customer is our highest goal - LIMSA</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-8 justify-center lg:justify-start">
              <div>
                <h3 className="text-white text-xl font-semibold">Pages</h3>
                <ul className="mt-3 space-y-2">
                  <li>
                    <a href="#" className="scroll-smooth text-gray-400 hover:text-purple-400 transition">
                      Home
                    </a>
                  </li>
                  <li>
                    <Link to="/services" className="text-gray-400 hover:text-purple-400 transition">
                      Our Services
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

         
          <form onSubmit={handleSubmit} className="lg:w-1/2  p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto lg:mx-0">
            <h3 className="text-white text-2xl font-bold mb-6 text-center lg:text-left">Leave your details</h3>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 mb-4 bg-[#6c6c6c] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <div className="flex items-center mb-4  bg-[#6c6c6c] rounded-lg p-4">
              <span className="text-white pr-2">+998</span>
              <input
                type="tel"
                name="phone"
                placeholder="901234567"
                value={formData.phone}
                onChange={handleChange}
                maxLength="9"
                required
                className=" flex-1 bg-transparent text-white focus:outline-none"
              />
            </div>
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              maxLength="200"
              className="w-full p-4 bg-[#6c6c6c] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
            ></textarea>
            <button
              type="submit"
              className="w-[150px] py-3 bg-purple-600 text-white font-bold rounded-3xl hover:bg-purple-700 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Connection;
