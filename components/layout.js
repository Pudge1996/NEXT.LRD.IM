import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "../components/ScrollToTop";

// 所有页面的布局结构

export default function Layout({ children }) {
  return (
    <div className="">
      <Header />
      <main className="bg-gradient relative">{children}</main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}
