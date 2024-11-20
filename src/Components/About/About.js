import React from "react";

const About = () => {
  return (
    <div>
      <div id="about" className="About" data-parallax="scroll">
        <div className="container mx-auto tm-container py-24 sm:py-48">
          <div className="tm-item-container sm:ml-auto sm:mr-12 mx-auto sm:px-0 px-4">
            <div className="bg-white bg-opacity-80 p-12 pb-14 rounded-xl mb-5">
              <h2 className="mb-6 tm-text-green text-4xl font-medium">
                Tentang kafe kami
              </h2>
              <p className="mb-6 text-base leading-8">
                Kafe kami adalah tempat yang hangat dan nyaman untuk menikmati
                hidangan lezat dan kopi berkualitas. Dengan bahan-bahan lokal
                terbaik, setiap sajian dibuat dengan cinta dan perhatian. Baik
                untuk berkumpul, bekerja, atau bersantai, kami siap menyambut
                Anda dan menciptakan momen berharga bersama. ☕ Nikmati rasa,
                ciptakan kenangan.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-block tm-bg-green transition text-white text-xl pt-3 pb-4 px-8 rounded-md"
            >
              <i className="far fa-comments mr-4"></i>
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
