import { motion } from "framer-motion";
import { TypingText, TitleText } from "@/components/CustomTexts";
import { staggerContainer, fadeIn } from "@/utils/motion";

const Travel = () => {
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12" id="travel">
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        >

        </motion.div>

    </section>
  );
};

export default Travel;
