import { useTranslation } from "react-i18next";
import OneCocktail from "./OneCocktail";
import cocktail1 from "/images/cocktail1.png";
import cocktail2 from "/images/cocktail2.png";
import cocktail3 from "/images/cocktail3.png";
import { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";

function Cocktails() {
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
    <div id="cocktails" ref={ref}>
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
        <h2 className="ml-[22px] pt-[15px] text-[40px] font-tommaso font-normal text-color-black dark:text-color-primary lg:text-[64px]">
          {t("cocktail")}
        </h2>

        <div className="grid grid-cols-[1fr] md:gap-[22px] md:grid-cols-[1fr_1fr]">
          <div className="md:col-span-2">
            <OneCocktail
              title={t("AperolSpritz")}
              image={cocktail1}
              size="big"
              ingredients={[
                { product: t("Aperol"), quantity: `50 ${t("ml")}` },
                {
                  product: t("orange"),
                  quantity: `1 ${t("piece")}`,
                },
                {
                  product: t("ice"),
                  quantity: t("fullGlass"),
                },
                {
                  product: t("tonic"),
                  quantity: `20 ${t("mg")}`,
                },
                {
                  product: t("title"),
                  quantity: `150 ${t("ml")}`,
                },
              ]}
            />
          </div>

          <div className="md:col-span-1">
            <OneCocktail
              title={t("BerriesZhuzhuna")}
              image={cocktail2}
              size="small"
              ingredients={[
                { product: t("ice"), quantity: t("halfGlass") },
                {
                  product: t("GrenadineSyrup"),
                  quantity: `10 ${t("ml")}`,
                },
                {
                  product: t("berries"),
                  quantity: `70 ${t("gr")}`,
                },
                {
                  product: t("title"),
                  quantity: `150 ${t("ml")}`,
                },
              ]}
            />
          </div>

          <div className="md:col-span-1">
            <OneCocktail
              title={t("mimosa")}
              image={cocktail3}
              size="small"
              ingredients={[
                { product: t("ice"), quantity: t("halfGlass") },
                {
                  product: t("orangeFresh"),
                  quantity: `50 ${t("ml")}`,
                },
                {
                  product: t("title"),
                  quantity: `150 ${t("ml")}`,
                },
              ]}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Cocktails;
