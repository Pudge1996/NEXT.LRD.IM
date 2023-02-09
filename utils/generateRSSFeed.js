import RSS from "rss";
import siteMetadata from "/data/siteMetadata";
import fs from "fs";
import { getAllPosts } from "./mdx";


export default async function generateRssFeed() {
  const site_url = "https://lrd.im";

  const posts = getAllPosts().posts;
  const allPosts = await posts;

  const feedOptions = {
    title: "李瑞东的设计博客",
    description: "记录我的设计生涯。",
    site_url: site_url,
    feed_url: `${site_url}/feed.xml`,
    image_url: `${siteMetadata.authorImg}`,
    pubDate: new Date(),
    copyright: `© 李瑞东 2017- ${new Date().getFullYear()}`,
    managingEditor: `${siteMetadata.author}`,
    webMaster: `${siteMetadata.author}`,
    ttl: '60',
  };

  const feed = new RSS(feedOptions);

  allPosts.map((post) => {
    let date = new Date(post.frontmatter.date.slice(0, 4), post.frontmatter.date.slice(4, 6) - 1, post.frontmatter.date.slice(6, 8));
    feed.item({
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      url: `${site_url}/blog/${post.slug}`,
      date: date,
      author: `${siteMetadata.author}`,
    });
  });

  fs.writeFileSync("./public/feed.xml", feed.xml({ indent: true }));
  
}
