// src/components/Footer.jsx
import React from "react";
import {FaFacebookF,FaInstagram,FaTwitter,FaYoutube,FaPinterestP,} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#ededed] text-[#222] text-base font-normal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Logo + Contact */}
          <div className="flex flex-col gap-6">
            {/* Logo */}
            <img
              src="/src/assets/Logo.png"
              alt="UOMO Logo"
              className="w-32 h-auto mb-2"
            />
            {/* Address */}
            <div className="space-y-2 text-[16px]">
              <p>
                1418 River Drive, Suite 35 Cottonhall, CA 9622
                <br />
                United States
              </p>
              <p className="font-bold">sale@uomo.com</p>
              <p className="font-bold">+1 246-345-0695</p>
            </div>
            {/* Social Icons */}
            <div className="flex gap-6 mt-6">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-black transition-colors"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-black transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-black transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="hover:text-black transition-colors"
              >
                <FaYoutube size={20} />
              </a>
              <a
                href="#"
                aria-label="Pinterest"
                className="hover:text-black transition-colors"
              >
                <FaPinterestP size={20} />
              </a>
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-lg font-bold mb-6 tracking-wide">Company</h3>
            <ul className="space-y-0">
              {["About Us", "Careers", "Affiliates", "Blog", "Contact Us"].map(
                (item) => (
                  <li key={item} className="leading-[40px] text-[14px]">
                    <a
                      href="#"
                      className="relative inline-block hover:text-black transition-colors duration-300
                      after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-2/3"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* SHOP */}
          <div>
            <h3 className="text-lg font-bold mb-6 tracking-wide">Shop</h3>
            <ul className="space-y-0">
              {["New Arrivals", "Accessories", "Men", "Women", "Shop All"].map(
                (item) => (
                  <li key={item} className="leading-[40px] text-[14px]">
                    <a
                      href="#"
                      className="relative inline-block hover:text-black transition-colors duration-300
                      after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-2/3"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* HELP */}
          <div>
            <h3 className="text-lg font-bold mb-6 tracking-wide">Help</h3>
            <ul className="space-y-0">
              {["Customer Service", "My Account", "Find a Store", "Legal & Privacy", "Contact", "Gift Card"].map(
                (item) => (
                  <li key={item} className="leading-[40px] text-[14px]">
                    <a
                      href="#"
                      className="relative inline-block hover:text-black transition-colors duration-300
                      after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-2/3"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* SUBSCRIBE */}
          <div>
            <h3 className="text-lg font-bold mb-6 tracking-wide">Subscribe</h3>
            <p className="mb-6 leading-relaxed text-[16px]">
              Be the first to get the latest news about trends, promotions, and
              much more!
            </p>
            <form className="flex flex-col gap-3">
              <div className="flex bg-white border border-gray-300 rounded overflow-hidden">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 focus:outline-none text-base bg-transparent"
                />
                <button
                  type="submit"
                  className="px-6 py-3 text-base font-normal text-[#222] bg-white hover:bg-[#ededed] transition-colors"
                >
                  JOIN
                </button>
              </div>
            </form>
            <div className="mt-8">
              <span className="font-bold text-base mb-2 block">
                Secure payments
              </span>
              <div className="flex gap-4 mt-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/04/Discover_Card_logo.svg"
                  alt="Discover"
                  className="h-6"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                  alt="Mastercard"
                  className="h-6"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                  alt="PayPal"
                  className="h-6"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Skrill_logo.svg"
                  alt="Skrill"
                  className="h-6"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                  alt="Visa"
                  className="h-6"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-12"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-gray-500 text-sm">©2020 Uomo</p>
          <div className="flex items-center gap-6 text-gray-500 text-sm">
            <span>Language</span>
            <span>United Kingdom | English</span>
            <span>Currency</span>
            <span>$ USD</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
