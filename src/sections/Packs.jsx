import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import { TypingText, TitleText } from "@/components/CustomTexts";
import PackCards from "@/components/PackCards";
import { explorePacks } from "@/constants/extras";

const Packs = () => {
  const [active, setActive] = useState("modality-1");

  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12" id="packs">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="text-center">
          <TypingText title="| Paquetes de Viaje" className="text-center" />
        </div>
        <div className="my-2 text-center">
          <TitleText title={<>Elige tu paquete</>} />
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {explorePacks.map((pack, index) => (
            <PackCards
              key={pack.id}
              {...pack}
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

export default Packs;
