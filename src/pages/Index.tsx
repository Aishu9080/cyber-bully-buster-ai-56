
import Hero from "@/components/Hero";
import TextAnalyzer from "@/components/TextAnalyzer";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <section className="py-8 bg-white">
          <div className="container px-4">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold">Analyze Text</h2>
              <p className="text-gray-500">Check text for potential cyberbullying content</p>
            </div>
            <TextAnalyzer />
          </div>
        </section>
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
