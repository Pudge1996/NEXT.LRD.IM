import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";

import remarkGfm from "remark-gfm";
import a11yEmoji from "@fec/remark-a11y-emoji";
import remarkBreaks from "remark-breaks";
import rehypePrettyCode from "rehype-pretty-code";

import rehypeSlug from "rehype-slug";

export const POSTS_PATH = path.join(process.cwd(), "/pages/blog/posts"); //存放 mdx 文件的文件夹

export const getSourceOfFile = (fileName) => {
  return fs.readFileSync(path.join(POSTS_PATH, fileName), "utf8");
};

if (process.platform === "win32") {
  process.env.ESBUILD_BINARY_PATH = path.join(
    process.cwd(),
    "node_modules",
    "esbuild",
    "esbuild.exe"
  );
} else {
  process.env.ESBUILD_BINARY_PATH = path.join(
    process.cwd(),
    "node_modules",
    "esbuild",
    "bin",
    "esbuild"
  );
}

// export const getAllPosts = () => { // 原始的 getAllPosts
//   return fs
//     .readdirSync(POSTS_PATH)
//     .filter((path) => /\.mdx?$/.test(path))
//     .map((fileName) => {
//       const source = getSourceOfFile(fileName);
//       const slug = fileName.replace(/\.mdx?$/, "");
//       const { data } = matter(source);

//       return {
//         frontmatter: data,
//         slug: slug,
//       };
//     });
// };

export const getAllPosts = () => {
  const posts = fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path) && !path.startsWith("draft_"))
    .map((fileName) => {
      const source = getSourceOfFile(fileName);
      const slug = fileName.replace(/\.mdx?$/, "");
      const { data } = matter(source);

      return {
        frontmatter: data,
        slug: slug,
      };
    })
    .reverse();

  return { posts };
};

export const getCategoriesTypographic = () => {
  const posts = fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path) && !path.startsWith("draft_"))
    .map((fileName) => {
      const source = getSourceOfFile(fileName);
      const slug = fileName.replace(/\.mdx?$/, "");
      const { data } = matter(source);
      if (data.category === "字体 & 排版策略") {
        return {
          frontmatter: data,
          slug: slug,
        };
      }
    })
    .reverse()
    .filter((post) => post !== undefined);
  return posts;
};
export const getCategoriesExperience = () => {
  return fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path) && !path.startsWith("draft_"))
    .map((fileName) => {
      const source = getSourceOfFile(fileName);
      const slug = fileName.replace(/\.mdx?$/, "");
      const { data } = matter(source);
      if (data.category === "实践经验沉淀") {
        return {
          frontmatter: data,
          slug: slug,
        };
      }
    })
    .reverse()
    .filter((post) => post !== undefined);
};

export const getCategoriesSharing = () => {
  return fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path) && !path.startsWith("draft_"))
    .map((fileName) => {
      const source = getSourceOfFile(fileName);
      const slug = fileName.replace(/\.mdx?$/, "");
      const { data } = matter(source);
      if (data.category === "分享会文稿") {
        return {
          frontmatter: data,
          slug: slug,
        };
      }
    })
    .reverse()
    .filter((post) => post !== undefined);
};

export const getCategoriesTranslate = () => {
  return fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path) && !path.startsWith("draft_"))
    .map((fileName) => {
      const source = getSourceOfFile(fileName);
      const slug = fileName.replace(/\.mdx?$/, "");
      const { data } = matter(source);
      if (data.category === "翻译好文") {
        return {
          frontmatter: data,
          slug: slug,
        };
      }
    })
    .reverse()
    .filter((post) => post !== undefined);
};

export const getCategoriesSoftware = () => {
  return fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path) && !path.startsWith("draft_"))
    .map((fileName) => {
      const source = getSourceOfFile(fileName);
      const slug = fileName.replace(/\.mdx?$/, "");
      const { data } = matter(source);
      if (data.category === "软件插件") {
        return {
          frontmatter: data,
          slug: slug,
        };
      }
    })
    .reverse()
    .filter((post) => post !== undefined);
};

export const getCategoriesOthers = () => {
  return fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path) && !path.startsWith("draft_"))
    .map((fileName) => {
      const source = getSourceOfFile(fileName);
      const slug = fileName.replace(/\.mdx?$/, "");
      const { data } = matter(source);
      if (data.category === "设计之外") {
        return {
          frontmatter: data,
          slug: slug,
        };
      }
    })
    .reverse()
    .filter((post) => post !== undefined);
};

export const getSinglePost = async (slug) => {
  const codeOptions = {
    // Use one of Shiki's packaged themes
    theme: "github-dark-dimmed",
    onVisitLine(node) {
      // Prevent lines from collapsing in `display: grid` mode, and
      // allow empty lines to be copy/pasted
      if (node.children.length === 0) {
        node.children = [{ type: "text", value: " " }];
      }
    },
    // Feel free to add classNames that suit your docs
    onVisitHighlightedLine(node) {
      node.properties.className.push("highlighted-line");
    },
    onVisitHighlightedWord(node) {
      node.properties.className = ["highlighted-word"];
    },
  };
  const source = getSourceOfFile(slug + ".mdx");
  const { code, frontmatter } = await bundleMDX({
    source: source,

    mdxOptions(options) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        [remarkGfm, { singleTilde: false }],
        a11yEmoji,
        remarkBreaks,
      ];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        [rehypePrettyCode, codeOptions],
      ];

      return options;
    },
  });

  return {
    frontmatter,
    code,
  };
};
