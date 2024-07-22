import { useTranslation } from "react-i18next";
import bottle from "/images/bottle1.png";
import { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";

function Bottle() {
  const { t } = useTranslation();

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
    <div id="bottle" ref={ref} className="relative">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          vissible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="bg-[#eaeaea] dark:bg-[#000] xl:px-[80px]"
      >
        <h2 className="ml-[20px] pt-[10px] text-[40px] text-color-black dark:text-color-primary font-tommaso font-normal lg:text-[64px]">
          {t("bottle")}
        </h2>

        <div className="border-y-2 border-[#613994] p-[14px] flex lg:gap-[77px] lg:p-[0px]">
          <div className="w-[50%] lg:w-[386px]">
            <img
              className="w-[205px] h-[255px] lg:w-[386px] lg:h-full"
              src={bottle}
              alt="bottle"
            />
            <p className="text-[16px] font-normal lg:hidden dark:text-color-primary">
              {t("bottleDescription")}
            </p>
          </div>
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              vissible: { opacity: 1 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="w-[50%] lg:w-[69%]"
          >
            <h2 className="text-[32px] font-tommaso text-center lg:text-left lg:text-[40px] dark:text-color-primary">
              {t("bottleTitle")}
            </h2>
            <div className="flex flex-col items-center gap-[10px] mt-[15px] w-[160px] m-auto lg:w-[100%] lg:items-start lg:flex-row lg:mt-[40px] lg:gap-[20px]">
              <div className="w-[160px] h-[68px] flex flex-col justify-center items-center bg-[#613994] text-color-primary text-[14px] rounded-[10px]">
                <p>{t("volume")}</p>
                <p>{t("volumeText")}</p>
              </div>

              <div className="w-[160px] h-[68px] flex flex-col justify-center items-center bg-[#613994] text-color-primary text-[14px] rounded-[10px]">
                <p>{t("alcohol")}</p>
                <p>11%</p>
              </div>

              <div className="w-[160px] h-[68px] flex flex-col justify-center items-center bg-[#613994] text-color-primary text-[14px] rounded-[10px]">
                <p>{t("naturalGas")}</p>
                <p>2.5 {t("bar")}</p>
              </div>
            </div>

            <p className="hidden lg:block text-[16px] font-normal lg:text-[24px] lg:mt-[50px] dark:text-color-primary">
              {t("bottleDescription")}
            </p>

            <div className="flex justify-end w-[160px] m-auto mt-[15px] lg:w-[100%] lg:mt-[46px]">
              <div className="w-[61px] h-[58px] border-[1px] border-[#613994] self-end rounded-[10px] flex justify-center items-center lg:w-[114px] lg:h-[108px] lg:bg-[#613994] lg:text-color-primary dark:text-color-primary">
                <p className="text-[12px] lg:text-[24px]">4.5₾</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Bottle;
