import React from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import TableContents from "/components/blog/TableContents";
import { useTranslation } from 'next-i18next'

export default function Example() {
  const { t } = useTranslation("components");
  const [open, setOpen] = React.useState(false);
  function openModal() {
    setOpen(true);
  }

  return (
    <>
      <button
        type="button"
        role="button"
        onClick={openModal}
        className="w-full h-full absolute  bg-transparent inset-0 ring-default"
        aria-label={t("blog.TableContents_Mobile.icon")}
        title={t("blog.TableContents_Mobile.icon_title")}
      ></button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
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
              <div className="pointer-events-none fixed items-end inset-y-0 right-0 flex w-[424px] max-w-[80vw]">
                <Transition.Child
                  as={Fragment}
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
                          {t("blog.TableContents_Mobile.dialogHeading")}
                        </Dialog.Title>
                      </div>
                      <div role="menubar" className="relative pt-2 pb-4 flex-1 px-6 max-h-[50vh] sm:max-h-[70vh]  overflow-auto">
                        {/* Replace with your content */}
                        <TableContents />
                        {/* /End replace */}
                      </div>

                      {/* 关闭按钮 */}
                      <div className="py-4 sm:pb-6 px-6">
                        <button
                          type="button"
                          role="button"
                          className="min-w-full sm:w-max btn-base text-base btn-md bg-neutral-100 dark:bg-neutral-900 sm:hover:bg-neutral-200 relative text-center whitespace-nowrap"
                          onClick={() => setOpen(false)}
                          aria-label={t("blog.TableContents_Mobile.close")}
                          title={t("blog.TableContents_Mobile.close_title")}
                        >
                          <span className="sr-only">{t("blog.TableContents_Mobile.close_title")}</span>
                          {t("blog.TableContents_Mobile.close")}
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
    </>
  );
}