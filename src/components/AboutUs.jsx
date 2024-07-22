import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

function AboutUs() {
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
    <div ref={ref} className="relative">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          vissible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="bg-[url('/images/marani.png')] py-[24px] pr-[63px] pl-[20px] xl:pt-[70px] xl:pl-[80px] xl:pb-[37px]"
        id="about-us"
      >
        <h2 className="text-color-primary text-[48px] font-tommaso font-normal">
          {t("aboutUs")}
        </h2>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            vissible: { opacity: 1 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="xl:w-[928px] text-[16px] text-color-primary xl:text-[24px]"
        >
          <p className="mt-[32px] font-normal">{t("zhuzhunaText")}</p>
          <p className="mt-[15px] xl:mt-[25px] font-normal">
            {t("zhuzhunaDescripion1")}
          </p>
          <p className="mt-[15px] xl:mt-[25px] font-normal">
            {t("zhuzhunaDescripion2")}
          </p>
          <p className="mt-[15px] xl:mt-[25px] font-normal">
            {t("zhuzhunaDescripion3")}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default AboutUs;
