import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import { TypingText, TitleText } from "@/components/CustomTexts";
import { exploreInsights } from "@/constants/extras";
import InsightCards from "@/components/InsightCards";

const Insights = () => {
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="mx-auto flex flex-col 2xl:max-w-[1280px] w-full"
      >
        <div className="text-center">
          <TypingText title="| Insights" className="text-center" />
        </div>
        <div className="text-center">
          <TitleText title={<>Conocé mas sobre Paraíso Travel</>} />
        </div>
        <div className="mt-[50px] flex flex-col gap-[30px]">
          {exploreInsights.map((insight, index) => (
            <InsightCards
              key={`insight-${index}`}
              {...insight}
              index={index + 1}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Insights;
