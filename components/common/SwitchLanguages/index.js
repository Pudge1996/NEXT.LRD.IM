import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { Menu, Transition } from "@headlessui/react";
import { IoLanguage } from "react-icons/io5";
import { useTranslation } from 'next-i18next';

const SwitchLanguages = () => {

  const { t } = useTranslation("common");

  const router = useRouter();
  const { i18n } = useTranslation();
  const languages = [
    { id: "zh-Hans", value: "中文（简体）" },
    { id: "zh-Hant", value: "中文（繁體）" },
    { id: "en", value: "English" },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng).then(() => {
        document.documentElement.lang = lng;
        // router.push(router.pathname, router.asPath, { shallow: true });
        
    });
};

  return (
    <div>
      <Menu as="div" className="relative text-left ">
        <div>
          <Menu.Button
            className="flex gap-1 items-center text-tertiary hover:text-primary"
            title={t('common.footer.switchLanguages_title')}
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
          <Menu.Items className="absolute top-[-9rem] right-[-1.2rem] rtl:left-0 rtl:right-auto rounded-xl bg-color shadow-lg border border-neutral-200 dark:border-2 dark:border-neutral-800 ">
            <div role="menubar" className="p-2 w-fit min-w-[120px] whitespace-nowrap flex flex-col gap-1">
              {languages.map((language) => (
                <Menu.Item key={language.id} as={Fragment}>
                  {({ active }) => (
                    <button
                      type="button"
                      role="menuitemradio"
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