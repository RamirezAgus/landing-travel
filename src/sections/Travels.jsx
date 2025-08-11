import { useState } from "react";
import { motion } from "framer-motion";
import { TypingText, TitleText } from "@/components/CustomTexts";
import { staggerContainer} from "@/utils/motion";
import { exploreTravels } from "@/constants";
import TravelCards from "@/components/TravelCards";

const Travel = () => {
  const [active, setActive] = useState("travel-1");

  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12" id="travel">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="mx-auto flex flex-col 2xl:max-w-[1280px] w-full"
      >
        <div className="text-center">
          <TypingText title="| Destinos" className="text-center" />
        </div>
        <div className="mt-2 text-center">
          <TitleText title={<>Viajá como quieras</>} />
        </div>
        <div className="flex flex-col min-h-[70vh] gap-5">
          {exploreTravels.map((travel, index) => (
            <TravelCards
              key={travel.id}
              {...travel}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Travel;
