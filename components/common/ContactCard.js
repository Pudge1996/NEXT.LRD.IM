import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Image from "next/image";
// 个人微信的弹窗

export default function MyModal() {
  // const [isLoaded, setIsLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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
      aria-label="联系方式"
      title="联系方式"
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
            <Dialog.Panel className="w-64 sm:w-72  max-w-md transform overflow-hidden rounded-xl bg-color dark:border dark:border-neutral-800 p-6 text-center text-lg sm:text-[22px] shadow-xl transition-all">
              <div className="flex flex-col gap-3">
                <div className={` relative flex w-full aspect-square rounded-md select-none h-full max-h-[35vh] img-loading-bg`}>
                  <Image
                    // 项目图片
                    src="https://lrdim.oss-cn-shenzhen.aliyuncs.com/qr-code.png"
                    alt="微信号：18925001685"
                    className="object-contain rounded-md"
                    // onLoad={() => setIsLoaded(true)}
                    // onError={() => setIsLoaded(true)}
                    fill
                    sizes="100vw" />
                </div>
                <Dialog.Title
                  as="h3"
                  className="font-semibold leading-relaxed"
                >
                  <span className="hidden sm:block">扫一扫加我微信</span>
                  <span className="sm:hidden">长按识别加我微信</span>
                </Dialog.Title>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
</>)
}