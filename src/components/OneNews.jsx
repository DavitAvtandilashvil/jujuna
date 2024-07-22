import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

/* eslint-disable react/prop-types */
function OneNews({
  image,
  date,
  title,
  description,
  buttonText,
  buttonColor,
  bgColor,
}) {
  const ref = useRef(null);
  const mainControls = useAnimation();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      mainControls.start("vissible");
    }
  }, [isInView, mainControls]);
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        vissible: { opacity: 1 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.6, delay: 0.75 }}
      ref={ref}
    >
      <div className="flex flex-col mt-[33px]">
        <div className="w-full h-[347px]">
          <img className="w-full h-full" src={image} alt="bottle-1" />
        </div>
        <div
          className={`flex flex-col px-[20px] py-[15px] bg-[${bgColor}] text-color-primary h-[250px] justify-between`}
        >
          <p className="text-[14px]  font-normal">{date}</p>
          <h2 className="text-[24px] font-normal">{title}</h2>
          <p className="text-[16px] font-normal">{description}</p>
          <button
            className={`w-[130px] h-[32px] text-[16px] font-normal bg-[${buttonColor}] rounded-[50px] self-end xl:w-[126px] xl:h-[49px]`}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default OneNews;
