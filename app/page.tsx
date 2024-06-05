import Header from "./components/Header";
import MainContent from "./components/MainContent";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row" style={{ background: 'radial-gradient(600px at 1033px 3284px, rgba(29, 78, 216, 0.15), transparent 80%)' }}>
      <Header />
      <div className="lg:w-1/2 overflow-auto px-6 py-12 md:px-12 md:py-20 lg:py-24 lg:px-24">
        <MainContent />
      </div>
    </div>
  );
}
