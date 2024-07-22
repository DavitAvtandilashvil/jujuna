import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import Loader from "./Loader";

function Contact() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("vissible");
    }
  }, [isInView, mainControls]);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    if (!number || !email || !message) return;
    setIsLoading(true);

    emailjs
      .sendForm("service_n9ppz2a", "template_ijh63qv", form.current, {
        publicKey: "oKHoKKs61Nn66obRo",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setNumber("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      )
      .finally(() => setIsLoading(false));
  };

  return (
    <div id="contact" ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          vissible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="bg-[url('/images/banner1.png')] py-[26px] px-[20px] xl:pt-[112px] xl:pb-[73px] xl:pl-[80px] flex gap-[20px] md:gap-[40px] xl:gap-[104px]"
      >
        <form
          className="flex flex-col gap-[12px] w-[209px] md:w-[328px]"
          ref={form}
          onSubmit={sendEmail}
        >
          <div>
            <p className="text-color-primary text-[12px] lg:text-[20px]">
              {t("phone")}
            </p>
            <input
              name="from_number"
              type="number"
              className="text-[10px] xl:text-[12px] w-[100%] pl-[10px] py-[14.5px] mt-[4px] bg-[#000] text-color-primary rounded-[10px] border-none outline-none"
              placeholder={t("phonePlaceholder")}
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>

          <div>
            <p className="text-color-primary text-[12px] lg:text-[20px]">
              {t("email")}
            </p>
            <input
              name="from_email"
              type="email"
              className="text-[10px] xl:text-[12px] w-[100%] pl-[10px] py-[14.5px] mt-[4px] bg-[#000] text-color-primary rounded-[10px] border-none outline-none"
              placeholder={t("emailPlaceholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <p className="text-color-primary text-[12px] lg:text-[20px]">
              {t("message")}
            </p>
            <textarea
              name="message"
              className="text-[10px] xl:text-[12px] w-[100%] h-[98px] pl-[10px] py-[14.5px] mt-[4px] bg-[#000] text-color-primary rounded-[10px] border-none outline-none"
              placeholder={t("messagePlaceholder")}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          {isLoading ? (
            <Loader />
          ) : (
            <button className="text-color-primary text-[16px] w-[130px] h-[32px] bg-[#613994] rounded-[50px] self-end xl:w-[126px] xl:h-[49px]">
              {t("send")}
            </button>
          )}
        </form>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            vissible: { opacity: 1 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="text-color-primary text-[12px] md:text-[16px] xl:text-[24px] font-normal mt-[19px] w-[160px] md:w-[380px] xl:w-[685px] flex flex-col gap-[9px]"
        >
          <p>{t("emailText")}</p>
          <p>{t("emailDescription")}</p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Contact;
