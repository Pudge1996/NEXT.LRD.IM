const DownloadFile = ({ url, fileName, fileSize }) => {
  return (
    <div className="flex justify-between items-center gap-2 text-lg p-4 rounded-lg ring-default border border-neutral-200 dark:border-neutral-800 transition-[border-color]">
      <a className="cursor-pointer link-color ring-default leading-tight" href={url} target="_blank" rel="noopener noreferrer">
        {fileName}
      </a>
      <div className="text-base text-tertiary whitespace-nowrap">{fileSize}</div>
    </div>
  );
};

export default DownloadFile;
