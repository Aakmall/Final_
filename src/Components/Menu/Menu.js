import React from "react";

const menu = () => {
  return (
    <div>
      <div id="menu" className="Menu" data-parallax="scroll">
        <div className="container mx-auto tm-container py-24 sm:py-48">
          <div className="text-center mb-16">
            <h2 className="bg-white tm-text-brown py-6 px-12 text-4xl font-medium inline-block rounded-md">
              Our Cafe Menu
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row justify-around items-center">
            <div className="flex-1 m-5 rounded-xl px-4 py-6 sm:px-8 sm:py-10 tm-bg-brown tm-item-container">
              <div className="flex items-start mb-6 tm-menu-item">
                <img src="img/menu-item-1.jpg" alt="" className="rounded-md" />
                <div className="ml-3 sm:ml-6">
                  <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow">
                    Hot Cappuccino
                  </h3>
                  <div className="text-white text-md sm:text-lg font-light mb-1">
                    Large : Rp. 20.000,00
                  </div>
                  <div className="text-white text-md sm:text-lg font-light">
                    Small : Rp. 15.000,00
                  </div>
                </div>
              </div>
              <div className="flex items-start mb-6 tm-menu-item">
                <img src="img/menu-item-2.jpg" alt="" className="rounded-md" />
                <div className="ml-3 sm:ml-6">
                  <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow">
                    Hot Americano
                  </h3>
                  <div className="text-white text-md sm:text-lg font-light mb-1">
                    Small : Rp.15.000,00
                  </div>
                  <div className="text-white text-md sm:text-lg font-light">
                    Large : Rp.19.000,00
                  </div>
                </div>
              </div>
              <div className="flex items-start mb-6 tm-menu-item">
                <img src="img/menu-item-3.jpg" alt="" className="rounded-md" />
                <div className="ml-3 sm:ml-6">
                  <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow">
                    Hot Latte
                  </h3>
                  <div className="text-white text-md sm:text-lg font-light mb-1">
                    Medium : Rp.18.000,00
                  </div>
                  <div className="text-white text-md sm:text-lg font-light">
                    Large : Rp.23.000,00
                  </div>
                </div>
              </div>
              <div className="flex items-start mb-6 tm-menu-item">
                <img src="img/menu-item-4.jpg" alt="" className="rounded-md" />
                <div className="ml-3 sm:ml-6">
                  <h3 className="text-lg sm:text-xl tm-text-yellow mb-1">
                    Hot Espresso
                  </h3>
                  <div className="text-white text-md sm:text-lg font-light">
                    Medium : Rp.18.000,00
                  </div>
                  <div className="text-white text-md sm:text-lg font-light">
                    Large : Rp.23.000,00
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 m-5 rounded-xl px-4 py-6 sm:px-8 sm:py-10 tm-bg-brown tm-item-container">
              <div className="flex items-start justify-end mb-6 tm-menu-item-2">
                <div className="text-right mr-6">
                  <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow">
                    Iced Cappuccino
                  </h3>
                  <div className="text-white text-md sm:text-lg font-light mb-1">
                    Small : Rp.15.000,00
                  </div>
                  <div className="text-white text-md sm:text-lg font-light">
                    Large : Rp.24.000,00
                  </div>
                </div>
                <img src="img/menu-item-5.jpg" alt="" className="rounded-md" />
              </div>
              <div className="flex items-start justify-end mb-6 tm-menu-item-2">
                <div className="text-right mr-6">
                  <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow">
                    Iced Americano
                  </h3>
                  <div className="text-white text-md sm:text-lg font-light mb-1">
                    Small : Rp.19.000,00
                  </div>
                  <div className="text-white text-md sm:text-lg font-light">
                    Large Rp.26.000,00
                  </div>
                </div>
                <img src="img/menu-item-6.jpg" alt="" className="rounded-md" />
              </div>
              <div className="flex items-start justify-end mb-6 tm-menu-item-2">
                <div className="text-right mr-6">
                  <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow">
                    Iced Milky Latte
                  </h3>
                  <div className="text-white text-md sm:text-lg font-light mb-1">
                    Small : Rp.22.000,00
                  </div>
                  <div className="text-white text-md sm:text-lg font-light">
                    Large : Rp. 28.000,00
                  </div>
                </div>
                <img src="img/menu-item-7.jpg" alt="" className="rounded-md" />
              </div>
              <div className="flex items-start justify-end mb-6 tm-menu-item-2">
                <div className="text-right mr-6">
                  <h3 className="text-lg sm:text-xl tm-text-yellow mb-1">
                    Iced Espresso
                  </h3>
                  <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow">
                    Iced Mocha
                  </h3>
                  <div className="text-white text-md sm:text-lg font-light">
                    Small :Rp.15.000,00
                  </div>
                  <div className="text-white text-md sm:text-lg font-light">
                    Large : Rp. 23.000,00
                  </div>
                </div>
                <img src="img/menu-item-8.jpg" alt="" className="rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default menu;
