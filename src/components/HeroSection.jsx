import { useTranslation } from "react-i18next";
import jujuna1Mobile from "/images/jujuna-1-mobile.png";
import jujuna2Mobile from "/images/jujuna-2-mobile.png";
import jujuna1Desktop from "/images/jujuna-1-desktop.png";
import jujuna2Desktop from "/images/jujuna-2-desktop.png";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function HeroSection() {
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
    <div className="relative" ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          vissible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="vissible"
        transition={{ duration: 0.5, delay: 0.25 }}
        className="bg-[linear-gradient(249deg,_#A583D1_22.95%,_#724AA4_46.44%,_#1E122E_93.06%)]  dark:bg-[linear-gradient(249deg,_#000.95%,_#000_46.44%,_#000_93.06%)] relative"
      >
        <motion.div
          className="pt-[30px] pr-[36px] pb-[126px] pl-[23px] xl:pt-[77px] xl:pb-[200px] xl:pl-[80px]"
          variants={{
            hidden: { opacity: 0 },
            vissible: { opacity: 1 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.6, delay: 0.75 }}
        >
          <h2 className="text-color-primary text-[48px] font-tommaso font-normal xl:text-[72px]">
            {t("title")}
          </h2>
          <p className="text-color-primary/60 text-[36px] font-tommaso font-normal mt-[24px] xl:mt-[48px] xl:text-[48px] xl:w-[520px]">
            {t("wineText")}
          </p>
          <p className="text-color-primary mt-[24px] text-[20px] font-normal xl:mt-[48px] xl:text-[24px] xl:w-[769px]">
            {t("wineDescription")}
          </p>
        </motion.div>

        <div className="absolute bottom-0 right-0 flex space-x-[-170px] xl:space-x-[-480px]  xl:justify-end">
          <img
            src={jujuna1Mobile}
            alt="bottle1"
            className="object-cover xl:hidden"
          />
          <img
            src={jujuna2Mobile}
            alt="bottle2"
            className="object-cover xl:hidden"
          />

          <img
            src={jujuna1Desktop}
            alt="bottle1"
            className="hidden xl:block object-cover"
          />
          <img
            src={jujuna2Desktop}
            alt="bottle2"
            className="hidden xl:block object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default HeroSection;
