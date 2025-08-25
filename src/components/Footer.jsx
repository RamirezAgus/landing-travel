import { motion } from "framer-motion";
import { footerVariants } from "@/utils/motion";
import logo from "/logo.webp";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className="sm:p-16 xs:p-8 px-6 py-12 py-8 relative"
    >
      <div
        className="2xl:max-w-[1280px] w-full mx-auto flex
    flex-col gap-8"
      >
        <div
          className="flex items-center justify-between
      flex-wrap gap-5"
        >
          <h4
            className="font-bold md:text-[64px]
        text-[30px] text-blue"
          >
            Elegí tu próximo destino
          </h4>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-blue" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <img src={logo} alt="Logo" className="w-[100px] h-auto" />
          <p className="font-normal text-[14px] text-orange">
            Copyright © 202X - 202X ParaisoTravel. All rights reserved.
          </p>
          <div className="flex gap-4">
            <FaTwitter size={24} className="text-blue" />
            <FaLinkedin size={24} className="text-blue" />
            <AiFillInstagram size={24} className="text-blue" />
            <FaFacebook size={24} className="text-blue" />
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
