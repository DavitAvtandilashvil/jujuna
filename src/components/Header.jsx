import { motion, useCycle, AnimatePresence, MotionConfig } from "framer-motion";
import logo from "/images/logo.svg";
import georgianLanguage from "/images/georgia-language-flag.png";
import englishLanguage from "/images/english-language-flag.svg";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

function Header() {
  const [activeFlag, setActiveFlag] = useState("");
  const [mobileNav, toggleMobileNav] = useCycle(false, true);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    async function getCountry() {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        if (data.country_code === "GE") {
          i18n.changeLanguage("ge");
        } else {
          i18n.changeLanguage("en");
        }
      } catch (error) {
        console.log(error);
      }
    }
    getCountry();
  }, [i18n]);

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
    setActiveFlag(lng);
  };

  return (
    <header className="bg-[#000] pt-[41px] pl-[25px] pb-[10px] pr-[77.5px] sticky top-0 lg:py-[11px] z-10">
      <div className="flex justify-between items-center container mx-auto">
        <div className="bg-logoColor-circle w-[45px] h-[45px] flex items-center justify-center rounded-full">
          <img src={logo} alt="logo" />
        </div>
        <motion.p
          className={`text-[24px] text-color-primary font-normal font-tommaso md:hidden ${
            mobileNav ? " relative z-10" : ""
          }`}
          onClick={() => toggleMobileNav()}
        >
          {!mobileNav ? (
            <motion.span>{t("menu")}</motion.span>
          ) : (
            <motion.span className="absolute top-[-30px] right-[-40px]">
              x
            </motion.span>
          )}
        </motion.p>

        <div className="hidden md:flex md:flex-nowrap  md:gap-[40px] md:w-[340px] md:overflow-x-auto lg:w-auto lg:flex text-color-primary lg:gap-[20px] xl:gap-[40px] items-center ">
          <a
            href="#about-us"
            className="text-textColor-primary text-[16px] font-norma whitespace-nowrap hover:text-[#613994]"
          >
            {t("aboutUs")}
          </a>
          <a
            href="#news"
            className="text-textColor-primary text-[16px] font-normal whitespace-nowrap hover:text-[#613994]"
          >
            {t("news")}
          </a>
          <a
            href="#bottle"
            className="text-textColor-primary text-[16px] font-normal whitespace-nowrap hover:text-[#613994]"
          >
            {t("bottle")}
          </a>
          <a
            href="#cocktails"
            className="text-textColor-primary text-[16px] font-normal whitespace-nowrap hover:text-[#613994]"
          >
            {t("cocktails")}
          </a>
          <a
            href="#mobile-bar"
            className="text-textColor-primary text-[16px] font-normal whitespace-nowrap hover:text-[#613994]"
          >
            {t("mobileBar")}
          </a>
          <a
            href="#contact"
            className="text-textColor-primary text-[16px] font-normal whitespace-nowrap hover:text-[#613994]"
          >
            {t("contact")}
          </a>
        </div>

        <div className="hidden md:flex lg:flex gap-[18px]">
          <img
            onClick={() => changeLang("ge")}
            src={georgianLanguage}
            alt="georgian-language"
            className={`cursor-pointer  ${
              activeFlag === "ge" ? "scale-[1.1]" : ""
            }`}
          />
          <img
            onClick={() => changeLang("en")}
            src={englishLanguage}
            alt="english-language"
            className={`cursor-pointer ${
              activeFlag === "en" ? "scale-[1.1]" : ""
            }`}
          />
        </div>
      </div>

      <AnimatePresence>
        {mobileNav && (
          <MotionConfig
            transition={{
              type: "spring",
              bounce: 0.09,
            }}
          >
            <motion.div
              key="mobile-nav"
              variants={{
                open: {
                  x: "0%",
                  transition: {
                    type: "spring",
                    bounce: 0.09,
                    when: "beforeChildren",
                  },
                },
                closed: {
                  x: "-100%",
                  transition: {
                    type: "spring",
                    bounce: 0.09,
                    when: "afterChildren",
                  },
                },
              }}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 bg-[#000]/95 space-y-10 p-6 w-full mx-auto flex flex-col justify-center text-color-primary lg:hidden"
            >
              <motion.div
                className=""
                variants={{
                  open: {
                    y: "0%",
                    opacity: 1,
                  },
                  closed: {
                    y: "25%",
                    opacity: 0,
                  },
                }}
              >
                <ul className="space-y-4">
                  <li>
                    <a
                      onClick={() => toggleMobileNav()}
                      href="#about-us"
                      className="no-underline text-[20px] font-normal"
                    >
                      {t("aboutUs")}
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => toggleMobileNav()}
                      href="#news"
                      className="no-underline text-[20px] font-normal"
                    >
                      {t("news")}
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => toggleMobileNav()}
                      href="#bottle"
                      className="no-underline text-[20px] font-normal"
                    >
                      {t("bottle")}
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => toggleMobileNav()}
                      href="#cocktails"
                      className="no-underline text-[20px] font-normal"
                    >
                      {t("cocktails")}
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => toggleMobileNav()}
                      href="#mobile-bar"
                      className="no-underline text-[20px] font-normal"
                    >
                      {t("mobileBar")}
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => toggleMobileNav()}
                      href="#contact"
                      className="no-underline text-[20px] font-normal"
                    >
                      {t("contact")}
                    </a>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                className="w-full bg-white h-px border"
                variants={{
                  open: {
                    y: "0%",
                    opacity: 1,
                  },
                  closed: {
                    y: "25%",
                    opacity: 0,
                  },
                }}
              ></motion.div>
              <motion.div
                variants={{
                  open: {
                    y: "0%",
                    opacity: 1,
                  },
                  closed: {
                    y: "25%",
                    opacity: 0,
                  },
                }}
              >
                <ul className="flex items-center gap-x-5 justify-center">
                  <li>
                    <div
                      className="w-10 h-10 rounded-lg bg-gray-300 flex justify-center items-center"
                      onClick={() => {
                        changeLang("ge");
                        toggleMobileNav();
                      }}
                    >
                      <img src={georgianLanguage} alt="georgian-language" />
                    </div>
                  </li>
                  <li>
                    <div
                      className="w-10 h-10 rounded-lg bg-gray-300 flex justify-center items-center"
                      onClick={() => {
                        changeLang("en");
                        toggleMobileNav();
                      }}
                    >
                      <img src={englishLanguage} alt="english-language" />
                    </div>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </MotionConfig>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
