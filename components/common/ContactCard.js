import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import React from "react";
import Image from "next/image";
import { IoCall, IoMail } from "react-icons/io5"; //https://react-icons.github.io/react-icons/icons/io5/
import { FaCheck } from "react-icons/fa6"; //https://react-icons.github.io/react-icons/icons/fa6/

// 个人微信的弹窗

export default function MyModal() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const copyMobileText = <span className="flex gap-2 justify-center items-center"><IoCall /> 复制我的手机号</span>
  const copyMailText = <span className="flex gap-2 justify-center items-center"><IoMail /> 复制我的 Email</span>
  const copyMobileTextSucceed = <span className="flex gap-2 justify-center items-center"><FaCheck /> 已复制手机号</span>
  const copyMailTextSucceed = <span className="flex gap-2 justify-center items-center"><FaCheck /> 已复制 Email</span>
  const [buttonCopyMobile, setButtonCopyMobile] = React.useState(copyMobileText);
  const [buttonCopyEmail, setButtonCopyEmail] = React.useState(copyMailText);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
    setButtonCopyMobile(copyMobileText);
    setButtonCopyEmail(copyMailText);
  }
  

  const copyMobile = () => {
    navigator.clipboard.writeText("18925001685")
      .then(() => {
        setButtonCopyMobile(copyMobileTextSucceed);
        setButtonCopyEmail(copyMailText);
      })
      .catch(err => {
        console.error("Could not copy text: ", err);
      });
  };
  const copyEmail = () => {
    navigator.clipboard.writeText("lrdbuff@gmail.com")
      .then(() => {
        setButtonCopyMobile(copyMobileText);
        setButtonCopyEmail(copyMailTextSucceed);
      })
      .catch(err => {
        console.error("Could not copy text: ", err);
      });
  };
  
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
            <Dialog.Panel className="w-64 sm:w-72  max-w-md transform overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 text-center text-lg sm:text-[22px] shadow-xl transition-all">
              <div className="flex flex-col gap-3">
                <div className={`relative flex w-full aspect-square rounded-md select-none h-full max-h-[35vh] img-loading-bg ${isLoaded ? '' : 'img-loading-spin'}`}>
                  <Image
                    // 项目图片
                    src="https://lrdim.oss-cn-shenzhen.aliyuncs.com/qr-code.png"
                    alt="微信号：18925001685"
                    className="object-contain rounded-md"
                    onLoad={() => setIsLoaded(true)}
                    onError={() => setIsLoaded(true)}
                    // fill
                    // sizes="100vw"
                    width={240}
                    height={240}
                     />
                </div>
                <Dialog.Title
                  as="h3"
                  className="font-semibold leading-relaxed"
                >
                  <span className="hidden sm:block">扫一扫加我微信</span>
                  <span className="sm:hidden">长按识别加我微信</span>
                </Dialog.Title>
                <p className="p-0 m-0 text-tertiary text-sm">或</p>
                <button onClick={copyMobile} className="w-full m-0 text-tertiary text-base flex-1 btn-base text-secondary btn-md sm:btn-lg bg-color border dark:border-black border-neutral-200 dark:hover:border-neutral-800 sm:hover:bg-neutral-200 transition-colors">{buttonCopyMobile}</button>
                <button onClick={copyEmail} className="m-0 text-tertiary text-base flex-1 btn-base text-secondary btn-md sm:btn-lg bg-color border dark:border-black border-neutral-200 dark:hover:border-neutral-800 sm:hover:bg-neutral-200 transition-colors">{buttonCopyEmail}</button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
</>)
}