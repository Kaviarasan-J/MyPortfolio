import React from "react";
import { 
  FaXTwitter, 
  FaLinkedin, 
  FaGithub , 
  FaBehance,
} from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">

      <a href="mailto:iamlearner04@gmail.com" target="_blank" rel="noopener noreferrer">
        <IoMdMail size={24} />
      </a>
     <a
        href="https://github.com/Kaviarasan-J"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/kaviarasan-j/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>

      <a
        href="https://www.behance.net/kaviarasan-j"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaBehance size={24} />
      </a>
      
    </footer>
  );
};

export default Footer;