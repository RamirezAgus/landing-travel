import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const ModalitieCard = ({ id, imgUrl, title, index, handleClick, description }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="relative flex-1 min-w-[250px] sm:min-w-[300px] max-w-[400px] h-[700px] cursor-pointer"
      onClick={() => handleClick(id)}
    >
      <img
        src={imgUrl}
        alt="modality-1"
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      
        <div className="absolute bottom-0 p-4 flex justify-start w-full h-[300px] flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
          <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
            {title}
          </h2>
          <p className="font-normal text-[16px] leading-[20.16px] text-white ">
            {description}
          </p>
        </div>
    </motion.div>
  );
};

export default ModalitieCard;
