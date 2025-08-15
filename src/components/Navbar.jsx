import { useState } from "react";
import logo from "@assets/logo.webp";
import { motion } from "framer-motion";
import { navVariants } from "@utils/motion";
import { CgMenuRight } from "react-icons/cg";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="relative sm:px-16 px-4 flex justify-center bg-white shadow-md py-4"
    >
      <div className="absolute w-[50%] inset-0" />
      <div className="flex items-center w-full 2xl:max-w-[1280px] relative">
        <div className="md:hidden absolute left-0">
          <CgMenuRight
            size={32}
            className="cursor-pointer text-blue"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        <div className="flex justify-center flex-1">
          <img
            src={logo}
            alt="logo"
            className="object-contain w-[150px] h-[100px]"
          />
        </div>

        <div className="hidden md:flex gap-6 absolute right-0">
          <Button label="About" targetId="about" />
          <Button label="Travels" targetId="travels" />
          <Button label="Modalities" targetId="modalities" />
          <Button label="Packs" targetId="packs" />
          <Button label="Insights" targetId="insights" />
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-full right-4 mt-2 bg-white shadow-lg rounded-lg p-4 flex flex-col gap-3 md:hidden">
          <Button
            label="About"
            targetId="about"
            onClick={() => setIsOpen(false)}
          />
          <Button
            label="Travels"
            targetId="travels"
            onClick={() => setIsOpen(false)}
          />
          <Button
            label="Modalities"
            targetId="modalities"
            onClick={() => setIsOpen(false)}
          />
          <Button
            label="Packs"
            targetId="packs"
            onClick={() => setIsOpen(false)}
          />
          <Button
            label="Insights"
            targetId="insights"
            onClick={() => setIsOpen(false)}
          />
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
