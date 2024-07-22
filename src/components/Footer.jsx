import { useTranslation } from "react-i18next";
import logo from "/images/logo.svg";
import light from "/images/icon-light-theme.svg";
import dark from "/images/icon-dark-theme.svg";
import instagram from "/images/instagram.svg";
import facebook from "/images/facebook.svg";
import linkedin from "/images/linkedin.svg";
import { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";
import { useWine } from "../context/useWine";

function Footer() {
  const { t } = useTranslation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  const { isDarkMode, setIsDarkMode } = useWine();

  useEffect(() => {
    if (isInView) {
      mainControls.start("vissible");
    }
  }, [isInView, mainControls]);
  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          vissible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="py-[20px] pr-[10px] pl-[30px] bg-[#000] xl:pr-[82px] xl:pl-[80px]"
      >
        <div className="flex justify-between">
          <div className="flex gap-[20px] lg:gap-[64px]">
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                vissible: { opacity: 1 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="bg-[#ba92ed] w-[45px] h-[45px] flex items-center justify-center rounded-full lg:mt-[15px]"
            >
              <img src={logo} alt="logo" className="w-[31.5px] h-[31.5px]" />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                vissible: { opacity: 1 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 1.6, delay: 0.75 }}
              className="flex flex-col gap-[12px] text-color-primary text-[12px] lg:text-[16px]"
            >
              <p>{t("phone")}</p>
              <p>+995579760006</p>
              <p>{t("email")}</p>
              <p>Hello@jujuna.ge</p>
              <p>{t("address")}</p>
              <p>{t("addressText")}</p>
            </motion.div>
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              vissible: { opacity: 1 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 2.6, delay: 0.75 }}
            className="flex flex-col justify-end gap-[10px] items-end md:flex-col md:justify-end md:gap-[17px]"
          >
            <div className="flex gap-[2px] lg:gap-[10px]">
              <a href="https://www.instagram.com/">
                <img
                  src={instagram}
                  alt="instagram"
                  className="lg:w-[24px] lg:h-[24px]"
                />
              </a>
              <a href="https://www.facebook.com/">
                <img
                  src={facebook}
                  alt="facebook"
                  className="lg:w-[24px] lg:h-[24px]"
                />
              </a>
              <a href="https://www.linkedin.com/feed/">
                <img
                  src={linkedin}
                  alt="linkedin"
                  className="lg:w-[24px] lg:h-[24px]"
                />
              </a>
            </div>

            <div className="hidden text-[10px] lg:text-[14px] text-[#908F8F] md:flex md:gap-[49px]">
              <p>{t("personal")}</p>
              <p>{t("safety")}</p>
            </div>

            <div>
              {!isDarkMode ? (
                <img
                  src={dark}
                  alt="dark"
                  onClick={() => setIsDarkMode(true)}
                  className="cursor-pointer"
                />
              ) : (
                <img
                  src={light}
                  alt="light"
                  onClick={() => setIsDarkMode(false)}
                  className="cursor-pointer"
                />
              )}
            </div>
          </motion.div>
        </div>
        <div className="text-[10px] text-[#908F8F] mt-[32px] flex justify-between md:hidden">
          <p>{t("personal")}</p>
          <p>{t("safety")}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default Footer;
