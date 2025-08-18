import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const ModalitieCard = ({ id, imgUrl, title, index, handleClick, description }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="relative flex-1 min-w-[200px] sm:min-w-[250px] max-w-[300px] h-[480px] cursor-pointer"
      onClick={() => handleClick(id)}
    >
      <img
        src={imgUrl}
        alt="modality-1"
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      
        <div className="absolute bottom-0 p-4 flex justify-start w-full h-[300px] flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
          <h2 className="mt-[12px] font-semibold sm:text-[28px] text-[20px] text-white">
            {title}
          </h2>
          <p className="font-normal text-[15px] leading-[20.16px] text-white ">
            {description}
          </p>
        </div>
    </motion.div>
  );
};

export default ModalitieCard;
