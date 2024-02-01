import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { Menu, Transition } from "@headlessui/react";
import { IoLanguage } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const SwitchLanguages = () => {
  const router = useRouter();
  const changeLanguage = (locale) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("MY_LANGUAGE", locale); // 更新 localStorage 中的语言设置
      document.documentElement.lang = locale; // 更新 html 的 lang 属性

      // 使用浅层路由进行语言切换，避免页面刷新
      router.push(router.pathname, router.asPath, { shallow: true });
    }
  };

  // 组件挂载时读取 localStorage 中的语言设置，并更新页面
  React.useEffect(() => {
    const savedLocale = localStorage.getItem("MY_LANGUAGE") || "zh-Hans"; // 默认为 'en'
    changeLanguage(savedLocale);
  }, []);

  const languages = [
    { id: "zh-Hans", value: "中文（简体）" },
    { id: "zh-Hant", value: "中文（繁体）" },
    { id: "en", value: "英语" },
  ];

  const { t } = useTranslation("common");

  return (
    <div>
      <Menu as="div" className="relative text-left ">
        <div>
          <Menu.Button
            className="flex gap-1 items-center text-tertiary hover:text-primary"
            title={t('common.footer.switchLanguages_alt')}
          >
            <IoLanguage className="text-base" />
            <span className="text-sm">{t('common.footer.switchLanguages')}</span>
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
          <Menu.Items className="absolute top-[-9rem] right-[-2.4rem] rtl:left-0 rtl:right-auto rounded-xl bg-color shadow-lg border border-neutral-200 dark:border-2 dark:border-neutral-800 ">
            <div className="p-2 w-fit min-w-[120px] whitespace-nowrap flex flex-col gap-1">
              {languages.map((language) => (
                <Menu.Item key={language.id} as={Fragment}>
                  {({ active }) => (
                    <button
                      type="button"
                      onClick={() => changeLanguage(language.id)}
                      className={` btn-base text-sm hover:text-primary focus:text-primary btn-md cursor-pointer px-2 py-2 ${
                        active
                          ? "text-primary bg-neutral-200 dark:bg-neutral-800"
                          : "text-secondary"
                      }`}
                    >
                      {language.value}
                    </button>
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
