import React from "react";
import Image from "next/image";
import Zoom from "next-image-zoom";

export default function ProjectImage({
  src, // 图片地址
  alt,
  size, // 默认是大尺寸图片，如需要改为小尺寸, size="small"
  scroll, // 默认禁止滚动，如有长图需要允许滚动时 scroll={true}
  zoom, // 默认允许放大，需要禁止放大则填入 zoom={false}。（PS: 允许 scroll 的都需要禁止放大）
  children, // figcaption 文本
  index,
}) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  zoom = !scroll;
  return (
    <>
      <figure className={scroll === true ? "scroll" : ""} key={index}>
        <div
          className={`${size === "small" ? "max-w-2xl" : ""}${
            isLoaded ? "" : "img-loading-spin"
          }${zoom === false ? "overflow-hidden" : ""}`}
        >
          {zoom === false ? (
            <Image
            src={src}
            alt={alt}
            onLoad={() => setIsLoaded(true)}
            onError={() => setIsLoaded(true)}
            fill
            sizes="100vw"
          />
          ) : (<Zoom
            src={src}
            alt={alt}
            fill
            sizes="100vw"
            onLoad={() => setIsLoaded(true)}
            onError={() => setIsLoaded(true)}
            backgroundColor="black"
            backgroundOpacity="0.8"
          ></Zoom>
          )}
        </div>
      </figure>
      {children && <figcaption>{children}</figcaption>}
    </>
  );
}
