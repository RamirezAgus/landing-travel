import { useState } from "react";
import logo from "@assets/logo.webp";
import { AnimatePresence, motion } from "framer-motion";
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
      className="py-4 sm:px-16 px-4 flex flex-col fixed top-0 left-0 w-full justify-center bg-white/70 backdrop-blur-md bg-white z-50"
    >
      <div className="flex md:flex-col justify-between items-center w-full 2xl:max-w-[1280px] mx-auto">
        <div className="w-8 md:hidden" />
        <img
          src={logo}
          alt="logo"
          className="object-contain md:w-[150px] w-[120px] md:h-[100px] h-[80px] cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />

        <div className="hidden md:flex md:gap-6">
          <Button
            label="Nosotros"
            targetId="about"
          />
          <Button
            label="Destinos"
            targetId="travels"
          />
          <Button
            label="Modalidades"
            targetId="modalities"
          />
          <Button
            label="Paquetes"
            targetId="packs"
          />
          <Button
            label="Insights"
            targetId="insights"
          />
        </div>

        <CgMenuRight
          size={32}
          className="cursor-pointer text-blue md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex justify-center items-center gap-4 mt-4 md:hidden"
          >
            <Button
              label="Nosotros"
              targetId="about"
              onClick={() => setIsOpen(false)}
            />
            <Button
              label="Destinos"
              targetId="travels"
              onClick={() => setIsOpen(false)}
            />
            <Button
              label="Modalidades"
              targetId="modalities"
              onClick={() => setIsOpen(false)}
            />
            <Button
              label="Paquetes"
              targetId="packs"
              onClick={() => setIsOpen(false)}
            />
            <Button
              label="Insights"
              targetId="insights"
              onClick={() => setIsOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;


