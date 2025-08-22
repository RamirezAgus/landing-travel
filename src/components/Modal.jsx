import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import WhatsAppButton from "./WhatsAppButton";

const Modal = ({ isOpen, onClose, packages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!packages || packages.length === 0) return null;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % packages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? packages.length - 1 : prev - 1));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl w-full max-w-[90vw] md:max-w-2xl relative shadow-xl overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-2 z-50 bg-black/50 text-white p-2 rounded-full hover:bg-black"
            >
              <IoMdClose size={22} />
            </button>
            <div className="relative">
              <img
                src={packages[currentIndex].imgUrl}
                alt={packages[currentIndex].title}
                className="w-full h-[30vh] md:h-64 object-cover"
              />
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
              >
                <FaChevronRight />
              </button>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold mt-2">
                {packages[currentIndex].title}
              </h2>
              {packages[currentIndex].subtitle && (
                <h3 className="text-lg font-semibold mt-1 text-gray-700">
                  {packages[currentIndex].subtitle}
                </h3>
              )}
              <div className="mt-3 text-gray-600 space-y-2 text-[13px] md:leading-[8px] leading-[1.3]">
                {packages[currentIndex].description
                  .split("\n")
                  .map((line, idx) =>
                    line.trim().startsWith("-") ? (
                      <li key={idx} className="list-disc list-inside">
                        {line.replace("-", "").trim()}
                      </li>
                    ) : (
                      <p key={idx}>{line}</p>
                    )
                  )}
              </div>
              <div className="flex justify-center mt-4">
                <WhatsAppButton packageSubtitle={packages[currentIndex].subtitle} packageTitle={packages[currentIndex].title}/>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
