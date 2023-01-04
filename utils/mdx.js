import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";
import remarkUnwrapImages from 'remark-mdx-images';
import remarkGfm from 'remark-gfm';


export const POSTS_PATH = path.join(process.cwd(), "/pages/blog/posts"); //存放 mdx 文件的文件夹

  export const getSourceOfFile = (fileName) => {
    return fs.readFileSync(path.join(POSTS_PATH, fileName), 'utf8');
  };

  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = path.join(process.cwd(), 'node_modules', 'esbuild', 'esbuild.exe');
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(process.cwd(), 'node_modules', 'esbuild', 'bin', 'esbuild');
  }
  
  export const getAllPosts = () => {
    return fs
      .readdirSync(POSTS_PATH)
      .filter((path) => /\.mdx?$/.test(path))
      .map((fileName) => {
        const source = getSourceOfFile(fileName);
        const slug = fileName.replace(/\.mdx?$/, "");
        const { data } = matter(source);
  
        return {
          frontmatter: data,
          slug: slug,
        };
      });
  };
  
  export const getSinglePost = async (slug) => {
    const source = getSourceOfFile(slug + ".mdx");
  
    const config = {
        xdmOptions(options) {
          options.remarkPlugins = [
            ...(options.remarkPlugins ?? []),
            remarkGfm,
            remarkUnwrapImages,
          ];
          return options;
        }
      };
      
      const { code, frontmatter } = await bundleMDX({ source: source }, config);
  
    return {
        slug,
      frontmatter,
      code,
    };
  };