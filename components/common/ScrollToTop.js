import { IoArrowUp } from "react-icons/io5"; //https://react-icons.github.io/react-icons/icons?name=io5
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function ScrollToTopButton() {
  const { t } = useTranslation("components");
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0 });
  }

  const [buttonClass, setButtonClass] = useState("hidden");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    if (window.pageYOffset > 400) {
      setButtonClass("hidden sm:block");
    } else {
      setButtonClass("hidden");
    }
  }

  return (
    <>
      <button
        onClick={scrollToTop}
        className={` fixed ${buttonClass} right-4 bottom-4 ring-default sm:hover:text-primary active:text-primary btn-base btn-icon text-tertiary bg-neutral-100 dark:bg-neutral-800 transition-colors `}
      >
        <span className="sr-only">{t("ScrollToTop.button_aria")}</span>
        <IoArrowUp className="text-xl" aria-label={t("ScrollToTop.button_aria")} title={t("ScrollToTop.button_aria")} />
      </button>
    </>
  );
}
