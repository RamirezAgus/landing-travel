import { motion } from "framer-motion";
import { footerVariants } from "@/utils/motion";
import logo from "/logo.webp";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className="sm:p-16 xs:p-8 px-6 py-8 relative"
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
          <div className="flex gap-4 items-center">
            <a
              href="https://www.instagram.com/paraisotravel.arg/?utm_source=ig_web_button_share_sheet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram size={28} className="text-blue cursor-pointer" />
            </a>
            <FaTiktok size={24} className="text-blue cursor-pointer" />
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
