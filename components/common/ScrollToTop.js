import { IoArrowUp } from "react-icons/io5"; //https://react-icons.github.io/react-icons/icons?name=io5
import { useState, useEffect } from "react";

export default function ScrollToTopButton() {
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
      setButtonClass("block");
    } else {
      setButtonClass("hidden");
    }
  }

  return (
    <>
      <button
        onClick={scrollToTop}
        className={` fixed ${buttonClass} bg-color right-8 bottom-8 sm:right-12 sm:bottom-10 ring-default sm:hover:text-primary active:text-primary btn-base btn-icon border border-neutral-200 dark:border-neutral-800 transition-colors `}
      >
        <span className="sr-only">回到顶部</span>
        <IoArrowUp className="text-xl" title="回到顶部" />
      </button>
    </>
  );
}
