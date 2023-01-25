import React, { useEffect, useState } from "react";

function TableContents() {
  const [toc, setTOC] = useState([]);
  const [highlighted, setHighlighted] = useState(null);

  useEffect(() => {
    const headings = document.querySelectorAll("h2, h3");
    setTOC(
      Array.from(headings).map((heading) => ({
        id: heading.id,
        text: heading.textContent,
        level: heading.tagName,
      }))
    );
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScroll() {
    let highlightedId;
    // 当滚动高度大于120时才开始检测
    if (window.scrollY > 120) {
      // 遍历所有章节
      for (const entry of toc) {
        // 检查元素是否出现在浏览器的上半部分
        const element = document.querySelector(`#${entry.id}`);
        if (element.getBoundingClientRect().top < window.innerHeight / 2) {
          highlightedId = entry.id;
        }
      }
    }
    setHighlighted(highlightedId);
  }

  return (
    <nav className="blog-toc">
      <ol className="flex flex-col gap-[6px]">
        {toc.map((entry) => (
          <li
            key={entry.id}
            className={`toc-${entry.level.toLowerCase()} btn-base rounded -ml-3 text-base transition-none`}
          >
            <a
              href={`#${entry.id}`}
              className={`py-1 px-3 w-full block hover:no-underline hover:text-primary elis-1 ${
                entry.id === highlighted ? "text-primary font-medium" : "text-secondary"
              }`}
            >
              {entry.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default TableContents;
