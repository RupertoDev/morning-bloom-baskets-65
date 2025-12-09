import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import Categories from "@/components/Categories";
import ProductGrid from "@/components/ProductGrid";
import Features from "@/components/Features";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroBanner />
        <Categories />
        <ProductGrid />
        <Features />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
