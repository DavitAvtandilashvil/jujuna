import { useTranslation } from "react-i18next";
import OneNews from "./OneNews";
import pour from "/images/pour.png";
import grape from "/images/grape.png";
import glasswine from "/images/glasswine.png";
import { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";

function News() {
  const { t } = useTranslation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("vissible");
    }
  }, [isInView, mainControls]);
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
        className="bg-[#eaeaea] dark:bg-[#000] pt-[20px] px-[15px] xl:px-[80px]"
        id="news"
      >
        <h2 className="text-[48px] text-color-black font-tommaso font-normal dark:text-color-primary">
          {t("news")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[20px] lg:grid-cols-3">
          <div>
            <OneNews
              image={pour}
              date={t("date1")}
              title={t("tasting")}
              description={t("tastingDescripion")}
              buttonText={t("learnMore")}
              buttonColor="#000"
              bgColor="#613994"
            />
          </div>

          <div className="hidden md:block">
            <OneNews
              image={grape}
              date={t("date2")}
              title={t("vintage")}
              description={t("vintageDescription")}
              buttonText={t("learnMore")}
              buttonColor="#613994"
              bgColor="#000"
            />
          </div>

          <div className="hidden md:block">
            <OneNews
              image={glasswine}
              date={t("date3")}
              title={t("wineEvening")}
              description={t("wineEveningDescription")}
              buttonText={t("learnMore")}
              buttonColor="#000"
              bgColor="#613994"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default News;
