import React from "react";

const About = () => {
  return (
    <div>
      <div id="about" className="About" data-parallax="scroll">
        <div className="container mx-auto tm-container py-24 sm:py-48">
          <div className="tm-item-container sm:ml-auto sm:mr-12 mx-auto sm:px-0 px-4">
            <div className="bg-white bg-opacity-80 p-12 pb-14 rounded-xl mb-5">
              <h2 className="mb-6 tm-text-green text-4xl font-medium">
                About our cafe
              </h2>
              <p className="mb-6 text-base leading-8">
                Welcome to our café, a cozy and inviting space where every
                moment is crafted with love and care. We believe in creating
                more than just delicious food and drinks – we’re here to build
                connections, inspire creativity, and offer you a place to relax
                and recharge. Our menu is thoughtfully curated, blending rich,
                locally sourced ingredients with flavors that excite your taste
                buds. From perfectly brewed coffee to mouthwatering pastries and
                hearty meals, every bite and sip reflects our passion for
                quality. Whether you're here to catch up with friends, spark new
                ideas, or enjoy a quiet moment alone, our café is your home away
                from home. Thank you for sharing your time with us – we can’t
                wait to serve you again soon! ☕ Where flavors meet comfort, and
                memories are made.
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
