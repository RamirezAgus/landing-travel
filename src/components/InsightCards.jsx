import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const InsightCards = ({ imgUrl, title, description, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 1)}
      className="flex md:flex-row flex-col gap-4 items-center"
    >
      <img
        src={imgUrl}
        alt="insight-1"
        className="md:w-[270px] md:h-[200px] w-full h-[200px] rounded-[32px] object-cover flex-shrink-0"
      />
      <div className="w-full flex justify-between items-center">
        <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
          <h4 className="text-blue font-semibold lg:text-[42px] text-[26px]">{title}</h4>
          <p className="text-blue mt-[16px] font-normal lg:text-[20px] text-[14px]">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default InsightCards;
