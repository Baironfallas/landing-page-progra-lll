import Header from "./components/Header";
import Landing from "./components/Landing";
import Footer from "./components/Footer";

export const App = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Header />
      <Landing />
      <Footer />
    </div>
  );
};
