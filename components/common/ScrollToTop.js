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
        <span className="sr-only">回到顶部</span>
        <IoArrowUp className="text-xl" title="回到顶部" />
      </button>
    </>
  );
}
