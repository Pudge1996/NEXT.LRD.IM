import React from 'react';
import { useTheme } from 'next-themes';
import { IoMoon, IoSunny } from "react-icons/io5"; //https://react-icons.github.io/react-icons/icons?name=io5
import { useTranslation } from "react-i18next";

// 切换浅色和深色模式的按钮

export default function DarkModeButton() {
  const { t } = useTranslation("common");
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();
  React.useEffect(() => setMounted(true), []);

  return (
    <button
      aria-label={t('common.footer.switchThemes')}
      role="button"
      type="button"
      title={t('common.footer.switchThemes')}
      className="flex gap-1 justify-center items-center ring-default"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {mounted && (
        (theme === 'dark' ? (<IoSunny />) : (<IoMoon />))
      )}
    </button>

  );
}