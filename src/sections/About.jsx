import { TypingText, TypingText2 } from "@/components/CustomTexts";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { RxArrowDown } from "react-icons/rx";

const About = () => {
  return (
    <section className="relative z-10 sm:p-16 xs:p-8 px-6 py-12 flex flex-col">
      <motion.div
        className="2xl:max-w-[1280px] w-full mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <TypingText title="|Acerca de Paraiso Travel" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px]
                text-[20px] text-center text-blue"
        >
          En <span className="font-extrabold">Paraíso</span> somos tres amigos
          que decidimos convertir nuestra pasión por los viajes en una agencia
          pensada para otros{" "}
          <span className="font-extrabold">viajeros como nosotros</span>. Nos
          encanta explorar el mundo y queremos compartir esa chispa con cada
          persona que viaja con nosotros. Ofrecemos desde viajes con todo
          incluido hasta experiencias totalmente personalizadas, siempre
          combinando profesionalismo con un trato cercano y amigable. En pocas
          palabras, estamos aca para que vivas experiencias increíbles, con la
          confianza de que te entendemos y te acompañamos en cada paso.{" "}
          <span className="font-extrabold">
            ¡Bienvenido a la familia Paraíso Travel!
          </span>
        </motion.p>
        <TypingText2 title="...hecho por viajeros para viajeros" />
        <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)} 
        className="flex justify-center my-10">
          <RxArrowDown className="text-blue" size={35} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
