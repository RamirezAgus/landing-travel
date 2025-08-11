import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";

export const TypingText = ({ title }) => (
  <motion.p
    variants={textContainer}
    className='text-orange text-[18px] 
    text-secondary-white text-center py-4'>
      {Array.from(title).map((letter, index) => (
        <motion.span
        variants={textVariant2}
        key={index}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
  </motion.p>
);

export const TypingText2 = ({ title }) => (
    <motion.p
    variants={textContainer}
    className='italic text-orange text-[18px] 
    text-secondary-white text-center py-4'>
      {Array.from(title).map((letter, index) => (
        <motion.span
        variants={textVariant2}
        key={index}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
  </motion.p>
)

export const TitleText = ({ title }) => (
    <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className="mt-[50px] font-bold md:text-[64px] text-[40px] text-blue"
    >
        {title}
    </motion.h2>
)
