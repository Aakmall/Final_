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
                Selamat datang di kafe kami, sebuah tempat yang hangat dan
                nyaman di mana setiap momen dirancang dengan cinta dan
                perhatian. Kami percaya bahwa kafe ini bukan sekadar tempat
                untuk menikmati makanan dan minuman lezat, tetapi juga untuk
                membangun hubungan, menginspirasi kreativitas, dan memberikan
                Anda ruang untuk bersantai dan mengisi energi. Menu kami dibuat
                dengan penuh perhatian, memadukan bahan-bahan lokal berkualitas
                dengan cita rasa yang menggugah selera. Mulai dari kopi yang
                diseduh dengan sempurna, kue-kue yang menggoda, hingga hidangan
                yang mengenyangkan, setiap sajian mencerminkan hasrat kami
                terhadap kualitas. Apakah Anda datang untuk berkumpul bersama
                teman, menemukan ide-ide baru, atau menikmati waktu sendirian,
                kafe kami adalah rumah kedua Anda. Terima kasih telah meluangkan
                waktu di sini – kami tidak sabar untuk menyambut Anda kembali!
                ☕ Di sini, rasa bertemu kenyamanan, dan kenangan tercipta.
              </p>
              <p className="text-base leading-8">
                If you wish to{" "}
                <a
                  rel="nofollow"
                  href="https://www.tooplate.com/contact"
                  target="_parent"
                >
                  support us
                </a>
                , please make a little donation via PayPal. That would be very
                helpful. Another way is to tell your friends about Tooplate
                website. Thank you.{" "}
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
