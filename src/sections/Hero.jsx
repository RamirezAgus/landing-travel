import cover from "@assets/cover3.jpg";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "@/utils/motion";

const Hero = () => {
  return (
    <section className="sm:pl-16 pl-6 sm:py-16 xs:py-8 py-12">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="mx-auto flex flex-col 2xl:max-w-[1280px] w-full"
      >
        <div className="flex justify-center items-baseline flex-row relative z-10 pr-28">
          <motion.h1
            variants={textVariant(0.25)}
            className="text-orange font-bold lg:text-[55px] md:text-[35px] sm:text-[25px] text-[20px] lg:leading-[158px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase"
          >
            Tu Proxima&nbsp;
          </motion.h1>
          <motion.h1
            variants={textVariant(0.3)}
            className="text-blue font-bold lg:text-[65px] md:text-[45px] sm:text-[35px] text-[30px] uppercase"
          >
            Aventura
          </motion.h1>
        </div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="relative w-full md:-mt-[20px] -mt-[12px]"
        >
          <img
            src={cover}
            alt="Cover"
            className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
