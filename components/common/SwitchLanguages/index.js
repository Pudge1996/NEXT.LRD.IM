import React, { Fragment } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import { Menu, Transition } from "@headlessui/react";
import { IoLanguage } from "react-icons/io5";
import Cookie from 'js-cookie';


// import { IoMenu } from "react-icons/io5"; //https://react-icons.github.io/react-icons/icons?name=io5

import styles from "./styles.module.css";

const SwitchLanguages = () => {
  // const router = useRouter();
  // const changeLanguage = (locale) => {
  //   // 根据 Cookies 改当前语言
  //   Cookie.set('NEXT_LOCALE', locale, { expires: 365 });
  
  //   // 如果选择的语言是默认语言，则不需要在URL中添加语言前缀
  //   const newAsPath = locale === router.defaultLocale ? router.asPath : `/${locale}${router.asPath}`;
    
  //   router.replace(router.pathname, newAsPath, { locale, shallow: true });
  // };
  const router = useRouter();

  // const changeLanguage = (locale) => {
  //   Cookie.set('NEXT_LOCALE', locale, { expires: 365 });

  //   // 这里我们只更新locale状态，不改变URL
  //   if (router.locale !== locale) {
  //     router.push(router.pathname, router.asPath, {
  //       // locale: locale,
  //       shallow: true,
  //     });
  //   }
  // };
  const changeLanguage = (locale) => {
    // 存储 locale 到 localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('MY_LANGUAGE', locale);
    }
  
    // 只更新 locale 状态，不改变 URL
    // if (router.locale !== locale) { 
      router.push(router.pathname, router.asPath, {
        shallow: true,
      });
    // }
  };
  


  const languages = [
    { id: "zh-Hans", value: "简体中文" },
    { id: "en", value: "英语" },
  ];
  return (
    <div>
      <Menu as="div" className="relative text-left ">
        <div>
          <Menu.Button className="flex gap-1 items-center text-tertiary hover:text-primary" title="切换语言">
            <IoLanguage className="text-base" />
            <span className="text-sm">语言</span>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95 hidden"
        >
          <Menu.Items className="absolute top-[-6.5rem] right-[-2.4rem] rtl:left-0 rtl:right-auto rounded-xl bg-color shadow-lg border border-neutral-200 dark:border-2 dark:border-neutral-800 ">
            <div className="p-2 w-fit min-w-[120px] whitespace-nowrap flex flex-col gap-1">
              {languages.map((language) => (
                <Menu.Item key={language.id} as={Fragment}>
                  {({ active }) => (
                    <button type="button" onClick={() => changeLanguage(language.id)}
                      className={` btn-base text-sm hover:text-primary focus:text-primary btn-md cursor-pointer px-2 py-2 ${
                        active
                          ? "text-primary bg-neutral-200 dark:bg-neutral-800"
                          : "text-secondary"
                      }`}
                    >
                      {language.value}
                    </button >
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default SwitchLanguages;
