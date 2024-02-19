import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import React from "react";
import { useTranslation } from 'next-i18next'


export default function ContactCard() {
  const { t } = useTranslation("components");
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
 
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (<>
    <button
      type="button"
      onClick={openModal}
      className="w-full h-full absolute bg-transparent inset-0 ring-default"
      aria-label={t("ContactCard.button")}
      title={t("ContactCard.button_title")}
    >
    </button>

  <Transition appear show={isOpen} as={Fragment}>
    <Dialog as="div" className="relative" onClose={closeModal}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black bg-opacity-20 dark:bg-opacity-80 z-50" />
      </Transition.Child>

      <div className="fixed inset-0 overflow-y-auto z-[51] ">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-64 sm:w-72  max-w-md transform overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 text-center text-lg sm:text-[22px] shadow-xl transition-all">
              <div className="flex flex-col gap-3">
                <div className={`relative flex w-full aspect-square rounded-md select-none h-full max-h-[35vh] img-loading-bg ${isLoaded ? '' : 'img-loading-spin'}`}>
                  
                </div>
                
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
</>)
}