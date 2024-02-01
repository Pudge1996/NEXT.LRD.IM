import Link from "next/link";
import DarkModeButton from "/components/common/DarkModeButton";
import SwitchLanguages from "/components/common/SwitchLanguages";
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation('common');
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex justify-center sm:justify-between items-center gap-2 max-w-2xl px-3 py-12 sm:pt-4 mx-auto select-none text-tertiary text-sm">
      <div>&copy; {t('common.information.author')} 2017-{currentYear}</div>
      <div className="hidden sm:flex justify-between items-center gap-2">
        <Link
          href="/updates"
          title={t('common.footer.updates_alt')}
          className="flex justify-between items-center gap-1 ring-default hover:text-primary"
        >
          {t('common.footer.updates')}
        </Link>
        <span> · </span>
        <Link
          href="https://lrd.im/feed.xml"
          title={t('common.footer.rss_alt')}
          target="_blank"
          className="flex justify-between items-center gap-1 ring-default hover:text-primary"
        >
          {t('common.footer.rss')}
        </Link>
        <span> · </span>
        <div className="flex justify-between items-center gap-1">
          <SwitchLanguages />
        </div>
        <span> · </span>
        <div className="flex justify-between items-center gap-1 hover:text-primary">
          <DarkModeButton />
        </div>
      </div>
    </div>
  );
}
