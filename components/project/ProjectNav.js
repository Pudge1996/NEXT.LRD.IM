import React from "react";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { IoList } from "react-icons/io5"; //https://react-icons.github.io/react-icons/icons/io5/
import { useTranslation } from 'next-i18next'

export default function ProjectNav({ items }) {
  const { t } = useTranslation("components");
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  function openModal() {
    setOpen(true);
  }
  const [highlightedIndex, setHighlightedIndex] = React.useState(null);

  React.useEffect(() => {
    items.forEach((item, index) => {
      const element = document.querySelector(`[id="${item.imageLink}"]`);
      if (element) {
        window.addEventListener('scroll', () => {
          const rect = element.getBoundingClientRect();
          const distanceFromTop = rect.top;

          if (distanceFromTop < window.innerHeight / 2) {
            setHighlightedIndex(index);
          } else {
            if (highlightedIndex === index) {
              setHighlightedIndex(null);
            }
          }
        });
      }
    });
  }, [items, highlightedIndex]);
    
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      // 只在客户端渲染时访问window对象
      setIsSmallScreen(window.innerWidth <= 490);

      const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 490);
      };

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);


  if (isSmallScreen) {
    return (
      <>
        <div className="block z-[1] fixed bg-color right-6 bottom-6 sm:right-4 sm:bottom-16 ring-default text-tertiary sm:hover:text-primary active:text-primary btn-base btn-icon bg-neutral-100 dark:bg-neutral-800 transition-colors">
          <IoList className="text-xl" />
          <button
            type="button"
            role="button"
            onClick={openModal}
            className="w-full h-full absolute  bg-transparent inset-0 ring-default"
            aria-label={t("project.ProjectNav.icon")}
            title={t("project.ProjectNav.icon_title")}
          ></button>
          <Transition.Root show={open} as={React.Fragment}>
            <Dialog as="div" className="relative z-50" onClose={setOpen}>
              <Transition.Child
                as={React.Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-20 dark:bg-opacity-80 transition-opacity" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="pointer-events-none fixed items-end inset-y-0 right-0 flex w-[280px] max-w-[80vw]">
                    <Transition.Child
                      as={React.Fragment}
                      enter="transform transition ease-in-out duration-300"
                      enterFrom="translate-x-full"
                      enterTo="translate-x-0"
                      leave="transform transition ease-in-out duration-300"
                      leaveFrom="translate-x-0"
                      leaveTo="translate-x-full"
                    >
                      {/* Panel整体 */}
                      <Dialog.Panel role="menu" className="pointer-events-auto relative w-full m-4 mr-0 pr-4 sm:m-6 sm:mr-0 sm:pr-6">
                        {/* 弹窗 */}
                        <div className="flex h-fit max-h-[calc(100vh-6rem)] flex-col overflow-y-scroll bg-color dark:border dark:border-neutral-800 shadow-xl rounded-xl">
                          <div className="px-6 pt-6 pb-2">
                            <Dialog.Title
                              as="h5"
                              className="text-lg font-semibold text-primary"
                            >
                              {t("project.ProjectNav.dialogHeading")}
                            </Dialog.Title>
                          </div>
                          <div role="menubar" className="py-1 px-3 flex flex-col max-h-[50vh] sm:max-h-[70vh] gap-[6px] overflow-auto">
                            {/* Replace with your content */}
                            {items.map((item, index) => (
                              <li role="menuitemradio" className="flex btn-base rounded text-base transition-non" key={index}>
                                <Link
                                  href={`#${item.imageLink}`}
                                  className="ring-default py-1 px-3 w-full block hover:no-underline hover:text-primary elis-1 text-secondary"
                                >
                                  {item.buttonName}
                                </Link>
                              </li>
                            ))}
                            {/* /End replace */}
                          </div>

                          {/* 关闭按钮 */}
                          <div className="py-4 sm:pb-6 px-6">
                            <button
                              type="button"
                              role="button"
                              className="min-w-full sm:w-max btn-base text-base btn-md bg-neutral-100 dark:bg-neutral-900 sm:hover:bg-neutral-200 relative text-center whitespace-nowrap"
                              onClick={() => setOpen(false)}
                              title={t("project.ProjectNav.close_title")}
                            >
                              <span className="sr-only">{t("project.ProjectNav.close_title")}</span>
                              {t("project.ProjectNav.close")}
                            </button>
                          </div>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
        </div>
      </>
    );
  } else {
    return (
      <nav className="sticky top-[52px] z-[1] w-fit mx-auto">
        <ul className="w-fit flex items-center mt-0 sm:mt-4 justify-center gap-1 p-1 rounded-md bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 transition-colors">
          {items.map((item, index) => {
            return(
                <React.Fragment key={index}><li className="flex">
                <Link
                  href={`#${item.imageLink}`}
                  data-index={item.imageLink}
                  className={`${highlightedIndex === index ? 'text-primary font-medium bg-neutral-200 dark:bg-neutral-800' : 'text-tertiary sm:font-normal'} flex-1 text-center btn-base hover:text-primary hover:no-underline btn-md sm:btn-lg text-sm sm:py-1 sm:px-3 sm:rounded relative transition-colors`}
                >
                  {item.buttonName}
                </Link>
              </li>
                <div className="last:hidden w-[2px] h-[0.8em] rounded bg-neutral-200 dark:bg-neutral-800 transition-colors"></div>
                </React.Fragment>
            )
          })}
        </ul>
      </nav>
    );
  }
}