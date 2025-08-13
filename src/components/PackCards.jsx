import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const PackCards = ({ id, imgUrl, title, subtitle, index, handleClick, description }) => {
  return (
    <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className="relative flex-1 min-w-[250px] sm:min-w-[300px] max-w-[400px] h-[700px] cursor-pointer"
    onClick={() => handleClick(id)}
    >
    <img
        src={imgUrl}
        alt="pack-1"
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="absolute bottom-0 p-4 flex justify-start w-full h-full flex-col bg-[rgba(0,0,0,0.5)] rounded-[24px]">
          <h2 className="mt-[20px] font-semibold sm:text-[20px] text-[18px] text-white">
            {title}
          </h2>
            <p className="mt-[18px] font-semibold sm:text-[20px] text-[18px] text-white">{subtitle}</p>
          <p className="font-normal text-[14px] leading-[20.16px] text-white whitespace-pre-line ">
            {description}
          </p>
        </motion.div>
    </motion.div>
  )
}

export default PackCards;