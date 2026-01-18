import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#050816] mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 sm:px-12 lg:px-16 text-center md:text-left">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          
          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold text-[#FF9900] mb-2 tracking-wide">
              Husban Ali
            </h2>
            <p className="text-gray-400 text-base mb-3">
              Full Stack Developer & <span className="text-[#FF9900]">AWS Cloud Enthusiast</span>
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Building scalable applications & <br /> innovative cloud solutions 🚀
            </p>
          </div>

          {/* Expertise / Technologies */}
          <div>
            <h3 className="text-lg font-semibold text-[#FF9900] mb-4">Expertise</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>⚡ MERN Stack Development</li>
              <li>⚡ AWS (Lambda, API Gateway, S3, DynamoDB)</li>
              <li>⚡ REST APIs & Serverless Apps</li>
              <li>⚡ Cloud-Native & Scalable Solutions</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-[#FF9900] mb-4">Get In Touch</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <p>📍 Karachi, Pakistan</p>
              <p>
                📧{" "}
                <a
                  href="mailto:your.email@example.com"
                  className="hover:text-[#FF9900] transition-colors duration-200"
                >
                  syedhusbanalii@gmail.com
                </a>
              </p>
              <p>
                📱{" "}
                <a
                  href="tel:+923001234567"
                  className="hover:text-[#FF9900] transition-colors duration-200"
                >
                  +92 330 2349479
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800/50 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-center text-gray-400 text-sm">
          {/* Copyright */}
          <p className="mb-3 md:mb-0">
            © {new Date().getFullYear()}{" "}
            <span className="text-[#FF9900] font-semibold">Husban Ali</span>. 
            All Rights Reserved.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Husban-Ali"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF9900] transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/husban-ali/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF9900] transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="mailto:syedhusbanalii@gmai.com"
              className="hover:text-[#FF9900] transition-colors duration-200"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
