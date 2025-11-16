import React from "react";

function Footer() {
  return (
    <footer>
      {/* First Line */}
      <div className="glassfooter">
        <p>
          Built by{" "}
          <span className="text-blue-400 font-semibold">Karthik</span>
        </p>

        <div className="contactlist">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=karthikvelu0415@gmail.com&su=TechQuest%20Support"
            className="animated-button"
          >
             Email
          </a>


          <a href="https://www.linkedin.com/in/karthik-m-b2b427326" 
          className="animated-button">
             Linkdln
          </a>


          <a href="https://github.com/thefab04" 
          className="animated-button">
             Github
          </a>
        </div>
      

      {/* Second Line */}
      <p className="text-xs text-gray-600">
        &copy; {new Date().getFullYear()} TechQuest. All rights reserved.
      </p>

      </div>
    </footer>
  );
}

export default Footer;
