import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import { exploreModalities } from "@/constants/extras";
import { TypingText, TitleText } from "@/components/CustomTexts";
import ModalitieCard from "@/components/ModalitieCards";

const Modalities = () => {
  const [active, setActive] = useState("modality-1");

  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12" id="modalities">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="text-center">
          <TypingText title="| Modalidades de Viajes" className="text-center" />
        </div>
        <div className="my-2 text-center">
          <TitleText title={<>Elige tu modalidad</>} />
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {exploreModalities.map((modality, index) => (
            <ModalitieCard
              key={modality.id}
              {...modality}
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

export default Modalities;
