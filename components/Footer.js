import SwitchLanguages from "/components/common/SwitchLanguages";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex justify-center sm:justify-between items-center gap-2 max-w-2xl px-3 py-12 sm:pt-6 mx-auto select-none text-tertiary text-sm sm:border-t border-neutral-200 dark:border-neutral-900 transition-[border-color]">
      <div>&copy; 李瑞东 2017-{currentYear}</div>
      <div className="hidden sm:flex justify-between items-center gap-2">
      
        <div className="flex justify-between items-center gap-1">
          <SwitchLanguages />
        </div>
      </div>
    </div>
  );
}
