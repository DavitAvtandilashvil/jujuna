import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";

/* eslint-disable react/prop-types */
function OneCocktail({ title, image, ingredients, size }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("vissible");
      slideControls.start("vissible");
    }
  }, [isInView, mainControls, slideControls]);
  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          vissible: { opacity: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="bg-[#000] pt-[30px] pr-[15px] md:h-[520px]"
      >
        <div className="flex items-start mt-[26px] gap-[15px] lg:mt-[0px]">
          <div>
            <img
              src={image}
              alt="cocktail"
              className={`w-[186px] h-[276px] ${
                size === "small"
                  ? "xl:w-[301px] xl:h-[447px]"
                  : "xl:w-[501px] xl:h-[481px]"
              } `}
            />
          </div>

          <div className="md:m-auto">
            <h2 className="text-color-primary text-[32px] text-center font-tommaso font-normal lg:text-[40px]">
              {title}
            </h2>
            <div
              className={`grid grid-cols-[1fr_1fr] gap-x-[30px] md:gap-x-[40px] gap-y-[31px] mt-[15px] ${
                size === "small" ? "md:grid-cols-[1fr]" : ""
              }`}
            >
              {ingredients.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col gap-[16px] text-[14px] text-color-primary border-b-[1px] border-[#848282] lg:text-[20px]"
                  >
                    <p className="text-color-primary">{item.product}</p>
                    <p className="opacity-60">{item.quantity}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default OneCocktail;
