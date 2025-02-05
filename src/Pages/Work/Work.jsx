import React from "react";

const projects = [
  {
    url: "https://www.ataevbahodirbuild.uz/",
    imgSrc: "https://www.limsa.uz/assets/abBuild-8oz2AIO7.jpg",
    alt: "ataevbahodirbuild.uz",
    title: "ataevbahodirbuild.uz",
    description:
      "Ataev Bahadir Build - quality construction and repair services! Choose us, create the house of your dreams."
  },
  {
    url: "https://www.autozoomrental.com/",
    imgSrc: "https://www.limsa.uz/assets/avtozoomWebsite-DCWc1c07.jpg",
    alt: "autozoomrental.com",
    title: "autozoomrental.com",
    description:
      "AutoZoomRental - convenient and reliable car rental! Make your trip more pleasant with our cars."
  },
  {
    url: "https://www.it-time-academy.uz/",
    imgSrc: "https://www.limsa.uz/assets/itTime-DBMVSCL4.png",
    alt: "it-time-academy.uz",
    title: "it-time-academy.uz",
    description:
      "IT Time Academy is the destination of modern IT knowledge! Take the professions of the future with us."
  },
  {
    url: "https://www.homekit.uz/",
    imgSrc: "https://www.limsa.uz/assets/homekit-DQ2XClzR.jpg",
    alt: "homekit.uz",
    title: "homekit.uz",
    description:
      "HomeKit – modern and convenient smart home solutions! Ensure the safety and comfort of your home with us."
  },
  {
    url: "https://www.uzloyal.uz/",
    imgSrc: "https://www.limsa.uz/assets/loyalWebsite-BlOw_Q7N.jpg",
    alt: "uzloyal.uz",
    title: "uzloyal.uz",
    description:
      "UzLoyal is a reliable and convenient loyalty system! The most effective way to motivate your customers."
  },
  {
    url: "https://www.namanganoits.uz/",
    imgSrc: "https://www.limsa.uz/assets/noits-_qO1VZLh.jpg",
    alt: "namanganoits.uz",
    title: "namanganoits.uz",
    description:
      "Namangan ITS is a center of modern IT knowledge and skills! Get new opportunities at every step."
  },
  {
    url: "https://propartnyor.uz/",
    imgSrc: "https://www.limsa.uz/assets/propartnyor-CgoDPuRp.jpg",
    alt: "propartnyor.uz",
    title: "propartnyor.uz",
    description:
      "ProPartnyor is the address of reliable and effective cooperation! We will work together for the success of your business."
  },
  {
    url: "https://zamontour.uz/",
    imgSrc: "https://www.limsa.uz/assets/zamonTour-W0hbPX7f.jpg",
    alt: "zamontour.uz",
    title: "zamontour.uz",
    description:
      "ZamonTour – experience a happy tourist experience with us! Your trip with us is guaranteed to be more pleasant."
  }
];

function Work ()  {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Recent Projects</h2>
        <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <li key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border-b-2 border-gray-700 pb-6 transition-transform transform hover:scale-105">
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
                <img
                  className="w-full h-56 object-contain rounded-md transition duration-500 ease-in-out hover:rounded-none"
                  src={project.imgSrc}
                  alt={project.alt}
                  loading="lazy"
                />
                <div className="p-6 relative">
                  <p className="text-lg font-semibold absolute top-[-40px] left-5">{project.title}</p>
                  <p className="text-sm mt-4 text-gray-300">{project.description}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Work;
