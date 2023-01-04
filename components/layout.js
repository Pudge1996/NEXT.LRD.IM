import Header from "./Header";
import Footer from "./Footer";
// 所有页面的布局结构

export default function Layout({ children }) {
  return (
    <div className="">
      <Header />
      <main className="bg-gradient relative">{children}</main>
      <Footer />
    </div>
  );
}
