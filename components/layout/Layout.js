import Footer from "../modules/Footer";
import Header from "../modules/Header";

function Layout({ children }) {
  return (
    <div className="m-auto max-w-[890px] px-4 sm:p-0">
      <Header />
      <div className="min-h-[100vh]">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
