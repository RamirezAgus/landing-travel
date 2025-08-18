import { useState } from "react";
import { motion } from "framer-motion";
import { TypingText, TitleText } from "@/components/CustomTexts";
import { staggerContainer} from "@/utils/motion";
import { exploreTravels } from "@/constants";
import TravelCards from "@/components/TravelCards";
import Modal from "@/components/Modal";

const Travel = () => {
  const [active, setActive] = useState(null);

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
        <div className="my-2 text-center">
          <TitleText title={<>Viajá como quieras</>} />
        </div>
        <div className="flex flex-col min-h-[100vh] gap-5 py-4">
          {exploreTravels.map((travel, index) => (
            <TravelCards
              key={travel.id}
              {...travel}
              index={index}
              active={active?.id}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
      <Modal
        isOpen={!!active}
        onClose={() => setActive(null)}
        packages={active?.packages || []}
      />
    </section>
  );
};

export default Travel;
