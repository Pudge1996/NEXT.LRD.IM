import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { IoMoon, IoSunny } from "react-icons/io5"; //https://react-icons.github.io/react-icons/icons?name=io5
// 切换浅色和深色模式的按钮

export default function DarkModeButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  return (
    <button
      aria-label="切换背景色"
      type="button"
      title="切换背景色"
      className="flex gap-1 justify-center items-center ring-default"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {mounted && (
        (theme === 'dark' ? (<IoSunny />) : (<IoMoon />))
      )}
      <span className='hidden sm:inline'>切换背景</span>
    </button>

  );
}