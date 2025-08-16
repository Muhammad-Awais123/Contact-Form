import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className=" flex relative bottom-0 flex-col justify-center items-center mb-8">
        <div className="container">
          <div className="copyright text-center m-auto ">
            <p>© Copyright <strong class="px-1 ">Muhammad
                Awais</strong>. All Rights Reserved</p>
          </div>
          <div className="credits text-gray-600 text-center">
            Built with passion by . <a className="text-blue-600"
              href="//awais-portfolio-web.netlify.app/">Muhammad Awais</a>
          </div>
        <div className="explore-more text-gray-600 text-center">
          <strong>Explore-More Projects</strong>
          <a className="text-blue-700 mx-2 animate-pulse" href="https://awais-portfolio-web.netlify.app/#portfolio">Click to View</a>
        </div>
        </div>

      </footer>
  );
};

export default Footer;
